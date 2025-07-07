import { Request, Response } from "express";
import Contact from "../models/ContactModel.model";
import ResponseHandler from "../utils/ResponseHandler";
import ErrorHandler from "../utils/ErrorHandler";

export const contact = async (req: Request, res: Response): Promise<void> => {
  const {
    fullName,
    email,
    phoneNumber,
    companyName,
    services,
    budget,
    timeline,
    projectDescription,
  } = req.body;
  try {
    // Validate required fields
    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !companyName ||
      !services ||
      !budget ||
      !timeline
    ) {
      ErrorHandler.send(res, 400, "All required fields must be provided");
      return;
    }

    const allowedServices = [
      "ui-ux-design",
      "web-development",
      "mobile-app",
      "ai-chatbots",
      "custom-software",
      "consultation",
    ];
    const allowedBudgets = ["5k-15k", "15k-30k", "30k-50k", "50k+", "discuss"];
    const allowedTimelines = [
      "asap",
      "1-3-months",
      "3-6-months",
      "6-months+",
      "flexible",
    ];

    if (!allowedServices.includes(services)) {
      ErrorHandler.send(res, 400, "Invalid service selected");
      return;
    }
    if (!allowedBudgets.includes(budget)) {
      ErrorHandler.send(res, 400, "Invalid budget selected");
      return;
    }
    if (!allowedTimelines.includes(timeline)) {
      ErrorHandler.send(res, 400, "Invalid timeline selected");
      return;
    }

    // Create new contact
    const newContact = await Contact.create({
      fullName,
      email,
      phoneNumber,
      companyName,
      services,
      budget,
      timeline,
      projectDescription: projectDescription || "",
    });

    ResponseHandler.send(
      res,
      201,
      "Contact form submitted successfully",
      newContact
    );
  } catch (error: unknown) {
    console.error("Contact form submission error:", error);

    // Handle duplicate email error
    if (
      error instanceof Error &&
      error.message.includes("duplicate key error")
    ) {
      ErrorHandler.send(res, 409, "A contact with this email already exists");
      return;
    }
    ErrorHandler.send(
      res,
      500,
      "Internal server error. Please try again later."
    );
    return;
  }
};

export const getAllContacts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    ResponseHandler.send(res, 200, "Contacts fetched successfully", contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    ErrorHandler.send(res, 500, "Failed to fetch contacts");
  }
};
