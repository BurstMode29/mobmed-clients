import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './pages/Shop';
import Items from './components/Items';
import RequestForm from './pages/RequestForm';
import Navigation from './components/Navigation';
import Book from './pages/Book';
import Cart from './components/Cart';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/shop' element={<Shop />} />
        <Route path='/request' element={<RequestForm />} />
        <Route path='/book' element={<Book />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Items />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/' element={<Navigation />} />
        <Route path='/message' element={<Message />} />
      </Routes>

    </div>
  );
}

export default App;
