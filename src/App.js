import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route  path='' element={<Login/>} />
      
      <Route />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
