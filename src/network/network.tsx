import axios from "axios";
import {
  RegisterRequest,
  AuthenticationResponse,
  AuthenticationRequest,
} from "./AuthInterfaces";

const BASE_URL = "http://192.168.3.9:8080";

const instance = axios.create({
  baseURL: "http://192.168.3.9:8080",
  withCredentials: true, // Send cookies with cross-origin requests
});

export default class Network {
  public async register(
    request: RegisterRequest
  ): Promise<AuthenticationResponse> {
    try {
      const response = await instance.post(
        `${BASE_URL}/api/v1/auth/register`,
        request,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to register");
    }
  }

  public async login(
    request: AuthenticationRequest
  ): Promise<AuthenticationResponse> {
    try {
      const response = await instance.post(
        `${BASE_URL}/api/v1/auth/authenticate`,
        request,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to login");
    }
  }

  public async refreshToken(): Promise<void> {
    try {
      await instance.post(`${BASE_URL}/api/v1/auth/refresh-token`, null, {
        withCredentials: true, // Send cookies with the request
      });
    } catch (error) {
      throw new Error("Failed to refresh token");
    }
  }
}
