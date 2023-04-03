import "./App.css";
import react, { usestate } from "react";
import Count from "./components/Count";
import Buttons from "./components/Buttons";



 function app() {
  return (
    <div className="grid grid-cols-2 gap-4 place-content-center h-48">
      <Count></Count>
      <Buttons>click me</Buttons>


    </div>
  );
}

 
export default app;