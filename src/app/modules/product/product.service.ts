import { IProduct } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (productData: IProduct) => {
  const result = await ProductModel.create(productData);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (id: number) => {
  const result = await ProductModel.findOne({ id });
  return result;
};

const updateProductIntoDB = async (
  id: number,
  updatedProductData: IProduct,
) => {
  const updatedProduct = {
    $set: {
      id: updatedProductData.id,
      name: updatedProductData.name,
      description: updatedProductData.description,
      price: updatedProductData.price,
      category: updatedProductData.category,
      tags: updatedProductData.tags,
      variants: updatedProductData.variants,
      inventory: updatedProductData.inventory,
    },
  };
  const result = await ProductModel.updateOne({ id }, updatedProduct);
  return result;
};

const deleteSingleProductFromDB = async (id: Number) => {
  const result = await ProductModel.deleteOne({ id });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteSingleProductFromDB,
};
