import Stripe from "stripe";
import {
  STRIPE_SECRET_KEY,
  STRIPE_PUBLISHABLE_KEY,
  STRIPE_WEBHOOK_SECRET,
} from "./constants";

const stripe = new Stripe(STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-06-30.basil", // Specify the correct API version
  typescript: true,
});

export const stripeConfig = {
  stripe,
  publishableKey: STRIPE_PUBLISHABLE_KEY,
  webhookSecret: STRIPE_WEBHOOK_SECRET,
};

export default stripe;
