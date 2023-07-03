import { getMovie } from '@/api/GetMovie';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: {
    query: string;
  };
};

export default async function Movie({ params }: Props) {
  const movie = await getMovie(params.query);
  return (
    <div>
      <h1>{movie.name}</h1>
      <p>{movie.description}</p>
      {/* {movie.watchability.items.map((item) => {
        return (
          <Image src={item.logo.url} width={200} height={200} alt={item.name} />
        );
      })} */}
    </div>
  );
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: params.query,
  };
};
