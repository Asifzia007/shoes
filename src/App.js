
import './App.css';

import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Men from './components/Men';
import Women from './components/Women';

function App() {
  return (
   <>
   <Header/>
   <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/men" element={<Men/>} />
        <Route path="/women" element={<Women/>} />

</Routes>
<Footer/>
   </>
    
  );
}

export default App;
