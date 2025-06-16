// utils/sessionStorageUtils.ts

// Check if window is available to avoid SSR issues
const isSessionStorageAvailable = () => typeof window !== 'undefined';

/**
 * Set an item in sessionStorage
 */
export const setSessionItem = (key: string, value: any): void => {
  // if (!isSessionStorageAvailable()) {
  //   console.warn('sessionStorage is not available on the server');
  //   return;
  // }

  if (!key || value === undefined || value === null) {
    console.error('Invalid key or value provided for sessionStorage.setItem');
    return;
  }

  try {
    const serializedValue = JSON.stringify(value);
    sessionStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error('Error storing data in sessionStorage:', error);
  }
};

/**
 * Get an item from sessionStorage
 */
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export const getSessionItem = (key: string): any | null => {
  if (!isSessionStorageAvailable()) {
    return null;
  }

  if (!key) {
    console.error('Invalid key provided for sessionStorage.getItem');
    return null;
  }

  try {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  } catch (error) {
    console.error('Error retrieving data from sessionStorage:', error);
    return null;
  }
};

/**
 * Remove an item from sessionStorage
 */
export const removeSessionItem = (key: string): void => {
  if (!isSessionStorageAvailable()) {
    console.warn('sessionStorage is not available on the server');
    return;
  }

  if (!key) {
    console.error('Invalid key provided for sessionStorage.removeItem');
    return;
  }

  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data from sessionStorage:', error);
  }
};

/**
 * Clear all items from sessionStorage
 */
export const clearSessionStorage = (): void => {
  if (!isSessionStorageAvailable()) {
    console.warn('sessionStorage is not available on the server');
    return;
  }

  try {
    sessionStorage.clear();
  } catch (error) {
    console.error('Error clearing sessionStorage:', error);
  }
};
