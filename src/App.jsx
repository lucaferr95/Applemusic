import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNav from './components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyFooter from './components/MyFooter';

const App = () => {
  return (
    <BrowserRouter>
      <MyNav />
    <MyFooter/>
    </BrowserRouter>
  );
};

export default App;
