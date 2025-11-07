import Card from "./Card";
import { animals } from "@/app/data/animals";

const CardList = ({ activeFilter }) => {
  // Filtrer dyr baseret på activeFilter
  const filteredAnimals =
    activeFilter === "all"
      ? animals
      : animals.filter((animal) => animal.animalType === activeFilter);

  return (
    <div className="grid w-full grid-cols-2 gap-6">
      {filteredAnimals.map((animal) => (
        <Card
          key={animal.slug}
          image={animal.image}
          firstName={animal.firstName}
          lastName={animal.lastName}
          breed={animal.breed}
          birthDate={animal.birthDate}
          slug={animal.slug}
        />
      ))}
    </div>
  );
};

export default CardList;
