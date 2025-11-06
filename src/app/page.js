import CardList from "./components/listview/CardList";
import FilterBar from "./components/listview/FilterBar";

export default function Home() {
  return (
    <main className="mb-14 flex w-full flex-col items-center">
      <FilterBar />
      <CardList />
    </main>
  );
}
