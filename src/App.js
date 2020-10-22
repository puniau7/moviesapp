import React from "react";
import "./App.css";

// Components
import Header from "./Components/Header";
import MoviesContainer from "./Components/MoviesContainer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MoviesContainer></MoviesContainer>
    </div>
  );
}

export default App;
