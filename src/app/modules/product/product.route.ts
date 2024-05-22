import express from 'express';
import { ProductContollers } from './product.controller';

const router = express.Router();

router.post('/create-product', ProductContollers.createProduct);

export const ProductRoutes = router;
