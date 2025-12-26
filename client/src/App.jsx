import React from "react";
import Quiz from "./components/quiz";

function App() {
  return (
    <div
  style={{
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #2b2b45, #0f0f1a)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Quiz />
</div>

  );
}

export default App;
