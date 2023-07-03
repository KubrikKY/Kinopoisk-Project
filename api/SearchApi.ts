import { Responce } from '@/types/ApiTypes';

export async function searchMovie(query: string, limit: number = 5) {
  const res = await fetch(
    `https://api.kinopoisk.dev/v1.2/movie/search?page=1&limit=${limit}&query=${query})`,
    {
      headers: {
        'X-API-KEY': '5G2G800-6WW4PFV-KE2GH8E-9YWYYG3',
      },
    }
  );
  const data: Responce = await res.json();
  return data.docs;
}
