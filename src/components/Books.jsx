import { getBooks } from "../data/Data";
import {Link} from "react-router-dom";

const books = getBooks();

export const Books = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
      <nav style={{ borderLeft: "solid 1px", padding: "1rem" }}>
        <input type="text" placeholder="جستجوی کتاب" />
        {books.map((book) => {
          return (
            <Link style={{display: "block", padding: "0.1rem 0"}} to={`/books/${book.number}`} key={book.number}>
              {book.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
