'use client';

import { searchMovie } from '@/api/SearchApi';
import { ChangeEvent, useCallback, useState } from 'react';
import MovieButton from './MovieButton';
import { MovieSearch } from '@/types/ApiTypes';

const Search = () => {
  const [movieList, setMovieList] = useState<MovieSearch[]>([]);
  const setSearchHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const search = event.target.value;
      if (search.length > 3) {
        searchMovie(search, 3).then((movies) => setMovieList(movies));
      } else setMovieList([]);
    },
    []
  );

  return (
    <nav>
      <input type="search" name="searchMovie" onChange={setSearchHandler} />
      <div>
        <ul>
          {!!movieList.length &&
            movieList.map((movie) => {
              return (
                <MovieButton key={movie.id} name={movie.name} id={movie.id} />
              );
            })}
        </ul>
      </div>
    </nav>
  );
};

export default Search;
