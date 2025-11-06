const Tags = ({ animalType, gender, age, breed }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      <li className="text-tertiary w-max rounded-full bg-[#ACD7FF] px-3.5 py-2">
        {animalType?.charAt(0).toUpperCase() + animalType?.slice(1)}
      </li>
      <li className="text-tertiary w-max rounded-full bg-[#EDA8B3] px-3.5 py-2">
        {gender?.charAt(0).toUpperCase() + gender?.slice(1)}
      </li>
      <li className="text-tertiary w-max rounded-full bg-[#C5E59C] px-3.5 py-2">
        {age}
      </li>
      <li className="text-tertiary w-max rounded-full bg-[#F1E689] px-3.5 py-2">
        {breed}
      </li>
    </ul>
  );
};

export default Tags;
