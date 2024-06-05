import Leads from "./Leads";
import User from "./User";

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
export class LeadsDatabase {
  private storageKey: string = "leads";

  constructor() {
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

const getUsersFromDb = (key: string): User[] | null => {
  const jsonString = localStorage.getItem(key);
  if (jsonString) {
    try {
      return JSON.parse(jsonString) as User[];
    } catch (e) {
      console.error("Error parsing JSON from localStorage", e);
      return null;
    }
  }
  return null;
};

const removeUsersFromDb = (key: string): void => {
  localStorage.removeItem(key);
};

// UserDatabase class
export class UsersDatabase {
  private storageKey: string = "users";

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    if (!getUsersFromDb(this.storageKey)) {
      setLocalStorageJsonItem(this.storageKey, []);
    }
  }

  // Create
  public create(user: User): void {
    const users = getUsersFromDb(this.storageKey) || [];
    users.push(user);
    setLocalStorageJsonItem(this.storageKey, users);
  }

  // Read
  public read(): User[] {
    return getUsersFromDb(this.storageKey) || [];
  }

  // Update
  public update(index: number, updatedUser: User): void {
    const users = getUsersFromDb(this.storageKey) || [];
    if (index >= 0 && index < users.length) {
      users[index] = updatedUser;
      setLocalStorageJsonItem(this.storageKey, users);
    } else {
      console.error("Invalid index");
    }
  }

  // Delete
  public delete(index: number): void {
    const users = getUsersFromDb(this.storageKey) || [];
    if (index >= 0 && index < users.length) {
      users.splice(index, 1);
      setLocalStorageJsonItem(this.storageKey, users);
    } else {
      console.error("Invalid index");
    }
  }

  // Clear all data
  public clear(): void {
    removeLocalStorageItem(this.storageKey);
  }
}

const getAuthUser = (key: string): string[] | null => {
  const jsonString = localStorage.getItem(key);
  if (jsonString) {
    try {
      return JSON.parse(jsonString) as string[];
    } catch (e) {
      console.error("Error parsing JSON from localStorage", e);
      return null;
    }
  }
  return null;
};

// AuthenticatedUserDatabase class
export class AuthenticatedUserDatabase {
  private storageKey: string = "authUserDb";

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    if (!getAuthUser(this.storageKey)) {
      setLocalStorageJsonItem(this.storageKey, []);
    }
  }

  public getUser(): String | null {
    const authenticatedUsers = getAuthUser(this.storageKey) || [];
    if (authenticatedUsers.length == 0) return null;
    return authenticatedUsers[0];
  }

  // Add user email to authenticated database
  public addUser(email: string): void {
    const authenticatedUsers = getAuthUser(this.storageKey) || [];
    authenticatedUsers.push(email);
    setLocalStorageJsonItem(this.storageKey, authenticatedUsers);
  }

  // Check if user is authenticated
  public isAuthenticated(email: string): boolean {
    const authenticatedUsers = getAuthUser(this.storageKey) || [];
    return authenticatedUsers.includes(email);
  }

  // Remove user from authenticated database
  public removeUser(email: string): void {
    const authenticatedUsers = getAuthUser(this.storageKey) || [];
    const updatedUsers = authenticatedUsers.filter((user) => user !== email);
    setLocalStorageJsonItem(this.storageKey, updatedUsers);
  }

  // Clear all authenticated data
  public clear(): void {
    removeLocalStorageItem(this.storageKey);
  }
}
