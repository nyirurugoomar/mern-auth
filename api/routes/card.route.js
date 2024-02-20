import express from "express";
import {
  getCards,
  createCard,
  updateCard,
  deleteCard,
} from "../controllers/card.controller.js";
import router from "./user.route.js";

const router = express.Router();
router.get("/cards", getCards);
router.post("/cards", createCard);
router.put("/cards/:cardID", updateCard);
router.delete("/cards/:cardID", deleteCard);

export default router;
