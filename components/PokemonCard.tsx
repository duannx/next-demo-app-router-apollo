import Image from "next/image";
import Link from "next/link";

export default function PokemonCard({ pokemon }) {
  return (
    <Link href={`/pokemon/${pokemon.name}`} className="block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105">
        <div className="relative h-48">
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            layout="fill"
            objectFit="contain"
            className="p-4"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {pokemon.name}
          </h2>
          <p className="text-sm text-gray-600">#{pokemon.number}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {pokemon.types.map((type) => (
              <span
                key={type}
                className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
