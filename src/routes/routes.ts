import { Router } from 'express';
import { body } from 'express-validator';
import { handleInputError } from '../modules/middleware';
import { title } from 'process';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/products';
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from '../controllers/update';

const router = Router();

/**
 * Product
 */
  router.get("/product", getProducts );
  
  router.get("/product/:id", getProduct);

  
  router.post("/product", [ body('name').isString() ] , handleInputError , createProduct);
  
  router.put("/product/:id", [ body('name').isString() ] , handleInputError , updateProduct);
  
  router.delete("/product/:id", deleteProduct );
  
  /**
   * Update
   */
  
  router.get("/update", getUpdates );
  
  router.get("/update/:id", getOneUpdate );
  
  router.post("/update", [ 
    body('title').exists().isString() ,
    body('body').exists().isString() ,
    body('productId').exists().isString() 
    ] , createUpdate);
  
  router.put("/update/:id", [ 
    body('title').optional() ,
    body('body').optional() ,
    body('status').isIn(['IN_PROGRESS', 'PUBLISHED', 'ARCHIVED']).optional() ,
    body('version').optional() 
    ] , updateUpdate );
  
  router.delete("/update/:id", deleteUpdate );
  
  /**
   * UpdatePoint
   */
  
  router.get("/updatepoint", );
  
  router.get("/updatepoint/:id", );
  
  router.post("/updatepoint", [
    body('name').optional().isString(),
    body('description').optional().isString(),
    body('updateId').exists().isString(),
    ] , );
  
  router.put("/updatepoint/:id", [
    body('name').optional().isString(),
    body('description').optional().isString(),
    ] , );
  
  router.delete("/updatepoint/:id", );
  
  export default router;