import express from 'express';
import { ProductContollers } from './product.controller';

const router = express.Router();

router.post('/products', ProductContollers.createProduct);
router.get('/products', ProductContollers.getAllProducts);
router.get('/products/:productId', ProductContollers.getSingleProduct);
router.put('/products/:productId', ProductContollers.updateSingleProduct);
router.delete('/products/:productId', ProductContollers.deleteSingleProduct);

export const ProductRoutes = router;
