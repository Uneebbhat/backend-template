// Add all interfaces here and then export them to use

import { Types } from "mongoose";

// User Interface
export interface IUser {
  // Add more fields as needed
  name: string;
  email: string;
  password: string;
}

export interface IUserDTO {
  // Add more fields as needed
  _id: Types.ObjectId;
  name: string;
  email: string;
}
