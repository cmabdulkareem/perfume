import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';

function EditProduct() {
  const { id } = useParams(); // Get product ID from URL
 
  const [product, setProduct] = useState({
    itemName: '',
    itemDesc: '',
    itemPrice: '',
    image: null, // For storing the selected image file
  });
  const navigate = useNavigate()
  

  // Fetch product details when the component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:8000/products`)
      .then((res) => {
        setProduct(res.data); // Set the fetched product data
      })
      .catch((err) => {
        console.error('Error fetching product:', err);
      });
  }, [id]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value }); // Update product state
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        setProduct({ ...product, image: file }); // Update the image in state
    }
};


  // Handle form submission to update the product
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('itemName', product.itemName);
    formData.append('itemDesc', product.itemDesc);
    formData.append('itemPrice', product.itemPrice);
    if (product.image) {
      formData.append('image', product.image); // Append the image file
    }

    try {
      await axios.put(`http://localhost:8000/editproduct/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the header for file upload
        },
      });
      alert('Product updated successfully!');
      navigate('/products'); // Redirect back to product list
    } catch (err) {
      console.error('Error updating product:', err);
    }
  };

  return (
    <div className="container">
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Item Name</label>
          <input
            type="text"
            name="itemName"
            value={product.itemName}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="itemDesc"
            value={product.itemDesc}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            name="itemPrice"
            value={product.itemPrice}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="form-control"
            accept="image/*" // Accept image files
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Product
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
