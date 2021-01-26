import React, { useState } from "react";
import useDropdown from "./useDropdown.jsx";
import { InputComponent } from "./InputComponent.jsx";

export const Add = ({ books, setBooks }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationDate, setPublicationDate] = useState("");

  const genres = ["Fantastyka", "Horror", "Kryminał"];
  const audiences = ["Dzieci", "Młodzież", "Dorośli"];

  const [genre, GenreDropdown] = useDropdown("", "Gatunek", genres);
  const [audience, AudienceDropdown] = useDropdown("", "Dla", audiences);

  const addBook = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const newBook = {
      author: author,
      title: title,
      publicationDate: publicationDate,
      genre: genre,
      audience: audience,
    };

    const newBooks = [...books, newBook];

    setBooks(newBooks);
  };

  return (
    <div>
      <form>
        <InputComponent label="Tytuł" state={title} setState={setTitle} />
        <InputComponent label="Autor" state={author} setState={setAuthor} />
        <InputComponent
          label="Publikacja"
          state={publicationDate}
          setState={setPublicationDate}
          type="number"
        />
        <br />
        <GenreDropdown />
        <br />
        <AudienceDropdown />
        <button onClick={(event) => addBook(event)}>Dodaj</button>
      </form>
    </div>
  );
};
