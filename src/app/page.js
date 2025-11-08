import CardList from "./components/listview/CardList";
import FilterBarWrapper from "./components/listview/FilterBarWrapper";

// Fetch data én gang udenfor komponenten så det caches
async function getAnimalData() {
  // Brug process.env for at få den rigtige URL (virker både lokalt og på Vercel)
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api`, {
    cache: "force-cache", // Cache så længe som muligt
  });
  return res.json();
}

export default async function Home({ searchParams }) {
  // Hent filter fra URL search params (Next.js 15 kræver await)
  const params = await searchParams;
  const filter = params?.filter || "all";

  // Hent data (caches automatisk)
  const data = await getAnimalData();

  // Filtrer først dyr med mindst 2 billeder
  const validAnimals = data.data
    ? Object.values(data.data).filter(
        (animal) => animal.animalPictures && animal.animalPictures.length >= 2,
      )
    : [];

  // Find kun dyretyper der har dyr med mindst 2 billeder
  const animalTypesCount = {};
  validAnimals.forEach((animal) => {
    const species = animal.animalSpecies;
    if (species) {
      animalTypesCount[species] = (animalTypesCount[species] || 0) + 1;
    }
  });

  // Opret filter knapper kun for kategorier med dyr
  const animalTypes = Object.keys(animalTypesCount).map((type) => ({
    slug: type.toLowerCase(),
    text: type,
    image: `https://placecats.com/neo/300/200`, // Placeholder billede
    count: animalTypesCount[type],
  }));

  return (
    <main className="mb-16 flex w-full flex-col items-center">
      <FilterBarWrapper animalTypes={animalTypes} />
      <CardList filter={filter} data={data} />
    </main>
  );
}
