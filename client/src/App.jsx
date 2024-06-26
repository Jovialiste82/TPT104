import { useState } from "react";
import ExampleComponent from "./components/Example.jsx";

function App() {
  const [count, setCount] = useState(new Date().getFullYear());

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen space-y-4">
        <h1 className="text-3xl text-blue-900 font-bold underline">
          Hello {count}
        </h1>
        <ExampleComponent />
      </div>
    </>
  );
}

export default App;
