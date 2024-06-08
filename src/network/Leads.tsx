import { MenuItem } from "@mui/material";

// Define the interfaces for the Lead data
export enum LeadStatus {
  PROPOSAL_SENT = "PROPOSAL_SENT",
  VIEWED = "VIEWED",
  CHATTING = "CHATTING",
  IN_PROGRESS = "IN_PROGRESS",
}

export function generateLeadStatusMenuItems(): JSX.Element[] {
  return Object.values(LeadStatus).map((status) => (
    <MenuItem key={status} value={status}>
      {LeadStatusUINames[status]}
    </MenuItem>
  ));
}

export function stringToLeadStatus(value: string): LeadStatus {
  const enumValue = Object.values(LeadStatus).find((key) => key === value);
  return enumValue !== undefined ? enumValue : LeadStatus.PROPOSAL_SENT;
}

const hexToRgba = (hex: string, alpha: number): string => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const ALPHA = 0.2;

export const LeadStatusTextColors: { [key in LeadStatus]: string } = {
  [LeadStatus.PROPOSAL_SENT]: "#269E8C", // Example color for PROPOSAL_SENT
  [LeadStatus.VIEWED]: "#F57F17", // Example color for VIEWED
  [LeadStatus.CHATTING]: "#33691E", // Example color for CHATTING
  [LeadStatus.IN_PROGRESS]: "#1A237E", // Example color for IN_PROGRESS
};

export const LeadStatusBackgroundColors: { [key in LeadStatus]: string } = {
  [LeadStatus.PROPOSAL_SENT]: hexToRgba(
    LeadStatusTextColors[LeadStatus.PROPOSAL_SENT],
    ALPHA
  ),
  [LeadStatus.VIEWED]: hexToRgba(
    LeadStatusTextColors[LeadStatus.VIEWED],
    ALPHA
  ),
  [LeadStatus.CHATTING]: hexToRgba(
    LeadStatusTextColors[LeadStatus.CHATTING],
    ALPHA
  ),
  [LeadStatus.IN_PROGRESS]: hexToRgba(
    LeadStatusTextColors[LeadStatus.IN_PROGRESS],
    ALPHA
  ),
};

export const LeadStatusUINames: { [key in LeadStatus]: string } = {
  [LeadStatus.PROPOSAL_SENT]: "Proposal Sent", // Example color for PROPOSAL_SENT
  [LeadStatus.VIEWED]: "Viewed", // Example color for VIEWED
  [LeadStatus.CHATTING]: "Chatting", // Example color for CHATTING
  [LeadStatus.IN_PROGRESS]: "In Progress", // Example color for IN_PROGRESS
};

export enum Role {
  LEAD_GENERATOR = "LEAD_GENERATOR",
  ADMIN = "ADMIN",
  SALES_MANAGER = "SALES_MANAGER",
}

export const RoleUINames: { [key in Role]: string } = {
  [Role.LEAD_GENERATOR]: "Lead Generator", // Example color for PROPOSAL_SENT
  [Role.ADMIN]: "Admin", // Example color for VIEWED
  [Role.SALES_MANAGER]: "Sales Manager", // Example color for CHATTING
};

export enum ListTimes {
  TwelveToFourteen = "12:00-14:00",
  FourteenToEighteen = "14:00-18:00",
  EighteenToMidnight = "18:00-00:00",
  MidnightToFour = "00:00-4:00",
  FourToEight = "4:00-8:00",
  EightToTwelve = "8:00-12:00",
}

export function stringToTimeSent(value: string): ListTimes {
  const enumValue = Object.values(ListTimes).find((key) => key === value);
  return enumValue !== undefined ? enumValue : ListTimes.TwelveToFourteen;
}

export function generateListTimesMenuItems(): JSX.Element[] {
  return Object.values(ListTimes).map((time) => (
    <MenuItem key={time} value={time}>
      {time}
    </MenuItem>
  ));
}

// Define the colors for each time range
export const ListTimesColors: { [key in ListTimes]: string } = {
  [ListTimes.TwelveToFourteen]: "#CFD8DC", // Example color for 12:00-14:00
  [ListTimes.FourteenToEighteen]: "#607D8B", // Example color for 14:00-18:00
  [ListTimes.EighteenToMidnight]: "#546E7A", // Example color for 18:00-00:00
  [ListTimes.MidnightToFour]: "#455A64", // Example color for 00:00-4:00
  [ListTimes.FourToEight]: "#37474F", // Example color for 4:00-8:00
  [ListTimes.EightToTwelve]: "#90A4AE", // Example color for 8:00-12:00
};

export interface LeadRequest {
  name: string;
  date: string;
  datePosted: string;
  url: string;
  timeSent: string;
  hireRate: number;
  totalSpend: number;
  status: string;
  contry: string;
}

export interface UserResponse {
  id?: number; // Optional property
  firstname: string;
  lastname: string;
  email: string;
  role: Role;
}

export interface LeadResponse {
  id?: number;
  name: string;
  date: string;
  datePosted: string;
  url: string;
  timeSent: ListTimes;
  hireRate: number;
  totalSpend: number;
  status: LeadStatus;
  creator?: UserResponse;
  created: string; // Use string to represent LocalDateTime
  updated?: string; // Use string to represent LocalDateTime
  country: string;
}

export interface Me {
  firstname: string;
  lastname: string;
  email: string;
}
