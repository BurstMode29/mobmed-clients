import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Listings from './components/Listings';
import RequestForm from './components/RequestForm';
import Navigation from './components/Navigation';
import Book from './components/Book';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/shop' element={<Shop />} />
        <Route path='/request' element={<RequestForm />} />
        <Route path='/book' element={<Book />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Listings />} />
        <Route path='/' element={<Navigation />} />
      </Routes>

    </div>
  );
}

export default App;
