import PokemonList from "@/components/PokemonList";

export default async function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Pokémon List</h1>
      <PokemonList />
    </main>
  );
}
