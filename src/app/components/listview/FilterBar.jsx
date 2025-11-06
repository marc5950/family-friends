"use client";

import FilterKnap from "./FilterKnap";
import { useRef } from "react";

const FilterBar = () => {
  return (
    <div className="my-6 flex w-full snap-x gap-4 overflow-x-auto overflow-y-hidden scroll-smooth pb-1">
      <FilterKnap
        image="https://placecats.com/neo/300/200"
        text="Alle"
        active={true}
      />
      <FilterKnap
        image="https://placecats.com/neo/300/200"
        text="Katte"
        active={false}
      />
      <FilterKnap
        image="https://placecats.com/neo/300/200"
        text="Hunde"
        active={false}
      />
      <FilterKnap
        image="https://placecats.com/neo/300/200"
        text="Grise"
        active={false}
      />
      <FilterKnap
        image="https://placecats.com/neo/300/200"
        text="Grise"
        active={false}
      />
      <FilterKnap
        image="https://placecats.com/neo/300/200"
        text="Grise"
        active={false}
      />
    </div>
  );
};

export default FilterBar;
