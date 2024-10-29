import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc Fetch all products
// @route GET/api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  res.json(products);
});

// @desc Fetch single product
// @route GET/api/product/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

// @desc Create a products
// @route POST /api/products
// @access Private/ Admin
const addProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "sample name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "apple",
    category: "sports",
    countInStock: 2,
    numReviews: 0,
    description: "sample description",
  });

  const addedProduct = await product.save();
  res.status(201).json(addedProduct);
});

// @desc update/edit a product
// @route PUT /api/products/:id
// @access Public
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body; //this req.body is admin frontend

  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductById, addProduct, updateProduct };
