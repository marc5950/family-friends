import Card from "./Card";

const CardList = async ({ filter = "all", data }) => {
  // Tjek om data er gyldigt
  if (!data.data) {
    return <div className="p-4">Kunne ikke hente dyr...</div>;
  }

  // Filtrer og map dyrene til det format vi skal bruge
  const animals = Object.entries(data.data)
    .filter(([id, animal]) => {
      // Kun dyr med mindst 2 billeder
      const hasEnoughImages =
        animal.animalPictures && animal.animalPictures.length >= 2;

      // Filtrer efter dyretype hvis ikke "all"
      const matchesFilter =
        filter === "all" ||
        animal.animalSpecies?.toLowerCase() === filter.toLowerCase();

      return hasEnoughImages && matchesFilter;
    })
    .slice(0, 10) // Vis kun de første 10 dyr
    .map(([id, animal]) => ({
      slug: animal.animalID || id,
      name: animal.animalName || "Unavngivet",
      breed: animal.animalBreed || "Ukendt race",
      birthDate: animal.animalBirthdate || null,
      image: animal.animalPictures[0], // Første billede
    }));

  // Log til debugging
  console.log("Active filter:", filter);
  console.log("Antal dyr fundet:", animals.length);

  return (
    <div className="grid w-full grid-cols-2 gap-6">
      {animals.map((animal) => (
        <Card
          key={animal.slug}
          image={animal.image}
          name={animal.name}
          breed={animal.breed}
          birthDate={animal.birthDate}
          slug={animal.slug}
        />
      ))}
    </div>
  );
};

export default CardList;
