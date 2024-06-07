export interface RegisterRequest {
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  role?: string;
}

export interface AuthenticationResponse {
  access_token?: string;
  refresh_token?: string;
  firstName: string;
  lastName: string;
}

export interface AuthenticationRequest {
  email?: string;
  password?: string;
}
