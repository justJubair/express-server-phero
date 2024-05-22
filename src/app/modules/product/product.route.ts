import express from 'express';
import { ProductContollers } from './product.controller';

const router = express.Router();

router.post('/products', ProductContollers.createProduct);

export const ProductRoutes = router;
