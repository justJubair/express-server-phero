import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import productValidationSchema from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req?.body;

    const zodparsedData = productValidationSchema.parse(productData);
    const result = await ProductServices.createProductIntoDB(zodparsedData);

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

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const filter = req?.query.searchTerm as string;

    const result = await ProductServices.getAllProductsFromDB(filter);
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

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req?.params;
    const result = await ProductServices.getSingleProductFromDB(
      Number(productId),
    );

    //send response
    res.status(200).json({
      success: result === null ? false : true,
      message: result === null ? 'Not found' : 'Product retrived successfully',
      data: result === null ? 'No data found' : result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req?.params;
    const updatedProductData = req?.body;

    const result = await ProductServices.updateProductIntoDB(
      Number(productId),
      updatedProductData,
    );

    //send response
    res.status(200).json({
      success: result === null ? false : true,
      message: result === null ? 'Not found' : 'Product updated successfully',
      data: updatedProductData,
      result: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req?.params;
    const result = await ProductServices.deleteSingleProductFromDB(
      Number(productId),
    );

    //send response
    res.status(200).json({
      success: true,
      message: result === null ? 'Not found' : 'Product deleted successfully',
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

export const ProductContollers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
