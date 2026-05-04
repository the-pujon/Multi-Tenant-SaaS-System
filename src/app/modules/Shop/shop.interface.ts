import { Types } from "mongoose";

export interface IShop {
  name: string;
  tenantId: Types.ObjectId;
}

export type IShopCreatePayload = {
  name: string;
};
