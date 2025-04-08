import { div } from "motion/react-client";
import { Badge } from "../../components/Buttons/Badge";
import ProjectCards from "../../components/Cards/ProjectCards";
import Stack from "../../components/Stack";
import { Button } from "../../components/Buttons/Button";

const dummyProducts = [
  {
    title: "Branding",
    productType: "Branding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, minima!",
    projectImages: [],
  },
  {
    title: "Skincare",
    productType: "Branding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, minima!",
    projectImages: [],
  },
  {
    title: "Sarkodie",
    productType: "Branding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, minima!",
    projectImages: [],
  },
  {
    title: "FanYogo",
    productType: "Branding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, minima!",
    projectImages: [],
  },
];

const FeaturedProducts = () => {
  return (
    <Stack
      orientation="vertical"
      container="default"
      className=" max-sm:items-center items-start"
      gap="medium"
    >
      <Badge type="underline" textColor="black">
        Featured Projects
      </Badge>
      <div className=" grid max-sm:grid-cols-2 grid-cols-3 gap-6 w-full">
        {dummyProducts.slice(0, 2).map((dProject, index) => (
          <div className={`${index === 0 ? "md:col-span-1" : "md:col-span-2"}`}>
            <ProjectCards
              title={dProject.title}
              badgeText={dProject.productType}
            />
          </div>
        ))}
      </div>
      <div className=" grid max-sm:grid-cols-2 grid-cols-3 gap-6 w-full">
        {dummyProducts.slice(2, 4).map((dProject, index) => (
          <div className={`${index === 0 ? "md:col-span-2" : "md:col-span-1"}`}>
            <ProjectCards
              title={dProject.title}
              badgeText={dProject.productType}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full">
        <div className=" max-w-2xl text-center flex flex-col gap-6 items-center justify-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            nihil tenetur, recusandae amet sint reprehenderit.
          </p>
          <Button color="black" variant="secondary">
            See all projects
          </Button>
        </div>
      </div>
    </Stack>
  );
};

export default FeaturedProducts;
