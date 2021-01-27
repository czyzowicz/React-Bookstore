import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "./Add.jsx";
import { Inventory } from "./Inventory.jsx";
import { Router, Link } from "@reach/router";
import { ADD_BOOK } from "./store/reducer.js";

const App = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.reducer.books);

  useEffect(() => {
    fetch("https://clockworkjava.pl/books.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach((book) => {
          dispatch({ type: ADD_BOOK, payload: book });
        });
      });
  }, []);

  return (
    <div>
      <Link to="">
        <h1>React Bookstore</h1>
      </Link>
      <Router>
        <Add path="/admin" />
        <Inventory books={books} path="/" />
      </Router>
    </div>
  );
};

export default App;
