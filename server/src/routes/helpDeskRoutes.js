import express from "express";
import { addHelpDeskTicket, getAllHelpDeskTicketsByUserId } from "../controllers/helpDeskController.js";

const router = express.Router();

router.route('/:id').get(getAllHelpDeskTicketsByUserId);
router.route('/').post(addHelpDeskTicket);

export default router;