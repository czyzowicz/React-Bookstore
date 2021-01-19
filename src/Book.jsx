import React from "react";

export const Book = (props) => {
  return (
    <div>
      <hr />
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <h3>{props.publicationDate}</h3>
      <h3>{props.genre}</h3>
      <h3>{props.audience}</h3>
    </div>
  );
};

export default Book;
