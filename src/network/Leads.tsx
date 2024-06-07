// Define the interfaces for the Lead data
export interface LeadRequest {
  name: string;
  date: string;
  datePosted: string;
  url: string;
  timeSent: string;
  hireRate: number;
  totalSpend: number;
  status: string;
}

export interface LeadResponse {
  id?: number;
  name: string;
  date: string;
  datePosted: string;
  url: string;
  timeSent: string;
  hireRate: number;
  totalSpend: number;
  status: string;
  userId?: number;
  created: string;
  updated?: string;
}

export interface Me {
  firstname: string;
  lastname: string;
  email: string;
}
