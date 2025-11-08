"use client";

import { useRouter, useSearchParams } from "next/navigation";
import FilterBar from "./FilterBar";

export default function FilterBarWrapper({ animalTypes }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get("filter") || "all";

  const setActiveFilter = (filter) => {
    const params = new URLSearchParams(searchParams);
    if (filter === "all") {
      params.delete("filter");
    } else {
      params.set("filter", filter);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <FilterBar
      activeFilter={activeFilter}
      setActiveFilter={setActiveFilter}
      animalTypes={animalTypes}
    />
  );
}
