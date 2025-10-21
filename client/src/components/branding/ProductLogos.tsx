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

  return (
    <div className={`${sizeMap[size]} ${className}`} style={{ aspectRatio: "219/54" }} data-testid="logo-sprintpay">
      {isDark ? (
        <SprintPayWhite />
      ) : (
        <SprintPayBlue />
      )}
    </div>
  );
}

export function EModalLogo({ size = "md", className = "" }: ProductLogoProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`${sizeMap[size]} ${className}`} style={{ aspectRatio: "194/45" }} data-testid="logo-emodal">
      {isDark ? (
        <EModalWhite />
      ) : (
        <EModalBlue />
      )}
    </div>
  );
}

export function SprintPassLogo({ size = "md", className = "" }: ProductLogoProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`${sizeMap[size]} ${className}`} style={{ aspectRatio: "254/53" }} data-testid="logo-sprintpass">
      {isDark ? (
        <SprintPassWhite />
      ) : (
        <SprintPassBlue />
      )}
    </div>
  );
}

export function SprintPortLogo({ size = "md", className = "" }: ProductLogoProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`${sizeMap[size]} ${className}`} style={{ aspectRatio: "241/50" }} data-testid="logo-sprintport">
      {isDark ? (
        <SprintPortWhite />
      ) : (
        <SprintPortBlue />
      )}
    </div>
  );
}

function SprintPayBlue() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-[2.49%_87.05%_21.19%_0.19%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/9a3ca4b6-104a-4448-b63f-f89e2b17d82d" />
      </div>
      <div className="absolute inset-[22.45%_73.68%_1%_15.06%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/b8411dcf-3d6b-4afe-b22c-a65e5c6c898b" />
      </div>
      <div className="absolute inset-[22.45%_65.18%_22.33%_28.43%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/9245233a-ee48-4247-942a-29350ef4fda8" />
      </div>
      <div className="absolute inset-[-0.47%_61.56%_22.33%_36.27%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/0f2cad8f-b3f7-4e00-bc01-5f7d1670714d" />
      </div>
      <div className="absolute inset-[22.45%_48.27%_22.33%_41.45%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/9f923046-682c-4bd5-af8b-a4394e335d89" />
      </div>
      <div className="absolute inset-[7.74%_39.93%_21.42%_52.99%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/f02f0d2d-981a-4eba-bc77-e7ac7a49efba" />
      </div>
      <div className="absolute inset-[4.2%_24.92%_22.33%_61.98%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/d8114014-1aee-47ac-b5ef-db52000c35cd" />
      </div>
      <div className="absolute inset-[21.09%_13.01%_21.08%_75.45%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/2ed6d6cf-e2c8-4d4b-b2dd-5fee6e39af4c" />
      </div>
      <div className="absolute inset-[22.57%_-0.2%_0.2%_87.65%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/e9b0e71a-28eb-47de-9b8d-543ee7613cd0" />
      </div>
    </div>
  );
}

function SprintPayWhite() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-[4.03%_86.12%_20.16%_0.82%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/a9c62a8e-4ab8-4bc2-9e93-86ea65d8c1e5"/>
      </div>
      <div className="absolute inset-[24.6%_71.84%_0.81%_15.92%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/b7b85094-8a22-46d3-8e84-5ef96dcbb5d9"/>
      </div>
      <div className="absolute inset-[24.6%_63.27%_24.19%_29.59%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/2da1b8de-bc82-4ea2-b8d2-a04c85b10869"/>
      </div>
      <div className="absolute inset-[1.61%_59.59%_24.19%_38.04%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/0f45bbd7-d0ad-4a0c-8be5-6c08348f5e8b"/>
      </div>
      <div className="absolute inset-[24.6%_46.12%_24.19%_43.27%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/32303a9e-6d88-4db2-8835-5eb4700a42aa"/>
      </div>
      <div className="absolute inset-[9.68%_37.55%_23.39%_55.1%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/caa97b77-c7ba-4f78-ba4e-ade4b17f999d"/>
      </div>
      <div className="absolute inset-[6.05%_22.45%_24.19%_64.08%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/dcfcfd31-fc56-43fd-a14b-bf9ad8a1e2c0"/>
      </div>
      <div className="absolute inset-[22.98%_10.61%_22.98%_77.96%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/cc1eed4b-5c93-4df3-b3b1-93b39d1e29e7"/>
      </div>
      <div className="absolute inset-[24.6%_-0.41%_0.81%_89.8%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/b6ea0bc7-e74c-483a-b47d-d8f5cee94a97"/>
      </div>
    </div>
  );
}

function EModalBlue() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-[27.31%_85.7%_0.38%_0.25%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/fd0b87a8-1fa4-4b48-a0ad-e6c113ffe662" />
      </div>
      <div className="absolute inset-[3.84%_60.04%_2.13%_17.3%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/126c80d2-bbee-4f04-a79d-658de62f6bfa" />
      </div>
      <div className="absolute inset-[26%_41.62%_0.38%_42.31%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/77e264ad-f331-4ce3-a5d6-89b59069f0fd" />
      </div>
      <div className="absolute inset-[-1.41%_24.3%_0.24%_59.83%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/098c24ae-359a-4b0c-a7ea-97a4a660481f" />
      </div>
      <div className="absolute inset-[25.56%_7.55%_0.53%_77.75%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/4ac86db0-9415-47cd-93b1-cb42b50df909" />
      </div>
      <div className="absolute inset-[-1.41%_0.06%_2.13%_95.44%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/4f8bd3cf-b5b0-42b2-9490-f06fcbb8c3c0" />
      </div>
    </div>
  );
}

function EModalWhite() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-[28.26%_85.43%_0%_0.5%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/09a1d7c7-fa9b-4856-afb8-1d7a8b84a464" />
      </div>
      <div className="absolute inset-[4.35%_59.8%_2.17%_17.59%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/a98fdd4d-0fca-4b8d-9cb2-8abb50b8b043" />
      </div>
      <div className="absolute inset-[26.96%_41.21%_0%_42.79%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/a58bde69-f8ca-418f-87cb-f69f8ba9629d" />
      </div>
      <div className="absolute inset-[-1.52%_23.62%_0%_60.18%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/4bc32e77-b9b2-4ee5-9cb8-1e6ac0a8e5b9" />
      </div>
      <div className="absolute inset-[26.52%_6.53%_0%_78.64%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/83a30a91-ced3-43fb-9ca1-d28cf5fe7e72" />
      </div>
      <div className="absolute inset-[-1.52%_-0.5%_2.17%_96.48%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/54f00f8e-e8e7-475a-815e-f4a94d96b95b" />
      </div>
    </div>
  );
}

function SprintPassBlue() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-[3.7%_88.59%_20.57%_-0.03%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/09903583-8794-4469-b520-f943a7e259bd" />
      </div>
      <div className="absolute inset-[23.51%_76.6%_0.53%_13.31%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/de937fd1-a31d-4e0e-b368-1a42d254f4cf" />
      </div>
      <div className="absolute inset-[23.51%_68.98%_21.7%_25.29%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/922a1dd7-b707-400c-bfc8-41031b801481" />
      </div>
      <div className="absolute inset-[0.76%_65.73%_21.7%_32.33%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/bf3a13d4-efc1-4812-bb2b-2c0392ea36d3" />
      </div>
      <div className="absolute inset-[23.51%_53.82%_21.7%_36.97%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/608c09d0-8e2f-4d70-8c36-24099d9904c5" />
      </div>
      <div className="absolute inset-[8.91%_46.34%_20.79%_47.32%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/462c3e61-b75b-4213-b80e-3084bf26d728" />
      </div>
      <div className="absolute inset-[5.4%_32.88%_21.7%_55.37%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/07981672-9e38-4b36-b4bc-674487c9d17f" />
      </div>
      <div className="absolute inset-[22.15%_22.2%_20.45%_67.45%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/823334db-e50e-4d15-9722-4bd7ebfb8aa8" />
      </div>
      <div className="absolute inset-[22.38%_11.03%_20.45%_78.89%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/f4d73d2e-75fc-45d4-82a5-20b7c293fa6a" />
      </div>
      <div className="absolute inset-[22.38%_0.18%_20.45%_89.73%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/1faafedf-edde-4a97-8b0e-b4f0540de1d8" />
      </div>
    </div>
  );
}

function SprintPassWhite() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-[3.7%_88.46%_20.37%_0%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/d51f1bb9-c42b-439e-bf7e-d3bd5cd40edd" />
      </div>
      <div className="absolute inset-[23.15%_76.54%_0%_13.46%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/8eb20f63-5e23-41fc-a53f-1f50bea44ea4" />
      </div>
      <div className="absolute inset-[23.15%_68.85%_21.3%_25.58%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/57224631-abef-45b4-9d10-48e06ecfaab3" />
      </div>
      <div className="absolute inset-[0%_65.38%_21.3%_32.69%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/1da78fa5-e8c5-4e6c-a1a0-e7a4bd1a4da0" />
      </div>
      <div className="absolute inset-[23.15%_53.46%_21.3%_37.31%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/4c1b79d5-55c3-4bf0-b59d-2e7ffd60e31e" />
      </div>
      <div className="absolute inset-[8.33%_45.77%_20.37%_47.88%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/4e2bc8ca-3d84-419b-9e1d-f2d06ed8cbf0" />
      </div>
      <div className="absolute inset-[4.63%_32.31%_21.3%_56.15%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/54f21e93-7c32-4bb6-80f5-49f65d5a2c08" />
      </div>
      <div className="absolute inset-[21.3%_21.54%_19.63%_68.27%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/f5cd0e2c-9b36-4bb2-8c04-3e12e4d22d9a" />
      </div>
      <div className="absolute inset-[21.48%_10.38%_19.63%_80.19%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/1a02e789-b52d-41c6-afea-0d9dfd7e40ff" />
      </div>
      <div className="absolute inset-[21.48%_-0.19%_19.63%_91.35%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/c4e22d55-e9ed-4c4b-bad9-a62ce4e2cf04" />
      </div>
    </div>
  );
}

function SprintPortBlue() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-[-2.08%_87.95%_21.8%_0.03%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/ae98944e-c710-4197-8089-707ef93a4eae" />
      </div>
      <div className="absolute inset-[18.92%_75.38%_0.56%_14.02%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/623745df-bbfa-4749-9ee1-c547b99d837f" />
      </div>
      <div className="absolute inset-[18.92%_67.36%_23%_26.61%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/09ee1d0c-adbe-411e-9774-f3b2b7147832" />
      </div>
      <div className="absolute inset-[-5.2%_63.95%_23%_34.01%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/ed652d31-17e7-4299-8f5f-33db6a5ec4f9" />
      </div>
      <div className="absolute inset-[18.92%_51.43%_23%_38.89%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/5c1134e2-daa2-4a0d-8f35-df99d5fc97fe" />
      </div>
      <div className="absolute inset-[3.44%_43.56%_22.04%_49.77%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/3e794d08-1d5d-4d0f-bdf8-57426a3b75e8" />
      </div>
      <div className="absolute inset-[-0.28%_29.42%_23%_58.23%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/c53c8a72-9b5b-46d7-b76e-423915c9df9c" />
      </div>
      <div className="absolute inset-[17.84%_17.07%_21.56%_71.03%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/d5b29b11-ae25-4ff1-937b-7fd5274b1c3c" />
      </div>
      <div className="absolute inset-[17.72%_8.18%_22.88%_84.6%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/d8e5a31f-641d-4950-84e0-2d648e7367d3" />
      </div>
      <div className="absolute inset-[3.32%_0.04%_22.16%_92.42%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/a6c79a07-7fa2-430d-97e4-00779c664bba" />
      </div>
    </div>
  );
}

function SprintPortWhite() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-[-1.75%_87.74%_21.05%_0%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/91e57fa5-2f51-4b31-8d0b-5ac9a5adf866" />
      </div>
      <div className="absolute inset-[17.54%_75.1%_0%_14.12%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/d6e0ea7e-03e5-4a22-a92e-e1a87c63e6ba" />
      </div>
      <div className="absolute inset-[17.54%_67.05%_22.46%_26.87%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/4b05ce73-8f0f-405e-ae12-4f1adf69e8cd" />
      </div>
      <div className="absolute inset-[-5.61%_63.6%_22.46%_34.36%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/bc01ab15-1dc3-42bb-bc60-dcfdca0e0eb7" />
      </div>
      <div className="absolute inset-[17.54%_51.33%_22.46%_39.09%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/f1d99e42-f18e-4341-892d-62e8a1e9ce58" />
      </div>
      <div className="absolute inset-[2.11%_43.69%_21.4%_50%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/f8a0eed2-9d24-4b74-84e6-fad31b76ceb0" />
      </div>
      <div className="absolute inset-[-1.4%_29.51%_22.46%_58.4%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/eac2bfa6-34ea-4156-9734-a0ba6f0e4f47" />
      </div>
      <div className="absolute inset-[16.49%_17.11%_21.05%_71.29%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/85e0c0cb-2c06-4450-8a0f-f98a8ecfbb71" />
      </div>
      <div className="absolute inset-[16.14%_8.37%_22.81%_84.73%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/c2ff1eb7-0958-44d0-bd90-a84f09a9aaf5" />
      </div>
      <div className="absolute inset-[2.46%_-0.38%_21.75%_92.97%]">
        <img alt="" className="block max-w-none size-full" crossOrigin="anonymous" src="https://www.figma.com/api/mcp/asset/1b75fe1b-ebbe-4e57-9c94-eda3c5e15f92" />
      </div>
    </div>
  );
}
