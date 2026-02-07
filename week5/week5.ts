import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const app = express();
app.use(express.json());

const swaggerDocument = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
}

let books: Book[] = [
  { id: 1, title: "Atomic Habit", author: "James Clear", year: 2018 },
  { id: 2, title: "Seporsi Mie Ayam Untuk Dimakan", author: "Brian Khrisna", year: 2025 }
];

app.get("/books", (req: Request, res: Response) => {
  res.json(books);
});

app.post("/books", (req: Request, res: Response) => {
  const { title, author, year } = req.body;

  if (!title || !year) {
    return res.status(400).json({ message: "title dan year wajib diisi" });
  }

  const newBook: Book = {
    id: books.length + 1,
    title,
    author,
    year: Number(year)
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

app.put("/books/:bookId", (req: Request, res: Response) => {
  const id = Number(req.params.bookId);
  const { title, author, year } = req.body;

  const book = books.find(b => b.id === id);
  if (!book) {
    return res.status(404).json({ message: "Buku tidak ditemukan" });
  }

  if (title) book.title = title;
  if (author) book.author = author;
  if (year) book.year = Number(year);

  res.json(book);
});

app.delete("/books/:bookId", (req: Request, res: Response) => {
  const id = Number(req.params.bookId);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Buku tidak ditemukan" });
  }

  books.splice(index, 1);
  res.json({ message: "Buku berhasil dihapus" });
});

app.get("/books/search", (req: Request, res: Response) => {
  const title = req.query.title as string;

  if (!title) {
    return res.status(400).json({ message: "query title wajib diisi" });
  }

  const result = books.filter(b =>
    b.title.toLowerCase().includes(title.toLowerCase())
  );

  res.json(result);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
  console.log("Swagger UI on http://localhost:3000/api-docs");
});
