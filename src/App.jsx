import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Add } from "./Add.jsx";
import { Inventory } from "./Inventory.jsx";

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
      <Add books={books} setBooks={setBooks} />
      <Inventory books={books} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
