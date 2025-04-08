import { PropsWithChildren } from "react";

type StackProps = PropsWithChildren & {
  orientation: "horizontal" | "vertical";
  id?: string;
  className?: string;
  container?: ContainerType;
  gap?: GapType;
  padding?: PaddingT;
};

type ContainerType = "none" | "full-width" | "max" | "default";

type GapType = "default" | "medium" | "large";
type PaddingT = "none" | "default" | "medium" | "large";

export default function Stack({
  children,
  orientation = "horizontal",
  id,
  className,
  container = "full-width",
  gap = "default",
  padding = "none",
}: StackProps) {
  const orientationStyles: Record<StackProps["orientation"], string> = {
    horizontal: "flex gap-1",
    vertical: "flex flex-col gap-1",
  };

  const containerStyles: Record<ContainerType, string> = {
    none: "w-full",
    "full-width": "w-full p-5",
    default: "max-w-[1440px] w-full mx-auto px-5",
    max: "max-w-[1800px] w-full mx-auto",
  };

  const gapStyles: Record<GapType, string> = {
    default: "gap-3 md:gap-6",
    medium: "gap-6 md:gap-12",
    large: "gap-11 md:gap-22",
  };
  const paddingStyle: Record<PaddingT, string> = {
    none: "",
    default: "py-[64px]",
    medium: "py-[84px]",
    large: "py-[120px]",
  };

  return (
    <div
      id={id}
      className={`
        ${orientationStyles[orientation]} 
        ${containerStyles[container]}
        ${gapStyles[gap]}
        ${paddingStyle[padding]}
        ${className || ""}`}
    >
      {children}
    </div>
  );
}
