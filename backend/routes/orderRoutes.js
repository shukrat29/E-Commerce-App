import express from "express";

import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from "../controllers/orderController.js";
import { userAuth, adminAuth } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", userAuth, addOrderItems);
router.get("/", userAuth, adminAuth, getOrders);

router.get("/myorder", userAuth, getMyOrders);
router.get("/:id", userAuth, getOrderById);
router.put("/:id/pay", userAuth, updateOrderToPaid);
router.put("/:id/deliver", userAuth, adminAuth, updateOrderToDelivered);

export default router;
