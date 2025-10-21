import { useTheme } from "@/components/theme-provider";

type LogoSize = "sm" | "md" | "lg" | "xl";

interface ProductLogoProps {
  size?: LogoSize;
  className?: string;
}

const sizeMap: Record<LogoSize, string> = {
  sm: "h-8",
  md: "h-12",
  lg: "h-16",
  xl: "h-20",
};

export function SprintPayLogo({ size = "md", className = "" }: ProductLogoProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const color = isDark ? "#FFFFFF" : "#005B66";

  return (
    <div className={`${sizeMap[size]} ${className}`} style={{ aspectRatio: "219/54" }} data-testid="logo-sprintpay">
      <svg viewBox="0 0 219 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <text x="10" y="40" fontSize="36" fontWeight="600" fill={color} fontFamily="Arial, sans-serif">
          SprintPay
        </text>
      </svg>
    </div>
  );
}

export function EModalLogo({ size = "md", className = "" }: ProductLogoProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const color = isDark ? "#FFFFFF" : "#005B66";

  return (
    <div className={`${sizeMap[size]} ${className}`} style={{ aspectRatio: "194/45" }} data-testid="logo-emodal">
      <svg viewBox="0 0 194 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <text x="10" y="35" fontSize="32" fontWeight="600" fill={color} fontFamily="Arial, sans-serif">
          eModal
        </text>
      </svg>
    </div>
  );
}

export function SprintPassLogo({ size = "md", className = "" }: ProductLogoProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const color = isDark ? "#FFFFFF" : "#005B66";

  return (
    <div className={`${sizeMap[size]} ${className}`} style={{ aspectRatio: "254/53" }} data-testid="logo-sprintpass">
      <svg viewBox="0 0 254 53" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <text x="10" y="40" fontSize="36" fontWeight="600" fill={color} fontFamily="Arial, sans-serif">
          SprintPass
        </text>
      </svg>
    </div>
  );
}

export function SprintPortLogo({ size = "md", className = "" }: ProductLogoProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const color = isDark ? "#FFFFFF" : "#005B66";

  return (
    <div className={`${sizeMap[size]} ${className}`} style={{ aspectRatio: "241/50" }} data-testid="logo-sprintport">
      <svg viewBox="0 0 241 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <text x="10" y="38" fontSize="34" fontWeight="600" fill={color} fontFamily="Arial, sans-serif">
          SprintPort
        </text>
      </svg>
    </div>
  );
}
