import { Request, Response } from 'express';
import { orderServices } from './order.service';
import orderValidationSchema from './order.validation';
import { IProduct } from '../product/product.interface';
import { ProductServices } from '../product/product.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req?.body;

    const zodparsedData = orderValidationSchema.parse(orderData);

    const product: IProduct | null =
      await ProductServices.getSingleProductFromDB(zodparsedData.productId);

    if (product) {
      const orderedQuantity = zodparsedData.quantity;
      const availableQuantity = product.inventory.quantity;

      if (orderedQuantity > availableQuantity) {
        return res.status(500).send({
          success: false,
          message: 'Insufficient quantity',
        });
      }

      const newQuantity = availableQuantity - orderedQuantity;

      const newInventory = {
        quantity: newQuantity,
        inStock: newQuantity > 0,
      };

      await ProductServices.updateProductInventoryIntoDB(
        zodparsedData.productId,
        newInventory,
      );
    } else {
      return res.status(404).send({
        success: false,
        message: 'Product not found',
      });
    }

    const result = await orderServices.createOrderIntoDB(zodparsedData);

    res.status(200).json({
      success: true,
      message: 'Product is created successfully',
      data: result,
    });
  } catch (err: unknown) {
    let errorMessage = 'something went wrong';
    if (err instanceof Error) {
      errorMessage = err.message;
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
      error: err,
    });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const email = req?.query.email as string;
    // console.log(email);
    const result = await orderServices.getAllOrderFromDB(email);
    //send response
    res.status(200).json({
      success: true,
      message: 'Products are retrived successfully',
      data: result,
    });
  } catch (err: unknown) {
    let errorMessage = 'something went wrong';
    if (err instanceof Error) {
      errorMessage = err.message;
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
      error: err,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrder,
};
