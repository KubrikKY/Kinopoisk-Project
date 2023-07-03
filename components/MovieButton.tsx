import Link from 'next/link';

type Props = {
  name: string;
  id: number;
};

const MovieButton = ({ name, id }: Props) => {
  return <Link href={`/${id}`}>{name}</Link>;
};

export default MovieButton;
