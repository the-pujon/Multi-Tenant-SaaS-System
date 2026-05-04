import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import AppError from "../../errors/AppError";
import { ShopServices } from "./shop.service";

const createShop = catchAsync(async (req, res) => {
  const { userId } = req.user as { userId?: string };
  if (!userId) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Invalid tenant context");
  }

  const shop = await ShopServices.createShop(userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Shop created successfully",
    data: shop,
  });
});

const getMyShops = catchAsync(async (req, res) => {
  const { userId } = req.user as { userId?: string };
  if (!userId) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Invalid tenant context");
  }

  const shops = await ShopServices.getMyShops(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Shops retrieved successfully",
    data: shops,
  });
});

export const ShopControllers = {
  createShop,
  getMyShops,
};
