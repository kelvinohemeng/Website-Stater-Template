const TeamProfileCard = ({
  name,
  position,
  image,
  imageHover,
}: {
  name: string;
  position: string;
  image: string;
  imageHover: string;
}) => {
  return (
    <div className="overflow-hidden flex flex-col group gap-4">
      <div className="relative w-full h-full bg-black aspect-[2/2.8] overflow-hidden rounded-lg">
        <img
          src={image}
          alt={`${name} - ${position}`}
          className="object-cover w-full h-full transition-opacity duration-300 ease-in-out"
        />
        <img
          src={imageHover}
          alt={`${name} - ${position}`}
          className="object-cover w-full h-full absolute top-0 left-0 md:opacity-0 md:group-hover:opacity-100  md:group-hover:scale-[1.01] transition duration-300 ease-in-out"
        />
      </div>

      <div className=" flex flex-col justify-center h-fit gap-1">
        <h5 className="font-semibold font-secondary text-e-3xl text-black">
          {name}
        </h5>
        <p className="text-sm text-black">{position}</p>
      </div>
    </div>
  );
};

export default TeamProfileCard;
