import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import AppError from "../../errors/AppError";
import { ProductServices } from "./product.service";

const createProduct = catchAsync(async (req, res) => {
  const { userId } = req.user as { userId?: string };
  const { shopId } = req.params;

  if (!userId) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Invalid tenant context");
  }

  const product = await ProductServices.createProduct(userId, shopId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Product created successfully",
    data: product,
  });
});

const getProductsForShop = catchAsync(async (req, res) => {
  const { userId } = req.user as { userId?: string };
  const { shopId } = req.params;

  if (!userId) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Invalid tenant context");
  }

  const products = await ProductServices.getProductsForShop(userId, shopId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products retrieved successfully",
    data: products,
  });
});

export const ProductControllers = {
  createProduct,
  getProductsForShop,
};
