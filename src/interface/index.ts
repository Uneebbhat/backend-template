// Add all interfaces here and then export them to use

import { Types } from "mongoose";

// User Interface
export enum Role {
  user = "user",
  admin = "admin",
}

export interface IUser {
  // Add more fields as needed
  name: string;
  email: string;
  password: string;
  role: Role;
}

export interface IUserDTO {
  // Add more fields as needed
  _id: Types.ObjectId;
  name: string;
  email: string;
  role: Role;
}
