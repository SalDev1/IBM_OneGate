import express from "express";
import { addHelpDeskTicket, getAllHelpDeskTicketsByAdmin, getAllHelpDeskTicketsByUserId, updateHelpDeskTicket } from "../controllers/helpDeskController.js";

const router = express.Router();

router.route('/tickets/admin').get(getAllHelpDeskTicketsByAdmin);
router.route('/:id').get(getAllHelpDeskTicketsByUserId);
router.route('/').post(addHelpDeskTicket);
router.route('/:id').put(updateHelpDeskTicket);

export default router;