"use client";

import { useState } from "react";
import CardList from "./components/listview/CardList";
import FilterBar from "./components/listview/FilterBar";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <main className="mb-14 flex w-full flex-col items-center">
      <FilterBar
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <CardList activeFilter={activeFilter} />
    </main>
  );
}
