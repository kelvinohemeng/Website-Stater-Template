import { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { animate } from "motion";

type ServiceCardT = {
  index?: number | string;
  number?: number;
  title: string;
  content?: string;
};

export default function ServiceCard({
  index,
  number = 0,
  title = "Branding",
  content = "Lorem ipsum dolor sit amet consectetur...",
}: ServiceCardT) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const clampedX = Math.max(0, Math.min(offsetX, rect.width));
    const clampedY = Math.max(0, Math.min(offsetY, rect.height));

    // Animate with spring damping for smooth trailing effect
    animate(x, clampedX, {
      type: "spring",
      stiffness: 80,
      damping: 40,
      mass: 0.7,
    });

    animate(y, clampedY, {
      type: "spring",
      stiffness: 80,
      damping: 40,
      mass: 0.7,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`w-full max-w-full h-[500px] px-6 py-10 relative overflow-hidden ${
        typeof number === "number" && number % 2 !== 0
          ? "bg-primary-dark"
          : "bg-primary"
      } flex flex-col justify-between rounded-lg text-white`}
    >
      {/* Motion SVG/Image tracker */}
      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute pointer-events-none w-[220px] h-[220px]"
      >
        <img
          src={`/mouse-effect-${number}.svg`}
          alt="tracker"
          className="w-full h-full object-contain"
        />
      </motion.div>

      <div className="flex gap-4 items-center relative z-10">
        <div>
          <h3>{index ?? number}</h3>
        </div>
        <h4 className=" tracking-tight">{title}</h4>
      </div>

      <div className=" relative z-10">
        <p>{content}</p>
      </div>
    </div>
  );
}
