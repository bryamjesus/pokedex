import { endpoint } from '@/config/constants/endpoint';
import { SimplePokemon } from '@/interfaces/simple-pokemon';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  pokemon: SimplePokemon;
};

export const PokemonCard = ({ pokemon }: Props) => {
  const { idPokemon, name } = pokemon;
  return (
    <>
      <Link href={`/${name}`}>
        <div className="rounded-xl bg-gray-100 shadow-lg shadow-black/25 p-4 uppercase relative isolate overflow-hidden cursor-pointer group">
          <p className="absolute top-4 left-1/2 -translate-x-1/2 text-[5rem] font-extrabold text-gray-200 -z-10">{`#${idPokemon}`}</p>
          <div className="flex justify-center px-[1rem] py-[1rem]">
            <Image
              src={`${endpoint.URL_IMG_POKEMON}/${idPokemon}.svg`}
              width={100}
              height={100}
              className="max-w-[6rem] h-[96px] transform transition-transform duration-400 ease-in-out group-hover:scale-110"
              alt={`Pokemon ${name}`}
              priority={false}
            />
          </div>

          <div className="flex flex-col gap-[0.5rem] py-[1rem] px-0 p- items-center text-center">
            <div className="flex items-center gap-x-[0.5rem] flex-wrap justify-center">
              <h2 className="text-[1.4rem]">{name}</h2>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
