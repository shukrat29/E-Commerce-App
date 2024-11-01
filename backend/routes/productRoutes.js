import express from "express";
import {
  getProductById,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";
import { userAuth, adminAuth } from "../middlewares/authMiddleware.js";

const router = express.Router();
router.get("/top", getTopProducts);
router.route("/").get(getProducts);
router.post("/", userAuth, adminAuth, addProduct);
router.route("/:id").get(getProductById);

router.put("/:id/edit", userAuth, adminAuth, updateProduct);
router.delete("/:id/delete", userAuth, adminAuth, deleteProduct);
router.post("/:id/reviews", userAuth, createProductReview);

export default router;
