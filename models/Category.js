import { Sequelize } from "sequelize";
import db from "../config/Database.js"

const { DataTypes } = Sequelize;

const Category = db.define('categories', {

  name: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.TIME,
  },
  updatedAt: {
    type: DataTypes.TIME
  }
});
export default Category;

(
  async () => {
    await db.sync();
  })();