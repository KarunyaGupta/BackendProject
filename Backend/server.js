import express from 'express';
import cors from 'cors';
import { nanoid } from 'nanoid';

const app = express();
app.use(cors());
app.use(express.json());

// Static Data
const jokes = [
  "Why don't programmers like nature? It has too many bugs.",
  "What do you call a bear with no teeth? A gummy bear!",
  "Why don't eggs tell jokes? They'd crack up!"
];

const recipes = [
  { name: "Pasta Carbonara", category: "Italian", time: 30, difficulty: "Medium" },
  { name: "Chicken Stir Fry", category: "Asian", time: 25, difficulty: "Easy" },
  { name: "Beef Wellington", category: "British", time: 120, difficulty: "Hard" }
];

const movies = [
  { title: "The Matrix", genre: "Sci-Fi", year: 1999, description: "A computer programmer discovers a mysterious world." },
  { title: "Inception", genre: "Sci-Fi", year: 2010, description: "A thief enters dreams to steal secrets." },
  { title: "The Shawshank Redemption", genre: "Drama", year: 1994, description: "A banker's tale of life in prison." }
];

const books = [
  { title: "1984", genre: "Dystopian", year: 1949, description: "A vision of totalitarian future." },
  { title: "The Hobbit", genre: "Fantasy", year: 1937, description: "An unlikely hero's journey." },
  { title: "Pride and Prejudice", genre: "Romance", year: 1813, description: "A classic tale of love and misunderstanding." }
];

const facts = [
  "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old.",
  "The first oranges weren't orange; they were green.",
  "A day on Venus is longer than its year."
];

const activities = [
  "Learn a new programming language",
  "Start a garden",
  "Try cooking a new recipe",
  "Write a short story"
];

const names = [
  "Alexander Thompson",
  "Isabella Martinez",
  "Ethan Williams",
  "Sophia Anderson"
];

// API Routes
app.get('/api/random-code', (req, res) => {
  const code = nanoid(10);
  res.json({ code });
});

app.get('/api/random-color', (req, res) => {
  const color = '#' + Math.floor(Math.random()*16777215).toString(16);
  res.json({ color });
});

app.get('/api/random-quote', (req, res) => {
  const quotes = [
    "Life is what happens while you're busy making other plans.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success is not final, failure is not fatal.",
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote });
});

app.get('/api/random-joke', (req, res) => {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json({ joke });
});

app.get('/api/random-recipe', (req, res) => {
  const recipe = recipes[Math.floor(Math.random() * recipes.length)];
  res.json(recipe);
});

app.get('/api/random-movie', (req, res) => {
  const movie = movies[Math.floor(Math.random() * movies.length)];
  res.json(movie);
});

app.get('/api/random-book', (req, res) => {
  const book = books[Math.floor(Math.random() * books.length)];
  res.json(book);
});

app.get('/api/random-fact', (req, res) => {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  res.json({ fact });
});

app.get('/api/random-activity', (req, res) => {
  const activity = activities[Math.floor(Math.random() * activities.length)];
  res.json({ activity });
});

app.get('/api/random-name', (req, res) => {
  const name = names[Math.floor(Math.random() * names.length)];
  res.json({ name });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
