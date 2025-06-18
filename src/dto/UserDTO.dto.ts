import { Types } from "mongoose";
import { IUserDTO, Role } from "../shared";

class UserDTO {
  _id: Types.ObjectId;
  name: string;
  email: string;
  role: Role;
  constructor(user: IUserDTO) {
    this._id = user._id;
    this.name = user.name;
    this.email = user.email;
    this.role = user.role;
  }
}

export default UserDTO;
