import { Sequelize } from "sequelize";
import db from "../config/Database.js"
import Category from "./Category.js";

const {DataTypes} = Sequelize;

const Book = db.define('books', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  releaseYear: {
    type: Sequelize.INTEGERS,
  },
  price: {
    type: Sequelize.STRING,
  },
  totalPage: {
    type: Sequelize.INTEGER,
  },
  thickness: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
  categoryId: {
    type: Sequelize.INTEGER,
    references: {
      model: Category,
      key: 'id',
    },
  },
});

export default Category;

(
  async()=>{
      await db.sync();
  })();