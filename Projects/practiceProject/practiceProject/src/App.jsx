import { useState } from "react";
import DataFetching from "./components/DataFetching";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return <div className="App">{true && <DataFetching></DataFetching>}</div>;
}

export default App;
