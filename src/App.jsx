import React from "react";
import ReactDOM from "react-dom";
import Book from "./Book.jsx";

const App = () => {
  return (
    <div>
      <h1>React Bookstore</h1>
      <Book
        title="Straz! Straz!"
        author="Terry Pratchett"
        publicationDate="1989"
      />
      <Book
        title="Dwie wieze"
        author="J. R. R. Tolkien"
        publicationDate="1954"
      />
      <Book
        title="Komnata Tajemnic"
        author="J. K. Rowling"
        publicationDate="1998"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
