import Tags from "./Tags";

const formatUpdatedDate = (dateString) => {
  const updatedDate = new Date(dateString);
  const now = new Date();
  const diffInMs = now - updatedDate;
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

  // Hvis mindre end 24 timer siden
  if (diffInHours < 24) {
    return `Opdateret for ${diffInHours} timer siden`;
  }

  // Ellers vis dato med måned
  const months = [
    "januar",
    "februar",
    "marts",
    "april",
    "maj",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "december",
  ];
  const day = updatedDate.getDate();
  const month = months[updatedDate.getMonth()];

  return `Opdateret den ${day}. ${month}`;
};

const Desc = ({
  firstName,
  lastName,
  breed,
  birthDate,
  animalType,
  gender,
  longDesc,
  updated,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[28px]/[120%] font-bold">
        {firstName} {lastName}
      </h2>
      <Tags
        animalType={animalType}
        gender={gender}
        birthDate={birthDate}
        breed={breed}
      />
      <p>{longDesc}</p>
      <p className="text-dark-muted -mt-2 text-[13px]/[150%]">
        {formatUpdatedDate(updated)}
      </p>
    </div>
  );
};

export default Desc;
