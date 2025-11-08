import Image from "next/image";

const Location = ({ location, image_2, name }) => {
  return (
    <div className="col-1 row-1 m-5 flex h-12 w-35 gap-2.5 self-end rounded-lg bg-[#ffffff40] py-2 pr-4 pl-2 backdrop-blur-sm">
      <Image
        src={image_2?.urlSecureFullsize}
        alt={`placeholder image of a ${name}`}
        width={image_2?.resolutionX}
        height={image_2?.resolutionY}
        className="aspect-square h-full w-auto rounded-md object-cover"
        draggable={false}
      />
      <p className="text-background text-sm">{location}</p>
    </div>
  );
};

export default Location;
