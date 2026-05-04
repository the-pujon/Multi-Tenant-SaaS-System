import httpStatus from "http-status";
import { Types } from "mongoose";
import AppError from "../../errors/AppError";
import { Shop } from "../Shop/shop.model";
import { Product } from "./product.model";
import { IProductCreatePayload } from "./product.interface";

const assertShopOwnership = async (tenantId: string, shopId: string) => {
  const shop = await Shop.findOne({ _id: shopId, tenantId });
  if (!shop) {
    throw new AppError(httpStatus.NOT_FOUND, "Shop not found for this tenant");
  }
  return shop;
};

const createProduct = async (
  tenantId: string,
  shopId: string,
  payload: IProductCreatePayload
) => {
  await assertShopOwnership(tenantId, shopId);

  const product = await Product.create({
    name: payload.name,
    price: payload.price,
    tenantId: new Types.ObjectId(tenantId),
    shopId: new Types.ObjectId(shopId),
  });

  return product;
};

const getProductsForShop = async (tenantId: string, shopId: string) => {
  await assertShopOwnership(tenantId, shopId);

  const products = await Product.find({ tenantId, shopId }).sort({ createdAt: -1 });
  return products;
};

export const ProductServices = {
  createProduct,
  getProductsForShop,
};
