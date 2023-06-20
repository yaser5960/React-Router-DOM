import { Link } from "react-router-dom";

export default function About() {
  return (
    <div style={{ padding: "1rem 0" }}>
      <h2>بیا درباره ما بخونش</h2>
      <input type="text" />
      <Link to="/about" style={{display: "block"}}>شلام وچه خوجل</Link>
    </div>
  );
}
