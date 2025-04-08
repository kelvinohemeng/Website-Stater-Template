import { useEffect } from "react";
import Stack from "../../components/Stack";
import { animate } from "motion";

const logoPath = [
  "/logos/logo01.jpg",
  "/logos/logo02.jpg",
  "/logos/logo03.jpg",
  "/logos/logo04.jpg",
  "/logos/logo05.jpg",
  "/logos/logo06.jpg",
  "/logos/logo07.jpg",
  "/logos/logo08.jpg",
  "/logos/logo09.jpg",
  "/logos/logo10.jpg",
  "/logos/logo11.jpg",
  "/logos/logo12.jpg",
  "/logos/logo13.jpg",
  "/logos/logo14.jpg",
  "/logos/logo15.jpg",
  "/logos/logo16.jpg",
  "/logos/logo17.jpg",
  "/logos/logo18.jpg",
  "/logos/logo19.jpg",
  "/logos/logo20.jpg",
];

const LogosSection = () => {
  useEffect(() => {
    const animation = animate(
      ".logo-container",
      { transform: ["translateX(0%)", "translateX(calc(-100% + -440px))"] },
      { duration: 40, ease: "linear", repeat: Infinity }
    );

    return () => animation.cancel();
  }, []);

  return (
    <Stack orientation="horizontal" container="full-width">
      <Stack
        orientation="horizontal"
        className="!gap-0 !py-0 overflow-hidden rounded-xl justify-center"
      >
        <div className="logo-container flex gap-6 w-max opacity-70">
          {[...logoPath, ...logoPath].map((symbol, index) => (
            <img
              key={index}
              src={symbol}
              alt="brand_symbols"
              className="w-[80px] object-contain"
            />
          ))}
        </div>
      </Stack>
    </Stack>
  );
};

export default LogosSection;
