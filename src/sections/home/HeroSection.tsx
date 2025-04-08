import Stack from "../../components/Stack";
import Typography from "../../components/Typography";
import { Button } from "../../components/Buttons/Button";
import { useEffect } from "react";
import { animate, scroll } from "motion";

const HeroSection = () => {
  useEffect(() => {
    const heroSection = document.querySelector(
      ".hero-section-mask"
    ) as HTMLDivElement;
    const heroSectionContainer = document.querySelector(
      ".hero-container"
    ) as HTMLElement;

    if (heroSection || heroSectionContainer) {
      const animation = animate(
        heroSection,
        { scale: [0.98, 1] },
        { ease: "easeInOut" }
      );

      scroll(animation, { target: heroSectionContainer });
    }
  }, []); // Empty dependency array to run only once

  return (
    <Stack
      container="none"
      orientation="horizontal"
      className="hero-section w-full h-[200vh] relative hero-container"
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <div className=" absolute top-0 left-0 w-full h-full overflow-hidden hero-section-mask rounded-xl">
          <div className="bg-black w-full h-full absolute inset-0"></div>
        </div>

        <Stack
          orientation="horizontal"
          container="default"
          className=" w-full items-end justify-start rounded-xl h-full bg-red-50"
        >
          <div className=" space-y-4 relativ pb-16 flex flex-col items-center w-full md:items-start z-10 relative">
            <Typography
              variant="h5"
              className="text-white tracking-tight text-center md:text-start"
            >
              Welcome to eleventhspace
            </Typography>
            <Button color="white" variant="small">
              Learn more about us
            </Button>
          </div>
        </Stack>
      </div>
    </Stack>
  );
};

export default HeroSection;
