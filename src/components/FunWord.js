import React, { useRef, useEffect, useState } from 'react';

function FunWord(props) {

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const funword = props.name;
  let randomText = "";

  for (let i = 0; i < funword.length; i++) {
    randomText += letters.charAt(Math.floor(Math.random() * letters.length));
  }
    const h1Ref = useRef(null);
  let iterations = 0;



  useEffect(() => {
    const handleMouseOver = event => {
      const interval = setInterval(() => {
      event.target.innerText = event.target.innerText.split("")
      .map((letter, index) => {
        if (index < iterations && iterations > 0){
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
      if(iterations >= event.target.dataset.value.length) {
        clearInterval(interval);
        iterations = 0;
      }
      iterations += 1/4;

      }, 30);
    };
    if (h1Ref.current){
      h1Ref.current.addEventListener("mouseover", handleMouseOver);
    }
    return () => {
      if (h1Ref.current){
        h1Ref.current.removeEventListener("mouseover", handleMouseOver);
      }
    };

  }, []);



  
  return (

      <div>
        <h2 data-value ={funword} ref={h1Ref}>{randomText}</h2>
      </div>
  );
}

export default FunWord;
