import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number | string | undefined): string {
  if (!amount) {
    return '';
  }
  // Convert amount to a number if it's a string
  const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

  // Check if the conversion resulted in a valid number
  if (isNaN(numericAmount)) {
    console.error('Invalid amount provided:', amount);
    return 'Invalid Amount';
  }

  // Format the number as currency
  return numericAmount.toLocaleString('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

const currentYear = new Date().getFullYear();

export const yearsArray = Array.from({ length: currentYear - 2009 + 1 }, (_, i) => ({
  label: (2009 + i).toString(),
  value: (2009 + i).toString(),
}));

export function capitalizeFirstLetter(word: string | undefined) {
  if (!word) return ''; // Handle empty or undefined strings
  return word.charAt(0).toUpperCase() + word.slice(1);
}
