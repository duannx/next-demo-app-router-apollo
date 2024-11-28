import { getClient } from "@/lib/ApolloClient";
import { GET_POKEMONS } from "@/lib/queries";
import PokemonCard from "./PokemonCard";

export default async function PokemonList() {
  const { data } = await getClient().query({
    query: GET_POKEMONS,
    variables: { first: 20 },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
