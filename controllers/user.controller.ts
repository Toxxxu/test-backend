import { NextFunction, Request, Response } from "express";

import { createSubscribtion, findEmails } from "../services/user.service";

export const subscribe = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send('Email is required');
  }
  try {
    const subscription = await createSubscribtion(email);
    res.status(201).json(subscription);
  } catch (error) {
    next(error);
  }
}

export const getEmails = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const emailExists = await findEmails();
    return res.status(200).json(emailExists);
  } catch (error) {
    next(error);
  }
}
