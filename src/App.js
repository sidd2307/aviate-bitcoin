import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<>Hello</>} />
        {/* <Route path='/compose' element={<Compose />} />
        <Route path='/allmsg' element={<ViewAllMsgs />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
