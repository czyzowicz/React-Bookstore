import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Add } from "./Add.jsx";
import { Inventory } from "./Inventory.jsx";
import { Router, Link } from "@reach/router";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://clockworkjava.pl/books.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <div>
      <Link to="">
        <h1>React Bookstore</h1>
      </Link>
      <Router>
        <Add books={books} setBooks={setBooks} path="/admin" />
        <Inventory books={books} path="/" />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
