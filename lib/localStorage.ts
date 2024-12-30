// utils/localStorageUtils.ts

// Check if window is available to avoid SSR issues
const isLocalStorageAvailable = () => typeof window !== 'undefined';

/**
 * Set an item in localStorage
 */
export const setLocalItem = (key: string, value: any): void => {
  if (!isLocalStorageAvailable()) {
    console.warn('localStorage is not available on the server');
    return;
  }

  if (!key || value === undefined || value === null) {
    console.error('Invalid key or value provided for localStorage.setItem');
    return;
  }

  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error('Error storing data in localStorage:', error);
  }
};

/**
 * Get an item from localStorage
 */
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export const getLocalItem = (key: string): any | null => {
  if (!isLocalStorageAvailable()) {
    console.warn('localStorage is not available on the server');
    return null;
  }

  if (!key) {
    console.error('Invalid key provided for localStorage.getItem');
    return null;
  }

  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  } catch (error) {
    console.error('Error retrieving data from localStorage:', error);
    return null;
  }
};

/**
 * Remove an item from localStorage
 */
export const removeLocalItem = (key: string): void => {
  if (!isLocalStorageAvailable()) {
    console.warn('localStorage is not available on the server');
    return;
  }

  if (!key) {
    console.error('Invalid key provided for localStorage.removeItem');
    return;
  }

  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data from localStorage:', error);
  }
};

/**
 * Clear all items from localStorage
 */
export const clearLocalStorage = (): void => {
  if (!isLocalStorageAvailable()) {
    console.warn('localStorage is not available on the server');
    return;
  }

  try {
    localStorage.clear();
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};
