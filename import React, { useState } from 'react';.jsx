import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieList from './MovieList';
import Filtre from './Filtre';
import MovieDetails from './MovieDetails';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Dragon ball z",
      description: "Un guerrier de l'espace qui veut etre fort",
      posterURL: "https://link-to-poster.jpg",
      rating: 10,
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 2,
      title: "Titanic",
      description: "Un amour tragique à bord du Titanic.",
      posterURL: "https://link-to-poster.jpg",
      rating: 10,
      trailerLink: "https://www.youtube.com/embed/kVrqfYjkTdQ",
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleTitleFilter = (title) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const handleRatingFilter = (rating) => {
    const filtered = movies.filter((movie) => movie.rating >= rating);
    setFilteredMovies(filtered);
  };

  return (
    <Router>
      <div className="App">
        <h1>Ma Liste de Films</h1>
        <Filtre
          onTitleFilter={handleTitleFilter}
          onRatingFilter={handleRatingFilter}
        />
        <Routes>
          <Route path="/" element={<MovieList movies={filteredMovies} />} />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
