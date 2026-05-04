import { Schema, model } from "mongoose";
import { IShop } from "./shop.interface";

const shopSchema = new Schema<IShop>(
  {
    name: {
      type: String,
      required: [true, "Shop name is required"],
      trim: true,
      minlength: [2, "Shop name must be at least 2 characters"],
      maxlength: [100, "Shop name cannot exceed 100 characters"],
    },
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

shopSchema.index({ tenantId: 1, name: 1 });

export const Shop = model<IShop>("Shop", shopSchema);
