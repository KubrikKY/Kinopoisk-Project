import Link from 'next/link';
import style from './MovieButton.module.css';

type Props = {
  name: string;
  id: number;
};

const MovieButton = ({ name, id }: Props) => {
  return (
    <Link href={`/${id}`} className={style.MovieButton}>
      {name}
    </Link>
  );
};

export default MovieButton;
