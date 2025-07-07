import mongoose, { Schema } from "mongoose";

const ContactModel = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      minLength: 2,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone Number is required"],
    },
    companyName: {
      type: String,
    },
    services: {
      type: String,
      required: [true, "Services is required"],
    },
    budget: {
      type: String,
      required: [true, "Project budget is required"],
    },
    timeline: {
      type: String,
      required: [true, "Project timeline is required"],
    },
    projectDescription: {
      type: String,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", ContactModel);

export default Contact;
