import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Book = db.define("books", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,

  },
  description: {
    type: DataTypes.STRING,

  },
  image_url: {
    type: DataTypes.STRING,

  },
  release_year: {
    type: DataTypes.INTEGER,

  },
  price: {
    type: DataTypes.STRING,

  },
  total_page: {
    type: DataTypes.INTEGER,

  },
  thickness: {
    type: DataTypes.STRING,

  },

  category_id: {
    type: DataTypes.INTEGER,

  }
});

export default Book;

(
  async () => {
    await db.sync();
  })();
