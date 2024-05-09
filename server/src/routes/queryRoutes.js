import express from "express";
import { addQuery, getQueries } from "../controllers/queryController.js";

const router = express.Router();

router.route("/").post(addQuery);
router.route("/").get(getQueries);

export default router;
