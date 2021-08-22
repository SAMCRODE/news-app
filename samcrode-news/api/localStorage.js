export const setItem = (key, value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, value);
  }
};

export const getItem = (key) => {
  if (typeof window !== 'undefined') {
    const val = localStorage.getItem(key);
    return val !== undefined && val !== null && val !== 'null' ? val : '';
  }
  return '';
};

export const removeItem = (key) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
};
