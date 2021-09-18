"use strict";
// Routes to products
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// api/products

// router.post('/', () => {
//     console.log('Post Products → OK');
// });

router.post('/', productController.postProduct);
router.get('/', productController.getProducts);
router.get('/:id', productController.getOneProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);


module.exports = router;