import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import ReviewList from './components/ReviewList';
import SingleReview from './components/SingleReview';
import Users from './components/Users';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reviews' element={<ReviewList />} />
        <Route path='/reviews/:review_id' element={<SingleReview />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
