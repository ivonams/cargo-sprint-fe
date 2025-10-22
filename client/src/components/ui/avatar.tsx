import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        sm: "h-6 w-6",
        md: "h-10 w-10",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

const avatarColors = [
  "bg-[#2E5AAC] text-white", // Blue
  "bg-[#7B2D8E] text-white", // Purple
  "bg-[#B87843] text-white", // Orange/Brown
  "bg-[#5B92C3] text-white", // Light Blue
  "bg-[#3D7B52] text-white", // Green
]

function getAvatarColor(name?: string): string {
  if (!name) return avatarColors[0]
  const charCode = name.charCodeAt(0)
  return avatarColors[charCode % avatarColors.length]
}

function getInitial(name?: string): string {
  if (!name) return "?"
  return name.charAt(0).toUpperCase()
}

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {
  src?: string
  alt?: string
  name?: string
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size, src, alt, name, children, ...props }, ref) => {
  const avatarSize = size || "md"
  
  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(avatarVariants({ size }), className)}
      {...props}
    >
      {children ? (
        children
      ) : src ? (
        <AvatarImage src={src} alt={alt || name} />
      ) : (
        <AvatarFallback name={name} size={avatarSize} />
      )}
    </AvatarPrimitive.Root>
  )
})
Avatar.displayName = "Avatar"

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full object-cover", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const avatarFallbackVariants = cva(
  "flex h-full w-full items-center justify-center font-medium",
  {
    variants: {
      size: {
        sm: "text-label-sm",
        md: "text-title-md",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

interface AvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {
  name?: string
  size?: "sm" | "md"
}

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, name, size, children, ...props }, ref) => {
  const colorClass = getAvatarColor(name)
  const initial = children || getInitial(name)

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(
        avatarFallbackVariants({ size }),
        colorClass,
        className
      )}
      {...props}
    >
      {initial}
    </AvatarPrimitive.Fallback>
  )
})
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  avatars: Array<{
    src?: string
    alt?: string
    name?: string
  }>
  size?: "sm" | "md"
  max?: number
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, avatars, size = "md", max, ...props }, ref) => {
    const displayAvatars = max ? avatars.slice(0, max) : avatars
    const remaining = max && avatars.length > max ? avatars.length - max : 0
    const overlapClass = size === "sm" ? "-space-x-2" : "-space-x-3"

    return (
      <div
        ref={ref}
        className={cn("flex items-center", overlapClass, className)}
        {...props}
      >
        {displayAvatars.map((avatar, index) => (
          <Avatar
            key={index}
            src={avatar.src}
            alt={avatar.alt}
            name={avatar.name}
            size={size}
            className="ring-2 ring-background"
          />
        ))}
        {remaining > 0 && (
          <Avatar size={size} className="ring-2 ring-background">
            <AvatarFallback size={size} className="bg-neutral-80 text-neutral-20">
              +{remaining}
            </AvatarFallback>
          </Avatar>
        )}
      </div>
    )
  }
)
AvatarGroup.displayName = "AvatarGroup"

export { Avatar, AvatarImage, AvatarFallback, AvatarGroup }
