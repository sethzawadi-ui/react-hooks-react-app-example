import React from "react";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";

const App = () => {
  return (
    <div>
      <header>
        <h1>Now</h1>
      </header>

      <main>
        <ExampleComponent />
        <TestComponent />
      </main>
    </div>
  );
};

export default App;

