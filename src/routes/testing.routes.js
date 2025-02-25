import { Router } from "express";
import { testing } from "../controllers/testing.controllers.js";

const router = Router();

router.route("/").get(testing);

export default router;
