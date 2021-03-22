import React from 'react';
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
} from '../config';
import HeroImage from '../component/elements/HeroImage';
import Grid from '../component/elements/Grid';
import MovieThumb from '../component/elements/MovieThumb';
import LoadMoreBtn from '../component/elements/LoadMoreBtn';
import Spinner from '../component/elements/Spinner';

import { useHomeFetch } from '../component/hooks/useHomeFetch';

import NoImage from '../assets/image/no_image.jpg';

const Home = () => {
  const [{ state, loading }, fetchData] = useHomeFetch();

  const loadMoreMovies = () => {
    const endpoint = `${API_URL}${state.searchTerm ? 'search/' : ''}movie${
      state.searchTerm ? '' : '/popular'
    }?api_key=${API_KEY}&query=${state.searchTerm ||
      ''}&page=${state.currentPage + 1}`;

    fetchData(endpoint);
  };

  return (
    <>
      {state.heroImage && !state.searchTerm ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
          title={state.heroImage.original_title}
          text={state.heroImage.overview}
        />
      ) : null}
      {state.heroImage && (
        <Grid header={state.searchTerm ? 'Search Result' : 'Popular Movies'}>
          {state.movies.map(element => (
            <MovieThumb
              key={element.id}
              clickable
              image={
                element.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}`
                  : NoImage
              }
              movieId={element.id}
              movieName={element.original_title}
            />
          ))}
        </Grid>
      )}
      {loading && <Spinner />}
      {state.currentPage <= state.totalPages && !loading && (
        <LoadMoreBtn text="Load More" onClick={loadMoreMovies} />
      )}
    </>
  );
};

export default Home;
