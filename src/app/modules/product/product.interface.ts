export interface IVariants {
  type: string;
  value: string;
}

export interface IInventory {
  quantity: number;
  inStock: boolean;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: IVariants[];
  inventory: IInventory;
}
