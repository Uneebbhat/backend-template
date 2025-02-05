import { Types } from "mongoose";
import { IUserDTO } from "../shared";

class UserDTO {
  _id: Types.ObjectId;
  name: string;
  email: string;
  constructor(user: IUserDTO) {
    this._id = user._id;
    this.name = user.name;
    this.email = user.email;
  }
}

export default UserDTO;
