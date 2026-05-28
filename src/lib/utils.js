/**
 * Utility to merge class names (clsx-like, without dependency).
 * Compatible with class-variance-authority (cva) usage.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
