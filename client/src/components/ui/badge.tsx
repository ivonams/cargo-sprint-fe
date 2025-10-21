import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-label-md font-medium transition-colors",
  {
    variants: {
      variant: {
        info: "bg-info-95 text-info-20",
        error: "bg-error-95 text-error-20",
        neutral: "bg-neutral-95 text-neutral-20",
        success: "bg-success-95 text-success-20",
        outline: "bg-background border border-neutral-80 text-neutral-20",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
