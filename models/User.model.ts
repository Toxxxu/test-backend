import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

export const Subscription = mongoose.model('Subscription', subscriptionSchema);
