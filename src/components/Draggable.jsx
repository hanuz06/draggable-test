import { useEffect } from "react";
import "../App.css";
import dragElement from "../helper/methods";

const Draggable = ({ children }) => {
  useEffect(() => {
    dragElement(document.getElementById("mydiv"));
  }, []);

  return (
    <div id='mydiv' className='box'>
      {children}
    </div>
  );
};

export default Draggable;
