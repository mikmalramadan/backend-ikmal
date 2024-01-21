import Book from "../models/Book.js";


export const getAllBook = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const createBook = async (req, res) => {
  console.log(res)
  try {
    const {
      title,
      description,
      image_url,
      release_year,
      price,
      total_page,
      category_id
    } = req.body;


    if (!release_year || release_year < 1980 || release_year > 2021) {
      return res.status(400).json({ message: 'Invalid release year. It should be between 1980 and 2021.' });
    }


    let thickness;
    if (total_page <= 100) {
      thickness = 'tipis';
    } else if (total_page <= 200) {
      thickness = 'sedang';
    } else {
      thickness = 'tebal';
    }

    const newBook = await Book.create({
      title,
      description,
      image_url,
      release_year: parseInt(release_year),
      price,
      total_page,
      thickness,
      category_id
    });

    res.json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const updateBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      const {
        title,
        description,
        image_url,
        release_year,
        price,
        total_page,
        category_id
      } = req.body;

      if (release_year && (release_year < 1980 || release_year > 2021)) {
        return res.status(400).json({ message: 'Invalid release year. It should be between 1980 and 2021.' });
      }

      let thickness;
      if (total_page <= 100) {
        thickness = 'tipis';
      } else if (total_page <= 200) {
        thickness = 'sedang';
      } else {
        thickness = 'tebal';
      }

      await book.update({
        title,
        description,
        image_url,
        release_year: (parseInt(release_year)),
        price,
        total_page,
        thickness,
        category_id
      });
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      await book.destroy();
      res.json({ message: 'Book deleted successfully' });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
