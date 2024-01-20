import Category from "../models/Category.js";

export const getCategory = async(req, res) =>{
  try {
    const response = await Category.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

export const getCategoryById = async(req, res) =>{
  try {
    const response = await Category.findOne({
      where:{
        id: req.params.id
      }
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

export const createCategory = async(req, res) =>{
  try {
    await Category.create(req.body)
    res.status(201).json({msg: "Category Created"});
  } catch (error) {
    console.log(error.message);
  }
}

export const updateCategory = async(req, res) =>{
  try {
    await Category.update(req.body, {
      where:{
        id: req.params.id
      }
    })
    res.status(200).json({msg: "Category Updated"});
  } catch (error) {
    console.log(error.message);
  }
}

export const deleteCategory = async(req, res) =>{
  try {
    await Category.destroy({
      where:{
        id: req.params.id
      }
    })
    res.status(200).json({msg: "Category deleted"});
  } catch (error) {
    console.log(error.message);
  }
}