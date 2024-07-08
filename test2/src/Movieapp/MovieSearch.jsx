// src/MovieSearch.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchItem, setMovies, setLoading, setError } from './Action';
import axios from 'axios';

const MovieSearch = () => {
  const { movies, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const options = {
                method: "GET",
                url: "https://movies-api14.p.rapidapi.com/shows}",
                headers: {
                  "x-rapidapi-key":
                    "caaea96702msh0cbc3ed36797b3ap15ec96jsn30817794d7f0",
                  "x-rapidapi-host": "movies-api14.p.rapidapi.com",
                },
              };
              dispatch(setSearchItem(query));
              dispatch(setLoading(true));
    try {
        
        const response = await axios.request(options);
                console.log(response.data);
                dispatch(setMovies( response.data));
    } catch (error) {
        

        dispatch(setError(error.message));
    }
  };
  


  return (
    <div>
      <h1>Movie Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
      {movies && movies?.map((movie) => {
                <li key={movie.id}>
               {movie.title}</li>
           
          
        })()}
      </ul>
    </div>
  );
};

export default MovieSearch;
