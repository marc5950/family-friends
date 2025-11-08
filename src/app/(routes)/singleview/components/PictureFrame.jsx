import Image from "next/image";
import LikeBtn from "@/app/components/LikeBtn";
import ReturnBtn from "@/app/components/ReturnBtn";
import Location from "./Location";

const PictureFrame = ({ slug, name, location, image, image_2 }) => {
  return (
    <div className="grid grow">
      <ReturnBtn />
      <LikeBtn slug={slug} className="m-4" />
      <Location location={location} image_2={image_2} name={name} />
      <Image
        src={image?.urlSecureFullsize}
        alt={`placeholder image of a ${name}`}
        width={image?.resolutionX}
        height={image?.resolutionY}
        className="col-1 row-1 h-full w-full rounded-lg object-cover"
        draggable={false}
      />
    </div>
  );
};

export default PictureFrame;
