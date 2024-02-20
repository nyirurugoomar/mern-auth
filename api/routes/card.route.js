import express from "express";
import {
  getCards,
  createCard,
  updateCard,
  deleteCard,
} from "../controllers/card.controller.js";

const router = express.Router();
router.get("/getCards", getCards);
router.post("/createCard", createCard);
router.put("/cards/:cardID", updateCard);
router.delete("/cards/:cardID", deleteCard);

export default router;
