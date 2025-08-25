import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// merges tailwind classes and resolves conflicts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}