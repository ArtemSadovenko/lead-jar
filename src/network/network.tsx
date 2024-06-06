import axios from "axios";
import {
  RegisterRequest,
  AuthenticationResponse,
  AuthenticationRequest,
} from "./AuthInterfaces";
import { LeadRequest, LeadResponse } from "./Leads";

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

  public async logout(): Promise<void> {
    try {
      await instance.post(`${BASE_URL}/api/v1/auth/logout`, null, {
        withCredentials: true, // Send cookies with the request
      });
    } catch (error) {
      throw new Error("Failed to logout");
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

  public async createLead(leadRequest: LeadRequest): Promise<LeadResponse> {
    try {
      const response = await instance.post(
        `${BASE_URL}/api/v1/leads/create`,
        leadRequest,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to create lead");
    }
  }

  public async deleteLead(leadId: number): Promise<void> {
    try {
      await instance.delete(`${BASE_URL}/api/v1/leads/${leadId}`);
    } catch (error) {
      throw new Error("Failed to delete lead");
    }
  }

  public async getAllLeads(): Promise<LeadResponse[]> {
    try {
      const response = await instance.get(`${BASE_URL}/api/v1/leads/all`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to get all leads");
    }
  }

  public async getLeadById(leadId: number): Promise<LeadResponse> {
    try {
      const response = await instance.get(`${BASE_URL}/api/v1/leads/${leadId}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to get lead by id");
    }
  }
}
