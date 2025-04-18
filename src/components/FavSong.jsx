import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavouriteAction } from './Redux/Action'; // Assicurati che questa sia l'azione giusta
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Favourites = () => {
  // Ottieni i brani preferiti dallo store
  const favourites = useSelector(state => state.fav.list);
  // Assumendo che state.fav.list contenga i preferiti
  const dispatch = useDispatch();

  const handleRemove = (song) => {
    dispatch(removeFromFavouriteAction(song)); // Dispatch l'azione per rimuovere il brano dai preferiti
  };

  return (
    <Container className="text-white">
      <h1>I tuoi preferiti</h1>
      {favourites.length === 0 ? (
        <p>Non hai aggiunto nessun brano ai preferiti ancora.</p>
      ) : (
        <Row className="g-3">
          {favourites.map((song, index) => (
            <Col key={index} md={4}>
              <Card className="bg-dark text-white border-0">
                <Card.Img variant="top" src={song.album.cover} alt={song.title} />
                <Card.Body>
                  <Card.Title>{song.title}</Card.Title>
                  <Card.Text>{song.artist.name}</Card.Text>
                  <Button
                    className="glow-button"
                    variant="danger"
                    onClick={() => handleRemove(song)}
                  >
                    Rimuovi
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Favourites;
