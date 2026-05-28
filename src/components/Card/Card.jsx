import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import './Card.scss';

/**
 * Card variants using class-variance-authority.
 * variant: 'default' | 'featured'
 * size:    'default' | 'compact'
 */
const cardVariants = cva(
  // Base classes applied to every card
  'card',
  {
    variants: {
      variant: {
        default:  'card--default',
        featured: 'card--featured',
        step:     'card--step',     // metodología / flow-step
        project:  'card--project',  // portfolio projects
      },
      size: {
        default: 'card--size-default',
        compact: 'card--size-compact',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

/**
 * Card — neobrutalist dark-mode card.
 *
 * Props:
 *   variant   – 'default' | 'featured'
 *   size      – 'default' | 'compact'
 *   asChild   – render as child element (Radix Slot)
 *   className – extra classes
 */
const Card = React.forwardRef(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        ref={ref}
        className={cn(cardVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Card.displayName = 'Card';

// ── Sub-components ─────────────────────────────────────────────────────────────

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('card__header', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

const CardBody = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('card__body', className)} {...props} />
));
CardBody.displayName = 'CardBody';

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('card__footer', className)} {...props} />
));
CardFooter.displayName = 'CardFooter';

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn('card__title', className)} {...props} />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('card__description', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

export {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardDescription,
  cardVariants,
};
