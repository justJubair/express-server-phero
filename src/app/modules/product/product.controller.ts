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

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);

    //send response
    res.status(200).json({
      success: result === null ? false : true,
      message: result === null ? 'Not found' : 'Product retrived successfully',
      data: result === null ? 'No data found' : result,
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

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedProductData = req?.body;

    const result = await ProductServices.updateProductIntoDB(
      productId,
      updatedProductData,
    );

    //send response
    res.status(200).json({
      success: result === null ? false : true,
      message: result === null ? 'Not found' : 'Product updated successfully',
      data: updatedProductData,
      result: result,
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

const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteSingleProductFromDB(productId);

    //send response
    res.status(200).json({
      success: true,
      message: result === null ? 'Not found' : 'Product deleted successfully',
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

export const ProductContollers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
