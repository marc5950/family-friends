import Tags from "./Tags";

const Desc = ({ name, breed, age, animalType, gender, longDesc, updated }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[28px]/[120%] font-bold">{name}</h2>
      <Tags animalType={animalType} gender={gender} age={age} breed={breed} />
      <p>{longDesc}</p>
      <p className="text-dark-muted -mt-2 text-[13px]/[150%]">{updated}</p>
    </div>
  );
};

export default Desc;
