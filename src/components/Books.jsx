import { getBooks } from "../data/Data";
import { NavLink, Outlet } from "react-router-dom";

export const Books = () => {
  const books = getBooks();
  return (
    <div style={{ display: "flex", justifyContent: "right" }}>
      <nav
        style={{ borderLeft: "solid 1px", padding: "1rem", margin: "0 2rem" }}
      >
        <input
          type="text"
          placeholder="جستجوی کتاب"
          style={{ textAlign: "right", margin: "0 0 0.6rem 0" }}
        />
        {books.map((book) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "0.6rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/books/${book.number}`}
            key={book.number}
          >
            {book.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};
