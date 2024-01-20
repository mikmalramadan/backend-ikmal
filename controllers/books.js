import Book from "../models/Book.js";

// GET all books
export const getAllBook = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET a specific book
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

// POST a new book
export const createBook = async (req, res) => {
  try {
    const { title, description, image_url, release_year, price, total_page, category_id } = req.body;

    // Validasi release_year
    if (release_year < 1980 || release_year > 2021) {
      return res.status(400).json({ message: 'Invalid release year. It should be between 1980 and 2021.' });
    }

    // Konversi thickness berdasarkan total_page
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
      release_year,
      price,
      total_page,
      thickness, // Simpan hasil konversi ke thickness
      category_id
    });

    res.json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PATCH/update a book
export const updateBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      const { title, description, image_url, release_year, price, total_page, category_id } = req.body;

      // Validasi release_year
      if (release_year && (release_year < 1980 || release_year > 2021)) {
        return res.status(400).json({ message: 'Invalid release year. It should be between 1980 and 2021.' });
      }

      // Konversi thickness berdasarkan total_page
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
        release_year,
        price,
        total_page,
        thickness, // Simpan hasil konversi ke thickness
        category_id,
      });
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE a book
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
