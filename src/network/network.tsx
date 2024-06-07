import {
  RegisterRequest,
  AuthenticationResponse,
  AuthenticationRequest,
} from "./AuthInterfaces";
import { LeadRequest, LeadResponse, Me } from "./Leads";
import axiosDefault from "../network/axios";

export default class Network {
  public async register(
    request: RegisterRequest
  ): Promise<AuthenticationResponse> {
    try {
      const response = await axiosDefault.post(
        `${axiosDefault.defaults.baseURL}/api/v1/auth/register`,
        request,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return {} as AuthenticationResponse; // Return empty data
    }
  }

  public async login(
    request: AuthenticationRequest
  ): Promise<AuthenticationResponse> {
    try {
      const response = await axiosDefault.post(
        `${axiosDefault.defaults.baseURL}/api/v1/auth/authenticate`,
        request,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return {} as AuthenticationResponse; // Return empty data
    }
  }

  public async logout(): Promise<void> {
    try {
      await axiosDefault.post(
        `${axiosDefault.defaults.baseURL}/api/v1/auth/logout`,
        null,
        {
          withCredentials: true, // Send cookies with the request
        }
      );
    } catch (error) {
      return; // Return empty data
    }
  }

  public async refreshToken(): Promise<void> {
    try {
      await axiosDefault.post(
        `${axiosDefault.defaults.baseURL}/api/v1/auth/refresh-token`,
        null,
        {
          withCredentials: true, // Send cookies with the request
        }
      );
    } catch (error) {
      return; // Return empty data
    }
  }

  public async createLead(leadRequest: LeadRequest): Promise<LeadResponse> {
    try {
      const response = await axiosDefault.post(
        `${axiosDefault.defaults.baseURL}/api/v1/leads/create`,
        leadRequest,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return {} as LeadResponse; // Return empty data
    }
  }

  public async deleteLead(leadId: number): Promise<void> {
    try {
      await axiosDefault.delete(
        `${axiosDefault.defaults.baseURL}/api/v1/leads/${leadId}`
      );
    } catch (error) {
      return; // Return empty data
    }
  }

  public async getAllLeads(): Promise<LeadResponse[]> {
    try {
      const currentToken =
        axiosDefault.defaults.headers.common["Authorization"];

      // Check if a Bearer token is set
      if (currentToken) {
        // Bearer token is set
        console.log("Current Bearer token:", currentToken);
      } else {
        // Bearer token is not set
        console.log("No Bearer token is set.");
      }

      const response = await axiosDefault.get(
        `${axiosDefault.defaults.baseURL}/api/v1/leads/all`
      );
      return response.data;
    } catch (error) {
      return []; // Return empty data
    }
  }

  public async getLeadById(leadId: number): Promise<LeadResponse> {
    try {
      const response = await axiosDefault.get(
        `${axiosDefault.defaults.baseURL}/api/v1/leads/${leadId}`
      );
      return response.data;
    } catch (error) {
      return {} as LeadResponse; // Return empty data
    }
  }

  public async getMe(): Promise<Me> {
    try {
      const response = await axiosDefault.get(
        `${axiosDefault.defaults.baseURL}/api/v1/users/me`
      );
      return response.data;
    } catch (error) {
      return {} as Me; // Return empty data
    }
  }
}
