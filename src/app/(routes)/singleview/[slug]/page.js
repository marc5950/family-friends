import PictureFrame from "../components/PictureFrame";
import Desc from "../components/Desc";
import AdoptBtn from "../components/AdoptBtn";
import { animals } from "@/app/data/animals";
import Link from "next/link";

const SingleView = async ({ params }) => {
  const { slug } = await params;

  // Find dyret baseret på slug
  const animal = animals.find((a) => a.slug === slug);

  // Hvis dyret ikke findes
  if (!animal) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Ikke fundet</h1>
        <p>Dyret med slug: {slug} blev ikke fundet.</p>
        <p>Tilgængelige slugs: {animals.map((a) => a.slug).join(", ")}</p>
        <Link href="/" className="text-primary underline">
          Gå tilbage til forsiden
        </Link>
      </div>
    );
  }

  return (
    <main className="flex w-full grow flex-col gap-4 pt-4 pb-14">
      <PictureFrame
        slug={animal.slug}
        image={animal.image}
        location={animal.location}
        image_2={animal.image_2}
        firstName={animal.firstName}
        lastName={animal.lastName}
      />
      <Desc
        firstName={animal.firstName}
        lastName={animal.lastName}
        breed={animal.breed}
        birthDate={animal.birthDate}
        gender={animal.gender}
        longDesc={animal.longDesc}
        updated={animal.updated}
        animalType={animal.animalType}
      />
      <AdoptBtn firstName={animal.firstName} lastName={animal.lastName} />
    </main>
  );
};

export default SingleView;
