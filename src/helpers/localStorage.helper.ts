export const getLocalStorageItem = (key: string) => {
  if (!localStorage.getItem(key)) {
    console.warn(`Key "${key}" not found in local storage.`);
    return null;
  }
  return JSON.parse(localStorage.getItem(key) || "");
};

export const setLocalStorageItem = (key: string, value: any) => {
  if (typeof value === "string") localStorage.setItem(key, value);
  else localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorageItem = (key: string) => {
  if (!localStorage.getItem(key)) {
    console.warn(`Key "${key}" not found in local storage.`);
    return;
  }
  localStorage.removeItem(key);
};
