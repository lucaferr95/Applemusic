import {
    Container,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Button,
  } from 'react-bootstrap'
  import { StarFill } from 'react-bootstrap-icons'
  import { useSelector, useDispatch } from 'react-redux'
  import { Link, useNavigate } from 'react-router-dom'
  import { removeFromFavouriteAction } from './Redux/Action'
  
  const Favourites = () => {
    // Ottieni i brani preferiti dallo store
    const favourites = useSelector(state => state.fav.list);  // Assumendo che state.fav.list contenga i preferiti
  
    return (
      <div className="text-white">
        <h1>I tuoi preferiti</h1>
        {favourites.length === 0 ? (
          <p>Non hai aggiunto nessun brano ai preferiti ancora.</p>
        ) : (
          <div>
            {favourites.map((song, index) => (
              <div key={index} className="song-card">
                <img src={song.album.cover} alt={song.title} />
                <h5>{song.title}</h5>
                <p>{song.artist.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Favourites;