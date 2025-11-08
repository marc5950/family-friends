import CardList from "./components/listview/CardList";
import FilterBarWrapper from "./components/listview/FilterBarWrapper";

export default async function Home({ searchParams }) {
  // Hent filter fra URL search params (Next.js 15 kræver await)
  const params = await searchParams;
  const filter = params?.filter || "all";

  // Fetch data fra API med 60 sekunders cache
  const res = await fetch("http://localhost:3000/api", {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  // Find alle unikke dyretyper til filter knapperne
  const animalTypes = data.data
    ? [
        ...new Set(
          Object.values(data.data).map((animal) => animal.animalSpecies),
        ),
      ]
        .filter(Boolean) // Fjern null/undefined værdier
        .map((type) => ({
          slug: type.toLowerCase(),
          text: type,
          image: `https://placecats.com/neo/300/200`, // Placeholder billede
        }))
    : [];

  return (
    <main className="mb-14 flex w-full flex-col items-center">
      <FilterBarWrapper animalTypes={animalTypes} />
      <CardList filter={filter} data={data} />
    </main>
  );
}
