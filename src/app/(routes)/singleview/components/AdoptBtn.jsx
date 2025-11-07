const AdoptBtn = ({ firstName, lastName }) => {
  return (
    <button className="bg-primary text-background w-full cursor-pointer rounded-full px-2.5 py-[18px] transition-all duration-300 hover:scale-105">
      <span className="font-bold">Adopt </span>
      {firstName} {lastName}
    </button>
  );
};

export default AdoptBtn;
