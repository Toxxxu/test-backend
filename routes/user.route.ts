import { Router } from "express";

import { getEmails, subscribe } from "../controllers/user.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { emailSubscription } from "../validations/user.validation";

const router = Router();

router.post('/subscribe', validateRequest(emailSubscription), subscribe);
router.get('/get-emails', getEmails);

export default router;