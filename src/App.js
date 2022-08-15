import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Chart from './pages/Chart';
import BlockChain from './pages/BlockChain';
import BitCoin from './pages/Bitcoin';

function App() {
  return (

    <div className='bg-[#131128]'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/trendchart' element={<Chart />} />
          <Route path='/blockchain' element={<BlockChain />} />
          <Route path='/bitcoin' element={<BitCoin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
