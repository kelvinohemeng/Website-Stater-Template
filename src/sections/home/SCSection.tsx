import Stack from "../../components/Stack";
import Typography from "../../components/Typography";
import { Button } from "../../components/Buttons/Button";
import { useEffect } from "react";
import { animate, scroll } from "motion";

const SCSection = () => {
  useEffect(() => {
    const heroSection = document.querySelector(
      ".sc-section-mask"
    ) as HTMLDivElement;
    const heroSectionContainer = document.querySelector(
      ".sc-container"
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
      className="hero-section w-full h-[200vh] relative sc-container"
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <div className=" absolute top-0 left-0 w-full h-full overflow-hidden sc-section-mask rounded-xl">
          <div className="bg-black w-full h-full absolute inset-0"></div>
        </div>

        <Stack
          orientation="horizontal"
          container="default"
          className=" w-full items-end justify-start rounded-xl h-full"
        >
          <div className=" space-y-4 relativ pb-16  z-10 relative">
            <div className="space-y-4 max-w-2xl">
              <Typography
                variant="h2"
                className="text-white tracking-tight max-sm:text-center"
              >
                Star Creators, Our Internship Initiative
              </Typography>
              <Typography
                variant="body1"
                className="text-white tracking-tight max-sm:text-center"
              >
                We are a team of 10 students from the Department of Computer
                Science and Engineering, Brac University, Bangladesh. We are
                passionate about creating innovative solutions to real-world
                problems.
              </Typography>
              <Button color="white" variant="small">
                Learn more about us
              </Button>
            </div>
          </div>
        </Stack>
      </div>
    </Stack>
  );
};

export default SCSection;
