import React from "react";
import { useState } from 'react';

const Contador= ({inicial,stock}) => {
    
    const[contador, setContador] = useState(inicial)

   const handleClick = () => {
      if(contador < stock){
         setContador(contador + 1)
      } 
   }

   const handleClickResta = () => {
      if(contador > inicial){
         setContador(contador - 1)
      } 
   }
   
    return (
       <div className = "text-center">
          <button className="btn btn-outline-success" onClick = {handleClick}>
           + 
          </button>
            <p>{contador}</p>
          <button className = "btn btn-outline-success" onClick = {handleClickResta}>
           - 
          </button>
       </div>
    )
};

export default Contador;


