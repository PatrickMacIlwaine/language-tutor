import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import FunWord from "../FunWord";
import classes from './LandingPage.module.css';


export default function LandingPage(){

  const [input,setInput] = useState("");
  let navigate = useNavigate();


  function handleClick(){
    localStorage.setItem('isAllowed',input)
    let path = "/home"
    navigate(path);
    
  }


  return(
    <div className={classes.body}>
      <h1 className={classes.text}>ADMIN PASSWORD</h1>
      <div>
      <input className={classes.input}
      type="text"
      text={input}
      onChange={e => setInput(e.target.value)}/>
    <button className={classes.button} onClick={handleClick}>Submit</button>
    </div>
    </div>
  );

}