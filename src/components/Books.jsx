import React from "react";
import { useEffect, useState } from "react";
import { fetchBooks } from "../api/ajaxHelper";
import { useNavigate } from "react-router-dom";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [searchBook, setSearchBook] = useState("");
  const [storedBook, setStoredBook] = useState([]);
  const navigate = useNavigate();
  console.log(books);

  const filteredBooks = storedBook.filter((book) => {
    return book.title.toLowerCase().includes(searchBook.toLowerCase());
  });

  async function getBooks() {
    try {
      const allBooks = await fetchBooks();
      setBooks(allBooks);
      setStoredBook(allBooks);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <div className="page-container">
        <div className="search-bar">
          <input
            class="fa-sharp fa-solid fa-magnifying-glass"
            type="text"
            placeholder="Search our Library"
            value={searchBook}
            onChange={(e) => {
              setSearchBook(e.target.value.toLowerCase());
            }}
          />
        </div>

        <div className="books-title">
          <h2>Our Library:</h2>
        </div>
        <div className="books-container">
          {filteredBooks.map((book) => (
            <div className="book-card" key={book.id}>
              <h3>{book.title}</h3>
              <img src={book.coverimage} alt={book.title} />
              <p>{book.author}</p>
              <p>{book.description}</p>
              <button
                className="button"
                onClick={() => {
                  navigate(`/books/${book.id}`);
                }}
              >
                Check Availability
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
