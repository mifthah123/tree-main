import React, { useState, useLayoutEffect } from "react";
import "./styles.css";

import Tree from "./Tree/Tree";

const structure = [
  {
    uniqueId: "AddCategory3-q78",
    type: "folder",
    name: "Add category",
    files: [],
  },
];

export default function App() {
  let [data, setData] = useState(structure);

  const handleClick = (node) => {
    console.log(node);
  };
  const handleUpdate = (state) => {
    localStorage.setItem(
      "tree",
      JSON.stringify(state, function(key, value) {
        if (key === "parentNode" || key === "id") {
          return null;
        }
        return value;
      })
    );
  };

  useLayoutEffect(() => {
    try {
      let savedStructure = JSON.parse(localStorage.getItem("tree"));
      if (savedStructure) {
        setData(savedStructure);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="App">
      <h2>Folder Structure</h2>
      <Tree data={data} onUpdate={handleUpdate} onNodeClick={handleClick} />
    </div>
  );
}
