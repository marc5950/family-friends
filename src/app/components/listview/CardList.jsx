"use client";

import { useState } from "react";
import Card from "./Card";

const CardList = ({ filter = "all", data }) => {
  // State til at holde styr på hvor mange dyr der vises
  const [visibleCount, setVisibleCount] = useState(10);

  // Tjek om data er gyldigt
  if (!data.data) {
    return <div className="p-4">Kunne ikke hente dyr...</div>;
  }

  // Filtrer og map dyrene til det format vi skal bruge
  const allAnimals = Object.entries(data.data)
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
    .map(([id, animal]) => ({
      slug: animal.animalID || id,
      name: animal.animalName || "Unavngivet",
      breed: animal.animalBreed || "Ukendt race",
      birthDate: animal.animalBirthdate || null,
      image: animal.animalPictures[0], // Første billede
    }));

  // Vis kun de første X dyr baseret på visibleCount
  const visibleAnimals = allAnimals.slice(0, visibleCount);

  // Tjek om der er flere dyr at vise
  const hasMore = visibleCount < allAnimals.length;

  // Log til debugging
  console.log("Active filter:", filter);
  console.log("Antal dyr fundet:", allAnimals.length);
  console.log("Antal dyr vist:", visibleAnimals.length);

  // Funktion til at indlæse 10 mere
  const loadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <div className="grid w-full grid-cols-2 gap-6">
        {visibleAnimals.map((animal) => (
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

      {/* Vis "Load More" knap hvis der er flere dyr */}
      {hasMore && (
        <button
          onClick={loadMore}
          className="hover:bg-primary hover:text-background border-primary bg-background text-primary rounded-full border-2 px-8 py-3 transition-all duration-300"
        >
          Indlæs 10 mere
        </button>
      )}
    </div>
  );
};

export default CardList;
