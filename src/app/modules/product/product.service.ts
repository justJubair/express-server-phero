import { IInventory, IProduct } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (productData: IProduct) => {
  const result = await ProductModel.create(productData);
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById(id).exec();
  return result;
};

const updateProductIntoDB = async (
  id: string,
  updatedProductData: IProduct,
) => {
  const updatedProduct = {
    $set: {
      name: updatedProductData.name,
      description: updatedProductData.description,
      price: updatedProductData.price,
      category: updatedProductData.category,
      tags: updatedProductData.tags,
      variants: updatedProductData.variants,
      inventory: updatedProductData.inventory,
    },
  };
  const result = await ProductModel.updateOne({ _id: id }, updatedProduct);
  return result;
};

const updateProductInventoryIntoDB = async (
  id: string,
  updatedInventoryData: IInventory,
) => {
  const updatedInventory = {
    $set: {
      inventory: updatedInventoryData,
    },
  };
  const result = await ProductModel.updateOne({ _id: id }, updatedInventory);
  return result;
};

const deleteSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.deleteOne({ _id: id });
  return result;
};

const getAllProductsFromDB = async (searchTerm = '') => {
  const query = {
    name: { $regex: searchTerm, $options: 'i' },
  };
  const result = await ProductModel.find(query);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteSingleProductFromDB,
  updateProductInventoryIntoDB,
};
