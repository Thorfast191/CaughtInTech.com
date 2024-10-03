import express from "express";
import formidable from "express-formidable";

const router = express.Router();

// import controllers
import {
  addProduct,
  updateProductDetails,
  removeProduct,
  fetch6Products,
  fetchProductId,
  fetchAllProducts,
  addProductReview,
  fetchTopProducts,
  fetchNewProducts,
} from "../controllers/productController.js";

import { authenticate, authorizeAdmin } from "../middlewares/authMiddleWare.js";
import checkId from "../middlewares/checkId.js";

router
  .route("/")
  .get(fetch6Products)
  .post(authenticate, authorizeAdmin, formidable(), addProduct);
router.route("/allproducts").get(fetchAllProducts);
router
  .route("/:id/reviews")
  .post(authenticate, authorizeAdmin, checkId, addProductReview);
router.get("/top", fetchTopProducts);
router.get("/new", fetchNewProducts);
router
  .route("/:id")
  .get(fetchProductId)
  .put(authenticate, authorizeAdmin, formidable(), updateProductDetails)
  .delete(authenticate, authorizeAdmin, removeProduct);

export default router;
