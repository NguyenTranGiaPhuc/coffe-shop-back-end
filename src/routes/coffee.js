import { Router } from "express";
import { coffeeController } from "../controllers/coffeeController"

const router = Router();

//ADD COFFEE
router.post("/", coffeeController.addCoffee);

module.exports = router;