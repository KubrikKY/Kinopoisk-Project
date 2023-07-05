import Image from 'next/image';
import Search from './Search';
import style from './Header.module.css';

const TheHeader = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Image src="/logo.svg" alt="logo" width={163} height={36} />
        <Search />
      </div>
    </header>
  );
};

export default TheHeader;
