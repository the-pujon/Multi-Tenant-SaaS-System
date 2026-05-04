import { Types } from "mongoose";
import { Shop } from "./shop.model";
import { IShopCreatePayload } from "./shop.interface";

const createShop = async (tenantId: string, payload: IShopCreatePayload) => {
  const shop = await Shop.create({
    name: payload.name,
    tenantId: new Types.ObjectId(tenantId),
  });

  return shop;
};

const getMyShops = async (tenantId: string) => {
  const shops = await Shop.find({ tenantId }).sort({ createdAt: -1 });
  return shops;
};

export const ShopServices = {
  createShop,
  getMyShops,
};
