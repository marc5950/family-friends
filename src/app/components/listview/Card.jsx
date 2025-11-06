import Link from "next/link";
import Image from "next/image";
import LikeBtn from "../LikeBtn";

const Card = ({ image, name, breed, age, liked }) => {
  return (
    <div className="shadow-[rgba(19, 21, 68, 0.06)] flex w-full flex-col rounded-lg bg-white text-black shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="grid">
        <LikeBtn liked={liked} />
        <Link draggable={false} href="/singleview" className="col-1 row-1">
          <Image
            loading="eager"
            src={image}
            alt={`placeholder image of a ${name}`}
            width={300}
            height={200}
            className="rounded-lg"
            draggable={false}
          />
        </Link>
      </div>
      <Link draggable={false} href="/singleview">
        <div className="flex flex-col gap-1 p-2">
          <div className="flex items-center justify-between">
            <h2 className="text-[15px] font-bold">{name}</h2>
            <p className="text-dark-muted text-[13px]/[120%]">{age}</p>
          </div>
          <p className="text-dark-muted max-w-[13ch] text-[12px]/[120%]">
            {breed}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
