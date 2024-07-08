import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import FullMovieDetail from './pages/FullMovieDetail';

const App = () => {
  return (
    <div className='App'>
      <main className="m-2 sm:m-5 md:m-10">
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