import React from "react";
import Hello from "./Hello";
import "./App.css";
import Wrapper from "./Wrapper";

function App() {
  return (
    <Wrapper>
      <Hello color="pink" />
      <Hello name="react" color="red" />
    </Wrapper>
  );
}

export default App;
