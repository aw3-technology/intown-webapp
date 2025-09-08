import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-30 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-white/20 relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black hover:bg-gray-200 dark:bg-white dark:text-black dark:hover:bg-gray-200 border border-white/10",
        destructive:
          "bg-red-600/20 text-red-400 border border-red-600/30 hover:bg-red-600/30 hover:border-red-600/50",
        outline:
          "border border-gray-600 bg-transparent hover:bg-white/5 text-gray-300 hover:text-white dark:border-gray-600 dark:hover:bg-white/10",
        secondary:
          "bg-gray-800 text-gray-200 hover:bg-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 border border-gray-700",
        ghost:
          "hover:bg-white/5 hover:text-white text-gray-400 dark:hover:bg-white/10",
        link: "text-gray-400 underline-offset-4 hover:underline hover:text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 gap-1.5 px-3",
        lg: "h-11 px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }