import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import FullMovieDetail from './pages/FullMovieDetail';

const App = () => {
  return (
    <div className='App'>
      <main className="mx-2 mt-10 sm:mx-5 md:mx-10">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie-detail" element={<FullMovieDetail />} />
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App