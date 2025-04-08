import { PropsWithChildren } from "react";
import { CaretRight } from "@phosphor-icons/react";
// Add this type to get Tailwind IntelliSense
type TailwindClass = string;

type ButtonProps = PropsWithChildren<{
  onClick?: () => void;
  variant: "primary" | "secondary" | "small";
  color: "primary" | "secondary" | "white" | "black";
  hasIcon?: boolean;
  iconPosition?: "left" | "right"; // Add this prop to specify the icon position
  icon?: React.ReactNode; // Add this prop to pass the icon component as a prop
  iconSize?: number; // Add this prop to specify the icon size
  iconColor?: string; // Add this prop to specify the icon color
}>;

export const Button = ({
  children,
  onClick,
  variant = "small",
  color = "black",
  hasIcon,
  iconPosition,
}: ButtonProps) => {
  const variantStyles: Record<ButtonProps["variant"], TailwindClass> = {
    primary: " py-4",
    secondary: " py-3",
    small: " py-2",
  };

  const colorStyles: Record<ButtonProps["color"], TailwindClass> = {
    black: "bg-black text-white",
    white: "bg-white text-blalck",
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
  };

  return (
    <button
      className={`
        ${variantStyles[variant]}  
        ${colorStyles[color]} 
         rounded-full shadow px-6 font-semibold flex items-center gap-1 w-fit`}
      onClick={onClick}
    >
      <>
        {hasIcon && iconPosition === "left" && (
          <CaretRight size={16} weight="bold" />
        )}
        {children}
        {hasIcon && iconPosition === "right" && (
          <CaretRight size={16} weight="bold" />
        )}
      </>
    </button>
  );
};
