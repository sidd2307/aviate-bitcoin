import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/compose' element={<Compose />} />
        <Route path='/allmsg' element={<ViewAllMsgs />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
