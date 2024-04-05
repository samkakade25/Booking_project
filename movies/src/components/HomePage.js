import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { getAllMovies } from './api-helpers/api-helpers.js';
import MovieItem from "./Movies/MovieItem.js";

const HomePage = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);
  return <Box width={"100%"} height={"100%"}margin={"auto"} marginTop={2}>
        <Box margin={"auto"} width={"80%"} height={"40vh"} padding={2}>
          <img src="https://e1.pxfuel.com/desktop-wallpaper/674/343/desktop-wallpaper-star-wars-the-last-jedi-2017-movie-poster-red-background-e5a909-star-wars-movie.jpg"  alt="Brahmastra" width={"100%"} height={"100%"} />
        </Box>
        <Box padding={5} margin={"auto"}>
          <Typography variant='h4' textAlign={"center"}>
            Latest Releases
          </Typography>
        </Box>
        <Box
          margin={"auto"}
          display={"flex"}
          width={"80%"}
          justifyContent={"center"}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          {movies && 
          movies
          .slice(0, 4)
            .map((movie, index) => (
            <MovieItem 
              id={movie._id}
              title={movie.title}
              posterUrl={movie.posterUrl}
              releaseDate={movie.releaseDate}
              key={index}
            />
          ))}
        </Box>
        <Box display={"flex"} padding={5} margin={"auto"}>
          <Button 
            LinkComponent={Link}
            to="/movies"
            variant="outlined"
            sx={{ margin: "auto", color: "#2b2d42" }}
            >
            View All Movies
          </Button>

        </Box>
  </Box>
}

export default HomePage