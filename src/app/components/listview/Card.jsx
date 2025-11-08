import Link from "next/link";
import Image from "next/image";
import LikeBtn from "../LikeBtn";
import { formatAge } from "@/app/utils/formatAge";

// Card komponent til at vise et enkelt dyr i list view
const Card = ({ image, name, breed, birthDate, slug }) => {
  return (
    <div className="shadow-[rgba(19, 21, 68, 0.06)] flex w-full flex-col rounded-lg bg-white text-black shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="grid">
        <LikeBtn slug={slug} className="m-2" />
        <Link
          draggable={false}
          href={`/singleview/${slug}`}
          className="col-1 row-1"
        >
          <Image
            loading="eager"
            src={image?.urlSecureFullsize}
            alt={`placeholder image of a ${name}`}
            width={image?.resolutionX}
            height={image?.resolutionY}
            className="h-30 w-full rounded-lg object-cover object-top"
            draggable={false}
          />
        </Link>
      </div>
      <Link draggable={false} href={`/singleview/${slug}`}>
        <div className="flex flex-col gap-1 p-2">
          <div className="flex items-center justify-between">
            <h2 className="text-[15px] font-bold">{name}</h2>
            <p className="text-dark-muted text-[13px]/[120%]">
              {formatAge(birthDate)}
            </p>
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
