const express=require('express');
const router=express.Router();

const{getAllProducts,getProductById}=require('../controller/productControllers');

//get all products from db
//@route get/api/products
router.get('/',getAllProducts)

//get a product by id from db
//@route get/api/products/:id
router.get('/:id',getProductById)

//add a product from db
//@route get/api/products/:id
//router.get('/add-Öproduct',AddProduct)


module.exports=router;