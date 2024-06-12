import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from 'app/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
    {
        variants: {
            variant: {
                default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-md',
                destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 rounded-md',
                outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md',
                secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 rounded-md',
                ghost: 'hover:bg-accent hover:text-accent-foreground rounded-md',
                link: 'text-primary underline-offset-4 hover:underline rounded-md',
                custom: 'p-2 rounded-full text-xl bg-green-200 hover:bg-green-300',
            },
            size: {
                default: 'h-9 px-4 py-2',
                sm: 'h-8 px-3 text-xs',
                lg: 'h-10 px-8',
                icon: 'h-9 w-9',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'lg',
        },
    },
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = 'Button'

export { Button, buttonVariants }
