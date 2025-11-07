"use client";

import Image from "next/image";
import FilterKnap from "./FilterKnap";
import { animalCategories } from "@/app/data/animalCategories";

const FilterBar = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="my-6 flex w-full snap-x gap-4 overflow-x-auto overflow-y-hidden scroll-smooth pb-3">
      <button
        onClick={() => setActiveFilter("all")}
        className={`hover:bg-primary hover:text-background hover:border-primary flex w-max shrink-0 cursor-pointer snap-start items-center gap-2 rounded-full border-2 py-2.5 pr-6 pl-2.5 transition-all duration-300 ${activeFilter === "all" ? "border-primary bg-primary text-background" : "border-border text-dark-muted bg-none"}`}
      >
        <Image
          src="https://placecats.com/neo/300/200"
          alt="All Animals"
          width={32}
          height={32}
          className="size-8 rounded-full"
          draggable={false}
        />
        Alle
      </button>
      {animalCategories.map((category) => (
        <FilterKnap
          key={category.slug}
          image={category.image}
          text={category.text}
          active={activeFilter === category.slug}
          onClick={() => setActiveFilter(category.slug)}
        />
      ))}
    </div>
  );
};

export default FilterBar;
