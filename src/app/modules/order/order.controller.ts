import { Request, Response } from 'express';
import { orderServices } from './order.service';
import orderValidationSchema from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req?.body;

    const zodparsedData = orderValidationSchema.parse(orderData);
    const result = await orderServices.createOrderIntoDB(zodparsedData);

    res.status(200).json({
      success: true,
      message: 'Product is created successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
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
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrder,
};
