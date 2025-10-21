import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-primary-40 text-primary-100",
        secondary: "bg-secondary-40 text-secondary-100",
        success: "bg-success-40 text-success-100",
        warning: "bg-warning-50 text-warning-100",
        error: "bg-error-40 text-error-100",
        info: "bg-info-40 text-info-100",
        neutral: "bg-neutral-40 text-neutral-100",
        
        "primary-outline": "border border-primary-40 text-primary-40 bg-transparent",
        "secondary-outline": "border border-secondary-40 text-secondary-40 bg-transparent",
        "success-outline": "border border-success-40 text-success-40 bg-transparent",
        "warning-outline": "border border-warning-50 text-warning-50 bg-transparent",
        "error-outline": "border border-error-40 text-error-40 bg-transparent",
        "info-outline": "border border-info-40 text-info-40 bg-transparent",
        "neutral-outline": "border border-neutral-40 text-neutral-40 bg-transparent",
      },
      size: {
        sm: "px-2 py-0.5 text-label-sm",
        md: "px-2.5 py-1 text-label-md",
        lg: "px-3 py-1.5 text-label-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
