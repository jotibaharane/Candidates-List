import "./App.css";
import * as React from "react";
import List from "./Component/List";
import Add from "./Component/Add";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}
