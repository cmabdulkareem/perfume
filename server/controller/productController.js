import Product from "../models/productModel.js";

import path,{dirname} from 'path'
import { fileURLToPath } from "url";

const __filename=fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


export const handleAddProducts =(req,res)=>{
  const {itemName,itemDesc,itemPrice} =req.body;

  Product.create({itemName,itemDesc,itemPrice})
        .then((product)=>{
          const image =req.files.image;
          image.mv(path.join(__dirname,'../public/images/product-images',`${product._id}.jpeg`))
          res.status(200).json({message:'new product added'})
        })

.catch((error)=>{
    res.status(500).json({error: 'error creating new product'})
  })
}

export const handlegetProducts =(req,res)=>{
  Product.find({})
  .then((products)=>{
    res.status(200).json({message: products})
  })
    .catch((error)=>{
      res.status(500).json({error:'no product find'})
    })

}

export const handleDeleteProduct =(req,res)=>{
  const id =req.params.id
  console.log(id);
        Product.findByIdAndDelete(id)
          .then((product)=>{
            res.status(200).json({message:`${product.itemName} Deleted`})
          })
          .catch((err)=>{
            res.status(500).json({error:"internal server error"})
          })
  
  
}


export const editProduct = async (req, res) => {
  const { id } = req.params;
  const { itemName, itemDesc, itemPrice } = req.body;

  try {
    let updatedProduct;

    if (req.files && req.files.image) {
      // Handle image upload
      const image = req.files.image;
      const imagePath = path.join(__dirname, '../public/images/product-images', `${id}.jpeg`);

      // Move the uploaded file to the desired directory
      await image.mv(imagePath);

      // Update the product with the new details, including image path
      updatedProduct = await Product.findByIdAndUpdate(
        id,
        { itemName, itemDesc, itemPrice, image: `${id}.jpeg` },
        { new: true }
      );
    } else {
      // If no new image, just update the other fields
      updatedProduct = await Product.findByIdAndUpdate(
        id,
        { itemName, itemDesc, itemPrice },
        { new: true }
      );
    }

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error });
  }
};