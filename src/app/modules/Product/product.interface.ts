import { Types } from "mongoose";

export interface IProduct {
  name: string;
  price: number;
  tenantId: Types.ObjectId;
  shopId: Types.ObjectId;
}

export type IProductCreatePayload = {
  name: string;
  price: number;
};
