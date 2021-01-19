import React, { useState } from "react";
import useDropdown from "./useDropdown.jsx";

export const Add = () => {
  const [author, setAuthor] = useState("");

  const genres = ["Fantastyka", "Horror", "Kryminał"];
  const audiences = ["Dzieci", "Młodzież", "Dorośli"];

  const [genre, GenreDropdown] = useDropdown("", "Gatunek", genres);
  const [audience, AudienceDropdown] = useDropdown("", "Dla", audiences);

  return (
    <div>
      <form>
        <label htmlFor="author">
          Author
          <input
            id="author"
            value={author}
            placeholder="Author"
            onChange={(event) => setAuthor(event.target.value)}
          />
        </label>
        <br />
        <GenreDropdown />
        <br />
        <AudienceDropdown />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Add;
