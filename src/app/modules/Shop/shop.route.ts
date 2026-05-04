import express from "express";
import { auth } from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { ShopControllers } from "./shop.controller";
import { ShopValidation } from "./shop.validation";

const router = express.Router();

router.post(
  "/",
  auth(),
  validateRequest(ShopValidation.createShopSchema),
  ShopControllers.createShop
);

router.get("/", auth(), ShopControllers.getMyShops);

export const ShopRoutes = router;
