import Image from "next/image";
import Card from "./components/listview/Card";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 sm:items-start">
        <h1 className="text-4xl font-bold">
          Welcome to the Family & Friends App
        </h1>
        <Card />
      </main>
    </div>
  );
}
