import Image from "next/image";
import LikeBtn from "../../../components/LikeBtn";
import ReturnBtn from "@/app/components/ReturnBtn";

const PictureFrame = () => {
  return (
    <div className="grid grow">
      <ReturnBtn />
      <LikeBtn liked={false} />
      <Image
        src="https://placecats.com/neo/300/200"
        alt="Picture Frame"
        width={300}
        height={200}
        className="col-1 row-1 h-full w-full rounded-lg object-cover"
        draggable={false}
      />
    </div>
  );
};

export default PictureFrame;
