import Link from "next/link";
import Image from "next/image";

const Card = () => {
  return (
    <Link href="/singleview">
      <div className="flex w-min min-w-[300px] flex-col gap-4 rounded-lg bg-white text-black shadow-md hover:shadow-lg">
        <Image
          loading="eager"
          src="https://placecats.com/neo/300/200"
          alt="placeholder image of a cat"
          width={300}
          height={200}
          className="rounded-lg"
        />
        <h2>Harry</h2>
        <p>Yorkshire Terrier</p>
        <p>2 mdr.</p>
      </div>
    </Link>
  );
};

export default Card;
