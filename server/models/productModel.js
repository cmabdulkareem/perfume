import mongoose from "mongoose";
const productSchema = mongoose.Schema({
      itemName: String,
      itemDesc:String,
      itemPrice:Number
})

const Product = mongoose.model('Product',productSchema)
export default Product