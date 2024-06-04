// Row interface
export interface Leads {
    leadGen: string;
    date: string;
    datePosted: string;
    status: string;
    timeSent: string;
    name: string;
    url: string;
    role: string;
  }

// Utility functions to interact with localStorage
const setLocalStorageJsonItem = (key: string, value: any): void => {
  const jsonString = JSON.stringify(value);
  localStorage.setItem(key, jsonString);
};

const getLocalStorageJsonItem = (key: string): Leads[] | null => {
  const jsonString = localStorage.getItem(key);
  if (jsonString) {
    try {
      return JSON.parse(jsonString) as Leads[];
    } catch (e) {
      console.error("Error parsing JSON from localStorage", e);
      return null;
    }
  }
  return null;
};

const removeLocalStorageItem = (key: string): void => {
  localStorage.removeItem(key);
};

// Database class
export default class DatabaseLeads {
  private storageKey: string;
  

  constructor() {
    this.storageKey = "leads-key";
    this.initialize();

  }

  private initialize(): void {
    if (!getLocalStorageJsonItem(this.storageKey)) {
      setLocalStorageJsonItem(this.storageKey, []);
    }
  }

  // Create
  public create(row: Leads): void {
    const rows = getLocalStorageJsonItem(this.storageKey) || [];
    rows.push(row);
    setLocalStorageJsonItem(this.storageKey, rows);
  }

  // Read
  public read(): Leads[] {
    return getLocalStorageJsonItem(this.storageKey) || [];
  }

  // Update
  public update(index: number, updatedRow: Leads): void {
    const rows = getLocalStorageJsonItem(this.storageKey) || [];
    if (index >= 0 && index < rows.length) {
      rows[index] = updatedRow;
      setLocalStorageJsonItem(this.storageKey, rows);
    } else {
      console.error("Invalid index");
    }
  }

  // Delete
  public delete(index: number): void {
    const rows = getLocalStorageJsonItem(this.storageKey) || [];
    if (index >= 0 && index < rows.length) {
      rows.splice(index, 1);
      setLocalStorageJsonItem(this.storageKey, rows);
    } else {
      console.error("Invalid index");
    }
  }

  // Clear all data
  public clear(): void {
    removeLocalStorageItem(this.storageKey);
  }
}
