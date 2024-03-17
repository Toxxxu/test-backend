import { Subscription } from "../models/User.model";

export const createSubscribtion = async (email: string) => {
  const existingSubscription = await Subscription.findOne({ email });
  if (existingSubscription) {
    throw new Error('Email already exists!');
  }
  const subscription = new Subscription({ email });
  await subscription.save();
  return subscription;
};

export const findEmails = async () => {
  const emailExists = await Subscription.find();
  return emailExists;
}
