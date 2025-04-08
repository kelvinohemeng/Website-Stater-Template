import { PropsWithChildren } from "react";
// Add this type to get Tailwind IntelliSense
type TailwindClass = string;

type BadgeProps = PropsWithChildren<{
  type: "underline" | "covered";
  textColor: "white" | "black";
}>;

export const Badge = ({
  children,
  type = "underline",
  textColor = "white",
}: BadgeProps) => {
  const variantStyles: Record<BadgeProps["type"], TailwindClass> = {
    underline: "pb-2 px-1 border-b border-primary border-b-[2px] ",
    covered: " rounded-md p-2 px-3 bg-black",
  };

  const textColorStyles: Record<BadgeProps["textColor"], TailwindClass> = {
    black: "text-black",
    white: "text-white",
  };

  return (
    <button
      className={`
        ${variantStyles[type]}  
        ${textColorStyles[textColor]}
         shadow font-medium flex items-center gap-1 w-fit h-fit pointer-events-none`}
    >
      <>{children}</>
    </button>
  );
};
