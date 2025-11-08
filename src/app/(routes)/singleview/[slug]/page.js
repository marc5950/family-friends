import PictureFrame from "../components/PictureFrame";
import Desc from "../components/Desc";
import AdoptBtn from "../components/AdoptBtn";
import Link from "next/link";

const SingleView = async ({ params }) => {
  // Hent slug fra params (Next.js 15 kræver await)
  const { slug } = await params;

  // Fetch data fra API med 60 sekunders cache
  const res = await fetch("http://localhost:3000/api", {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  // Tjek om API returnerede data
  if (!data.data) {
    return <div className="p-4">Kunne ikke hente data...</div>;
  }

  // Find det specifikke dyr baseret på slug
  const animalEntry = Object.entries(data.data).find(
    ([id, animal]) => animal.animalID === slug,
  );

  // Hvis dyret ikke findes, vis fejlbesked
  if (!animalEntry) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Ikke fundet</h1>
        <p>Dyret blev ikke fundet.</p>
        <Link href="/" className="text-primary underline">
          Gå tilbage
        </Link>
      </div>
    );
  }

  const animalData = animalEntry[1];

  // Map API data til vores format
  const animal = {
    slug: animalData.animalID,
    name: animalData.animalName || "Unavngivet",
    breed: animalData.animalBreed || "Ukendt race",
    birthDate: animalData.animalBirthdate || null,
    image: animalData.animalPictures?.[0] || null, // Første billede
    image_2: animalData.animalPictures?.[1] || null, // Andet billede
    animalType: animalData.animalSpecies?.toLowerCase() || "unknown",
    gender: animalData.animalSex?.toLowerCase() || "unknown",
    longDesc: animalData.animalDescription || "Ingen beskrivelse tilgængelig",
    location: animalData.animalLocationCitystate || null,
    updated: animalData.animalUpdatedDate || null,
  };

  // Log til debugging
  console.log("Single view data:", animal);
  return (
    <main className="flex w-full grow flex-col gap-4 pt-4 pb-14">
      <PictureFrame
        slug={animal.slug}
        image={animal.image}
        image_2={animal.image_2}
        location={animal.location}
        name={animal.name}
      />
      <Desc
        name={animal.name}
        breed={animal.breed}
        birthDate={animal.birthDate}
        gender={animal.gender}
        longDesc={animal.longDesc}
        updated={animal.updated}
        animalType={animal.animalType}
      />
      <AdoptBtn name={animal.name} />
    </main>
  );
};

export default SingleView;
