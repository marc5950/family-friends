import Image from "next/image";

const FilterKnap = ({ image, text, active }) => {
  return (
    <button
      className={`hover:bg-primary hover:text-background hover:border-primary flex w-max shrink-0 cursor-pointer snap-start items-center gap-2 rounded-full border-2 py-2.5 pr-6 pl-2.5 transition-all duration-300 ${active ? "border-primary bg-primary text-background" : "border-border text-dark-muted bg-none"}`}
    >
      <Image
        src={image}
        alt={text}
        width={32}
        height={32}
        className="size-8 rounded-full"
        draggable={false}
      />
      {text}
    </button>
  );
};

export default FilterKnap;
