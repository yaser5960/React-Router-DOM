import { getBooks } from "../data/Data";
import { Link, Outlet } from "react-router-dom";

export const Books = () => {
  const books = getBooks();
  return (
    <div style={{ display: "flex", justifyContent: "right"}}>
      <nav style={{ borderLeft: "solid 1px", padding: "1rem", margin: "0 2rem" }}>
        <input
          type="text"
          placeholder="جستجوی کتاب"
          style={{ textAlign: "right", margin: "0 0 0.6rem 0" }}
        />
        {books.map((book) => (
          <Link
            style={{ display: "block", padding: "0.2rem 0" }}
            to={`/books/${book.number}`}
            key={book.number}
          >
            {book.name}
          </Link>
        ))}
      </nav>
      <Outlet/>
    </div>
  );
};
