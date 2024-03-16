import Joi from "joi";

export const emailSubscription = Joi.object({
  email: Joi.string().email().required(),
});
