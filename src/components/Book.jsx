import { useParams } from "react-router-dom";
import { getBook } from "../data/Data";

export const Book = () => {
  const params = useParams();
  const book = getBook(parseInt(params.bookId));
  return (
    <div style={{display: "block", textAlign:"center"}}>
      <h3>Total Amount: {book.amount}</h3>
      <p>{book.name}</p>
      <p>Date of release: {book.due}</p>
      <button>Delete Book   </button>
    </div>
  );
};
