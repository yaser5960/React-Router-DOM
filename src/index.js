import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import About from "./components/About";
import { Books } from "./components/Books";
import { Book } from "./components/Book";
import { NotFound } from "./noFound/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about" element={<About />}></Route>
          <Route path="/books" element={<Books />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <h2>کتابتو انتخاب کن... بدو!!! زود!!!</h2>
                </main>
              }
            />
            <Route path=":bookId" element={<Book />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
