import React, { Fragmen, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import chineseImg from '../images/chinaFlag.png';
import spanishImg from '../images/spanishFlag.png';
import arabicImg from '../images/arabicFlag.png';
import frenchImg from '../images/franceFlag.png';
import classes from './HomePage.module.css';
import FunWord from '../FunWord';



export default function HomePage(){

  function isAllowed(){
    if(localStorage.getItem("isAllowed") == process.env.REACT_APP_ADMIN_PASSWORD){
      console.log("access granted.");
      return true;
    }
  }
  let navigate = useNavigate();

  useEffect(() =>{
    if (!isAllowed()){
      navigate("/")
    }
  })






  function HandleClick(url){
    let path = url;
    navigate(path);
  }
  const [count,setCount] = useState(0);
  const [index,setIndex] = useState(count);

  const org = ["Language Practice！", "语 言 练 习!", "¡practica de lenguaje!", "ممارسة اللغة!"]

  const changeIndex = () =>{
    setCount(count+1);

    setIndex(count % 4);
  }
  

  return (
    <div >
      <div className={classes.main}>
        <header className= {classes.org}>
          <button className={classes.funwordButton} onClick={changeIndex}>
          <FunWord name = {org[index]} />
         </button>
        </header>
      <div className={classes.header}>
      
      <h2>Please select the lanuage you want to practice</h2>
      </div>

      <div classname = {classes.languagesGrid}>
         
          <button className={classes.language} onClick={HandleClick.bind(this, '/chat-Chinese')}>
            <img className={classes.flag}  src = {chineseImg} />
            <h2>Chinese</h2>
          </button>
      
          <button  className={classes.language} onClick={HandleClick.bind(this, '/chat-Spanish')}>
            <img className={classes.flag} src = {spanishImg} />
            <h2>Spanish</h2>
          </button>


          <button className={classes.language}  onClick={HandleClick.bind(this, '/chat-French')}>
            <img className={classes.flag} src = {frenchImg} />
            <h2>French</h2>
          </button>
 

          <button className = {classes.language} onClick={HandleClick.bind(this, '/chat-Arabic')}>
            <img className={classes.flag} src = {arabicImg} />
            <h2>Arabic</h2>
          </button>
    
      
        </div>
      
      </div>
    </div>
  );
}