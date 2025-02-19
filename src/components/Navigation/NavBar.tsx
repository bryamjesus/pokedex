import Image from 'next/image';
import Link from 'next/link';

export const NavBar = () => {
  return (
    <>
      <nav className="flex align-center justify-end p-4">
        <Link href="/">
          <Image
            src="/images/pokedex.png"
            width={120}
            height={100}
            alt="Pokedex"
            priority
            style={{ width: 'auto', height: 'auto' }} // Solución
          />
        </Link>
      </nav>
    </>
  );
};
