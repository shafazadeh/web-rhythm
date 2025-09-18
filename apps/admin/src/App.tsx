import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@repo/ui";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      admin project
      <Button primary size="small" label="sas"></Button>
    </>
  );
}

export default App;
