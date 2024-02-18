const express=require('express')
const router=new express.Router()
const userController=require('../Controllers/userController')
const productController=require('../Controllers/productController')
const ratingController=require('../Controllers/ratingController')
const requestController=require('../Controllers/requestController')
const chatController=require('../Controllers/chatController')
const wishlistController=require('../Controllers/wishListController')
const jwtMiddleWare = require('../Middlewares/jwtMiddleWare')
const multerConfig = require('../Middlewares/multerMiddleware')


// register API
router.post('/users/register',userController.register)
// login API
router.post('/users/login',userController.login)
// add product
router.post('/products/add',jwtMiddleWare,multerConfig.single('productImage'),productController.addProducts)
// get user products
router.get('/products/user-products',jwtMiddleWare,productController.allUserProducts)
// get all products
router.get('/products/all-products',productController.getAllProducts)
// edit products
router.put('/products/edit/:id',jwtMiddleWare,multerConfig.single("productImage"),productController.editProducts)
// delete product
router.delete('/products/remove/:id',jwtMiddleWare,productController.deleteProductController)
// add rating
router.post('/ratings/add',jwtMiddleWare,ratingController.addrating)
// get ratings
router.get('/ratings/getratings',ratingController.getAllReviews)
// add request
router.post('/requests/add',jwtMiddleWare,requestController.addRequestController)
// get requests
router.get('/requests/getrequests',requestController.getRequestController)
// delete request
router.delete('/requests/remove/:id',jwtMiddleWare,requestController.deleteRequestController)
// add chat
router.post('/chat/addchat',jwtMiddleWare,chatController.addChatController)
// get chat
router.get('/chat/getchat',chatController.getMessages)
// update user
router.put('/users/update',jwtMiddleWare,multerConfig.single("profileImage"),userController.editUser)
// add to wishlist
router.post('/wishlists/add',jwtMiddleWare,wishlistController.addWishlistController)
// get wishlist
router.get('/wishlists/get',jwtMiddleWare,wishlistController.getWishlist)
// delete wishlist
router.delete('/wishlists/delete/:id',jwtMiddleWare,wishlistController.deleteWishlistController)
// export router
module.exports=router