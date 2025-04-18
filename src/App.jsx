import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNav from './components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyFooter from './components/MyFooter';
import MyHome from './components/Home';
import NewSongs from './components/NewSongs';

const App = () => {
  return (
    <BrowserRouter>
      <MyNav />
      
  
    <Routes>
      <Route path='/' element= {<MyHome/>}/>
        <Route path="/novità" element={<NewSongs />} />
        
      </Routes>
      <MyFooter/>
    </BrowserRouter>
  );
};

export default App;
