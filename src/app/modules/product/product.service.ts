import { IProduct } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (productData: IProduct) => {
  const result = await ProductModel.create(productData);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
};
