import { Types } from "mongoose";
<<<<<<< HEAD
import { IUserDTO } from "../interface/index";
=======
import { IUserDTO, Role } from "../shared";
>>>>>>> 87c563bbd37ae300305e292e9901060590c09872

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
