import categoryModel from "../models/categoryModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const createCategory = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.json({ error: " Name is required" });
    }

    const existingCategory = await categoryModel.findOne({ name });

    if (existingCategory) {
      return res.json({ error: "Category already exists" });
    }

    const category = await new categoryModel({ name }).save();
    res.json(category);
  } catch (error) {
    console.log(error);
    return res.status(404).json(error);
  }
});

const updateCategory = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;
    const { categoryId } = req.params;

    const category = await categoryModel.findOne({ _id: categoryId });

    if (!category) {
      return res.json({ error: "Category not found" });
    }
    category.name = name;

    const updatedCategory = await category.save();
    res.json(updatedCategory);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

const removeCategory = asyncHandler(async (req, res) => {
  try {
    const removed = await categoryModel.findByIdAndDelete(
      req.params.categoryId
    );
    res.json(removed);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const listCategory = asyncHandler(async (req, res) => {
  try {
    const all = await categoryModel.find({});
    res.json(all);
  } catch (error) {
    console.error(error);
    return res.status(400).json(error.message);
  }
});

const readCategory = asyncHandler(async (req, res) => {
  try {
    const category = await categoryModel.findOne({ _id: req.params.id });
    res.json(category);
  } catch (error) {
    console.error(error);
    return res.status(400).json(error.message);
  }
});

export {
  createCategory,
  updateCategory,
  removeCategory,
  listCategory,
  readCategory,
};
