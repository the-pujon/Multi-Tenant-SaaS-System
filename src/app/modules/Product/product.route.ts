import express from "express";
import { auth } from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { ProductControllers } from "./product.controller";
import { ProductValidation } from "./product.validation";

const router = express.Router();

router.post(
  "/:shopId/products",
  auth(),
  validateRequest(ProductValidation.createProductSchema),
  ProductControllers.createProduct
);

router.get(
  "/:shopId/products",
  auth(),
  ProductControllers.getProductsForShop
);

export const ProductRoutes = router;
