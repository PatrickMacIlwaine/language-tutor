import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import FunWord from "../FunWord";
import classes from './LandingPage.module.css';


export default function LandingPage(){

  const [password,setPassword] = useState("");
  const [username, setUsername] = useState("Admin")
  let navigate = useNavigate();


  function handleClick(){
    localStorage.setItem('isAllowed',password)
    let path = "/home"
    navigate(path);
  }


  return(

    <div className={classes.body}>
      <div className={classes.roundedPage}>
        <h1 className={classes.text}>Sign in : </h1>
        <form>
          <div className={classes.colSpan}>
            <label className={classes.label}>Name</label>
            <div>
            <input className={classes.input}
            type="text"
            defaultValue={username}
            onChange={e => setUsername(e.target.value)}/>
            </div>
          </div>

          <div className={classes.colSpan}>
            <label className={classes.label}>Password</label>
            <div>
            <input className={classes.input}
            type="text"
            text={password}
            onChange={e => setPassword(e.target.value)}/>
            </div>
          </div>


        <button className={classes.button} onClick={handleClick}>Submit</button>
        </form>
      </div>
    </div>
  );

}