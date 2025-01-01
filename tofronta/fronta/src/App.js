import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlxAfrica from './pages/comphome/alxafica';
import Umi from './pages/comphome/umi';
import Upwork from './pages/comphome/upwork';
import AlxVentures from './pages/comphome/alxventurs';
import Algorithmics from './pages/comphome/Algorithmics';
import TFM from './pages/comphome/tfm';
import ReactComponent from './pages/comphome/react';
import MongoDB from './pages/comphome/mongo';
import Express from './pages/comphome/express';
import NodeJS from './pages/comphome/node';
import Holberton from './pages/comphome/holberton';
import Home from './pages/home';
import Projects from './pages/project';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/alxafrica' element={<AlxAfrica />} />
            <Route path='/upwork' element={<Upwork />} />
            <Route path='/umi' element={<Umi />} />
            <Route path='/tfm' element={<TFM />} />
            <Route path='/alxventurs' element={<AlxVentures />} />
            <Route path='/algorithmics' element={<Algorithmics />} />
            <Route path='/react' element={<ReactComponent />} />
            <Route path='/mongodb' element={<MongoDB />} />
            <Route path='/express' element={<Express />} />
            <Route path='/nodejs' element={<NodeJS />} />
            <Route path='/holberton' element={<Holberton />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
