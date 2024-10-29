import express from "express";
import {
  getProductById,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { userAuth, adminAuth } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(getProducts).post(userAuth, adminAuth, addProduct);
router.route("/:id").get(getProductById);

router.put("/:id/edit", userAuth, adminAuth, updateProduct);
router.delete("/:id/delete", userAuth, adminAuth, deleteProduct);
export default router;
