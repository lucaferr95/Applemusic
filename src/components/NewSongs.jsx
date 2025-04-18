import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col, Card, Button } from 'react-bootstrap';

const NewSongs = () => {
  const [songsData, setSongsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = async () => {
    // Lista dei miei cantanti
    const artists = ['MarcoMengoni', 'AnaMena', 'Anitta', 'Annalisa'];

    //faccio la fetch
    const fetchPromises = artists.map(artist => {
      return fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`)
        .then(response => response.json())
        .then(data => ({
          artist,
          songs: data.data, // Prendi i dati della canzone
        }))
        .catch(err => {
          console.error(err);
          setError('Errore nel caricamento dei dati');
        });
    });

    try {
      const allData = await Promise.all(fetchPromises);
      setSongsData(allData);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError('Errore nel caricamento dei dati');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Mappare attraverso ogni cantante e creare un carosello
  const renderCarousels = () => {
    return songsData.map((artistData, index) => (
      <section key={index} className="mb-4">
        <h4 className="text-white">{artistData.artist}</h4>
        <Carousel>
          {/* Crea un carosello per ogni 4 canzoni */}
          {Array.from({ length: Math.ceil(artistData.songs.length / 4) }, (_, i) => (
            <Carousel.Item key={i}>
              <Row className="g-3">
                {/* Mostra 4 card per ogni slide */}
                {artistData.songs.slice(i * 4, (i + 1) * 4).map((song, idx) => (
                  <Col md={3} key={idx}>
                    <Card className="bg-dark text-white border-0">
                      <Card.Img src={song.album.cover} alt={song.title} />
                      <Card.Body>
                        <Card.Title>{song.title}</Card.Title>
                        <Button className="glow-button">Ascolta</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    ));
  };

  return (
    <div className="text-white bg-black">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {renderCarousels()}
    </div>
  );
};

export default NewSongs;
