import Home from './components/Home'
import './App.css';
import SplashScreen from './components/SplashScreen.js';
import Farmerdashboard from './components/Farmerdashboard';
import Signup from './components/Signup';
import Investordashboard from './components/Investordashboard';
import {Route , Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Maincontent from './components/Maincontent';
import Soiltest from './components/Soiltest';
import OfferDetails from './components/OfferDetails';
import Sell from './components/Sell';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Maincontent/>}/>
    <Route path='/farmerdashboard' element={<Farmerdashboard/>}/>
    <Route path='/investordashboard' element={<Investordashboard/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/applyforsoiltest' element={<Soiltest/>}/>
    <Route path='/offer-details' element={<OfferDetails/>}/>
    <Route path='/sell' element={<Sell/>}/>
    </Routes>
    </>
  );
}

export default App;
