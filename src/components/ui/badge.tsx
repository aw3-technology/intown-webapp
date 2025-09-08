import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-white text-black hover:bg-gray-200 dark:bg-white dark:text-black",
        secondary:
          "border-transparent bg-gray-800 text-gray-200 hover:bg-gray-700 dark:bg-gray-800 dark:text-gray-200",
        destructive:
          "border-gray-600 bg-black/50 text-gray-400 hover:bg-black/70 dark:text-gray-400",
        outline: "text-gray-400 border-gray-600 hover:bg-white/5",
      },
    },
    defaultVariants: {
      variant: "default",
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