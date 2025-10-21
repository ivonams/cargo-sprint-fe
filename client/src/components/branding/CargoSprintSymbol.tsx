import { useTheme } from "@/components/theme-provider";

interface CargoSprintSymbolProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-12 w-12",
  xl: "h-16 w-16",
};

export function CargoSprintSymbol({ size = "md", className = "" }: CargoSprintSymbolProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <svg
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeMap[size]} ${className}`}
      data-testid="logo-symbol"
    >
      <path
        d="M39.2 2.3C39.2 0.999999 38.2 0 36.9 0H21.2C20.2 0 19.2 0.400002 18.5 1.1L2.2 17.6C0.800001 19 0 21 0 23V37.4C0 38.7 0.999999 39.7 2.3 39.7H19.6V19.8H39.2V2.2V2.3Z"
        fill={isDark ? "white" : "#005B66"}
      />
      <path
        d="M57.9 21.1H40.6V41H21V58.6C21 59.9 22 60.9 23.3 60.9H39C40 60.9 41 60.5 41.7 59.8L58 43.3C59.4 41.9 60.2 39.9 60.2 37.9V23.5C60.2 22.2 59.2 21.2 57.9 21.2V21.1Z"
        fill={isDark ? "white" : "#005B66"}
      />
    </svg>
  );
}
