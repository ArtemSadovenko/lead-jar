import { Role } from '../backend/Role';
import User from '../backend/User';
import { AuthenticatedUserDatabase, UsersDatabase } from '../backend/Database';

export default class Login {
  private userDb: UsersDatabase;
  private authUserDb: AuthenticatedUserDatabase;

  constructor(userDb: UsersDatabase, authUserDb: AuthenticatedUserDatabase) {
    this.userDb = userDb;
    this.authUserDb = authUserDb;
  }

  // Sign up a new user
  public signUp(email: string, password: string, role: Role): boolean {
    const existingUser = (this.userDb.read() as User[]).find(user => user.email === email);
    if (existingUser) {
      console.error('User already exists');
      return false;
    }

    this.userDb.create({ email, password, role });
    this.authUserDb.addUser(email); // Add user to authenticated database
    console.log('User signed up successfully');
    return true;
  }

  // Log in a user
  public login(email: string, password: string): User | string {
    const user = (this.userDb.read() as User[]).find(user => user.email === email && user.password === password);
    if (user) {
      this.authUserDb.addUser(email); // Add user to authenticated database
      return user;
    } else {
      return 'Invalid email or password';
    }
  }

  // Log out a user
  public logout(email: string): void {
    this.authUserDb.removeUser(email); // Remove user from authenticated database
    console.log('Logged out successfully');
  }

  // Check if user is authenticated
  public isAuthenticated(): User | null {
    const userEmail = this.authUserDb.getUser()
    const user = (this.userDb.read() as User[]).find(user => user.email === userEmail)
    if (user === undefined)
        return null
    else
        return user
}
}
