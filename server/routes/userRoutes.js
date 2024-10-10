import express from 'express'
import {
        handleRegistration,
        handleLogin, 
        authChecking,
        getDashboard,
        handleLogout
      } from '../controller/userController.js'
import {
        handleAddProducts,
        handlegetProducts,
        handleDeleteProduct,
        editProduct
       } from '../controller/productController.js'
// import {
//         handleSendeOTP

//         } from '../controller/adminController.js'

     
const router =express.Router()


router.post('/register',handleRegistration)
router.post('/admin-login',handleLogin)
router.get('/checkAuth',authChecking)
router.get('/',getDashboard)
router.get('/logout',handleLogout)


router.post('/addproducts',handleAddProducts)
router.get('/products',handlegetProducts)
router.delete('/deleteproduct/:id',handleDeleteProduct)
router.put('/editproduct/:id', editProduct)

// router.post('/admin/sendotp', handleSendeOTP)
export default router