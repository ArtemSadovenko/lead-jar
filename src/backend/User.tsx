import { Role } from "./Role";

// User interface
export default interface User {
  email: string;
  password: string;
  role: Role;
}