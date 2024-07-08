import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import FullMovieDetail from './pages/FullMovieDetail';
import FavoritesHub from './pages/FavoritesHub';
import Navbar from './components/common/Navbar';

const App = () => {
  return (
    <div className='App'>
      <Router>

        {/* Navbar en todo el sitio */}
        <Navbar />

        <main className="mx-2 mt-5 sm:mx-5 md:mx-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie-detail" element={<FullMovieDetail />} />
            <Route path="/my-favorites" element={<FavoritesHub />} />
          </Routes>
        </main>

      </Router>
    </div>
  )
}

export default App