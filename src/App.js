
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './componets/Cart';
import Header from './componets/Header';
import Home from './componets/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

       
      </div>
    </BrowserRouter>
  );
}

export default App;
