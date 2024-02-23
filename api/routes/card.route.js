import express from "express";
import {
  getCards,
  createCard,
  updateCard,
  deleteCard,
  searchCards,
} from "../controllers/card.controller.js";
import { verifyToken } from "../utils/VerifyUser.js";

const router = express.Router();
router.get("/getCards", getCards);
router.post("/createCard", createCard);
router.put("/cards/:cardID", verifyToken, updateCard);
router.delete("/cards/:cardID", verifyToken, deleteCard);
router.get("/search", searchCards);

export default router;
