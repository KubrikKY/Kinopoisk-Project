import { MovieCard } from '@/types/ApiTypes';

export async function getMovie(id: string): Promise<MovieCard> {
  const res = await fetch(`https://api.kinopoisk.dev/v1.3/movie/${id}`, {
    headers: {
      'X-API-KEY': '5G2G800-6WW4PFV-KE2GH8E-9YWYYG3',
    },
  });
  const data: MovieCard = await res.json();
  return data;
}
