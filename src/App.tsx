import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import FullMovieDetail from './pages/FullMovieDetail';

const App = () => {
  return (
    <div className='App'>
      <main className="p-5 sm:p-10 m-5">
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