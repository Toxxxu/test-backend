import { Router } from "express";

import { subscribe } from "../controllers/user.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { emailSubscription } from "../validations/user.validation";

const router = Router();

router.post('/subscribe', validateRequest(emailSubscription), subscribe);

export default router;