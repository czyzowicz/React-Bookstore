import React from "react";
import ReactDOM from "react-dom";
import { Book } from "./Book.jsx";
import { Add } from "./Add.jsx";

const App = () => {
  return (
    <div>
      <h1>React Bookstore</h1>
      <Add />
      <Book
        title="Straz! Straz!"
        author="Terry Pratchett"
        publicationDate="1989"
        genre="Fantastyka"
        audience="Młodzież"
      />
      <Book
        title="Dwie wieze"
        author="J. R. R. Tolkien"
        publicationDate="1954"
        genre="Fantastyka"
        audience="Młodzież"
      />
      <Book
        title="Komnata Tajemnic"
        author="J. K. Rowling"
        publicationDate="1998"
        genre="Fantastyka"
        audience="Młodzież"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
