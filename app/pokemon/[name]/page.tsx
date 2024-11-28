import { getClient } from "@/lib/ApolloClient";
import { GET_POKEMON } from "@/lib/queries";
import Image from "next/image";
import Link from "next/link";

export default async function PokemonDetailPage({
  params,
}: {
  params: { name: string };
}) {
  const { name } = await params;
  const { data } = await getClient().query({
    query: GET_POKEMON,
    variables: { name },
  });
  const pokemon = data.pokemon;
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl mx-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <Link
              href="/"
              className="inline-block mb-4 text-blue-500 hover:text-blue-700 transition-colors"
            >
              <svg
                className="w-6 h-6 inline-block mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to list
            </Link>
            <h2 className="text-3xl font-bold text-gray-800">{pokemon.name}</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <div className="relative h-64 w-full">
                <Image
                  src={pokemon.image}
                  alt={pokemon.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-xl text-gray-600 mb-2">#{pokemon.number}</p>
              <p className="mb-2">
                <span className="font-semibold">Classification:</span>{" "}
                {pokemon.classification}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Height:</span>{" "}
                {pokemon.height.minimum} - {pokemon.height.maximum}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Weight:</span>{" "}
                {pokemon.weight.minimum} - {pokemon.weight.maximum}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Max CP:</span> {pokemon.maxCP}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Max HP:</span> {pokemon.maxHP}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Flee Rate:</span>{" "}
                {pokemon.fleeRate}
              </p>
              <div className="mb-2">
                <span className="font-semibold">Types:</span>
                <div className="flex flex-wrap gap-2 mt-1">
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
              <div className="mb-2">
                <span className="font-semibold">Resistances:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {pokemon.resistant.map((res) => (
                    <span
                      key={res}
                      className="px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full"
                    >
                      {res}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="font-semibold">Weaknesses:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {pokemon.weaknesses.map((weakness) => (
                    <span
                      key={weakness}
                      className="px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full"
                    >
                      {weakness}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
