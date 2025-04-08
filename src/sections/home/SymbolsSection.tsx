import { useEffect } from "react";
import Stack from "../../components/Stack";
import { animate, scroll } from "motion";

const symbolPath = [
  "/assets/00.svg",
  "/assets/01.svg",
  "/assets/02.svg",
  "/assets/03.svg",
  "/assets/04.svg",
  "/assets/05.svg",
  "/assets/06.svg",
  "/assets/07.svg",
  "/assets/08.svg",
  "/assets/09.svg",
  "/assets/00.svg",
  "/assets/01.svg",
  "/assets/02.svg",
  "/assets/03.svg",
  "/assets/04.svg",
  "/assets/05.svg",
  "/assets/06.svg",
  "/assets/07.svg",
  "/assets/08.svg",
  "/assets/09.svg",
];

const SymbolsSection = () => {
  useEffect(() => {
    const animation = animate(
      ".sym-container",
      { transform: ["translateX(0%)", "translateX(-155%)"] },
      { duration: 20, ease: "linear", repeat: Infinity }
    );

    return () => animation.cancel();
  }, []);

  return (
    <Stack
      orientation="horizontal"
      container="full-width"
      className="overflow-hidden"
    >
      <Stack
        orientation="horizontal"
        className="!gap-0 !py-0 overflow-hidden rounded-xl justify-start"
      >
        <div className="sym-container flex gap-0 w-max">
          {[...symbolPath].map((symbol, index) => (
            <img
              key={index}
              src={symbol}
              alt="brand_symbols"
              className=" w-[80px] md:w-[220px] aspect-square"
            />
          ))}
        </div>
      </Stack>
    </Stack>
  );
};

export default SymbolsSection;
