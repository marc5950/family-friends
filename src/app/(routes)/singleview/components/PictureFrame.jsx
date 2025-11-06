import Image from "next/image";
import LikeBtn from "@/app/components/LikeBtn";
import ReturnBtn from "@/app/components/ReturnBtn";
import Location from "./Location";

const PictureFrame = ({ liked, name, image_2, location, image }) => {
  return (
    <div className="grid grow">
      <ReturnBtn />
      <LikeBtn liked={liked} className="m-4" />
      <Location location={location} image_2={image_2} name={name} />
      <Image
        src={image}
        alt={`${name} picture`}
        width={300}
        height={200}
        className="col-1 row-1 h-full w-full rounded-lg object-cover"
        draggable={false}
      />
    </div>
  );
};

export default PictureFrame;
