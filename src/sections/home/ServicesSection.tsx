import { div } from "motion/react-m";
import { Badge } from "../../components/Buttons/Badge";
import ServiceCard from "../../components/Cards/ServiceCard";
import Stack from "../../components/Stack";
import Typography from "../../components/Typography";

const dummyServices = [
  {
    title: "Branding",
    productType: "Branding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, minima!",
    projectImages: [],
  },
  {
    title: "Digital Marketing",
    productType: "Branding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, minima!",
    projectImages: [],
  },
  {
    title: "Digital & Offset Printing",
    productType: "Branding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, minima!",
    projectImages: [],
  },
  {
    title: "Outdoor Advertising",
    productType: "Branding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, minima!",
    projectImages: [],
  },
];

const ServiceSection = () => {
  return (
    <div className="">
      <Stack
        orientation="vertical"
        container="default"
        className="items-start justify-start"
        padding="large"
      >
        <div className="flex-1 max-w-2xl space-y-4">
          <Badge type="underline" textColor="black">
            What we can offer you
          </Badge>
          <Typography variant="h2" className=" leading-[1.2] tracking-tighter">
            Our Services
          </Typography>
        </div>
        <Stack orientation="horizontal" gap="default" container="none">
          <div className="flex-1 bg-black rounded-xl h-[700px] sticky top-[24px]"></div>

          <div className="flex-1 flex flex-col max-w-2xl space-y-4">
            {dummyServices.map((dService, index) => (
              <ServiceCard title={dService.title} number={index + 1} />
            ))}
          </div>
        </Stack>
      </Stack>
    </div>
  );
};

export default ServiceSection;
