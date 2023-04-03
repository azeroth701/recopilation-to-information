import react, { useState } from "react";

function Count() {
  const [Count, setCount] = useState(0);

  const [text, setText] = useState("el contador es" + Count);

  const handlebuttonClick = () => {
    setCount(Count + 1);
    setText("el contador es" + (Count + 1));
  };

  return (
    <div>
      <h1>{text}</h1>
      <button className="border-4 border-black" onClick= {()=>handlebuttonClick()}>aumentar contador </button>
    
    </div>
  );
}
export default Count;
