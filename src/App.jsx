import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Add } from "./Add.jsx";
import { Inventory } from "./Inventory.jsx";
import { Router } from "@reach/router";

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
      <h1>React Bookstore</h1>
      <Router>
        <Add books={books} setBooks={setBooks} path="/admin" />
        <Inventory books={books} path="/" />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
