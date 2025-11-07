import Image from "next/image";
import LikeBtn from "@/app/components/LikeBtn";
import ReturnBtn from "@/app/components/ReturnBtn";
import Location from "./Location";

const PictureFrame = ({
  slug,
  firstName,
  lastName,
  image_2,
  location,
  image,
}) => {
  return (
    <div className="grid grow">
      <ReturnBtn />
      <LikeBtn slug={slug} className="m-4" />
      <Location
        location={location}
        image_2={image_2}
        firstName={firstName}
        lastName={lastName}
      />
      <Image
        src={image}
        alt={`${firstName} ${lastName} picture`}
        width={300}
        height={200}
        className="col-1 row-1 h-full w-full rounded-lg object-cover"
        draggable={false}
      />
    </div>
  );
};

export default PictureFrame;
