import { useParams } from "react-router-dom";
import { getBook } from "../data/Data";

export const Book = () => {
  const params = useParams();
  const book = getBook(parseInt(params.bookId));

  if (book) {
    return (
      <main style={{ padding: "1rem" }}>
        <h2>Total Amount: {`${book.amount}$`}</h2>
        <p>{book.name}</p>
        <p>Date of release: {book.due}</p>
        <p>
          <button>Delete Book</button>
        </p>
      </main>
    );
  } else {
    return (
      <main style={{ padding: "1rem" }}>
        <h1>{`برو خدا روزیتو جای دیگه حواله کنه.)):`}</h1>
      </main>
    );
  }
};
