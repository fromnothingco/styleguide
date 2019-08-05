import React, { useState, useEffect } from "react";
import { render } from "react-dom";
const localDB = window.indexedDB.open("edition", 3);

const App = () => {
  const [articles, addArticles] = useState([]);
  useEffect(() => {}, []);
  return <h1>Hello</h1>;
};

render(<App />, document.getElementById("app"));
