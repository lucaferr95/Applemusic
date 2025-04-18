import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNav from './components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyFooter from './components/MyFooter';
import MyHome from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <MyNav />
      <MyHome/>
    <MyFooter/>
    </BrowserRouter>
  );
};

export default App;
