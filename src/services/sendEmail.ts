import nodemailer from "nodemailer";
import { NODE_PASS, NODE_SERVICE, NODE_USER } from "../config/constants";

const sendEmail = async (
  email: string,
  subject: string,
  text?: string,
  htmlContent: string = ""
) => {
  const transporter = nodemailer.createTransport({
    service: NODE_SERVICE as string,
    auth: {
      user: NODE_USER,
      pass: NODE_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: '"App name" <no-reply@appname.com>',
    to: email,
    subject,
    text,
    html: htmlContent || text,
  });

  console.log("Message sent: %s", info.messageId);
  return info;
};

export default sendEmail;
