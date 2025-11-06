import Card from "./Card";
import { animals } from "@/app/data/animals";

const CardList = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-6">
      {animals.map((animal) => (
        <Card
          key={animal.slug}
          image={animal.image}
          name={animal.name}
          breed={animal.breed}
          age={animal.age}
          liked={animal.liked}
          slug={animal.slug}
        />
      ))}
    </div>
  );
};

export default CardList;
