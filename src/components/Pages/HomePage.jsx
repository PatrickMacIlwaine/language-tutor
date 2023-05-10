import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import chineseImg from '../images/chineseTeacher.jpeg';
import spanishImg from '../images/spanishImg.jpeg';
import arabicImg from '../images/ArabicIMG.jpeg';
import frenchImg from '../images/FrenchIMG.jpeg';





export default function HomePage(){
  let navigate = useNavigate();
  function HandleClick(url){
    let path = url;
    navigate(path);
  
  }
  

  return (
    <div>
      <div className="App2">
        <header className="App-header">
        <h2>Language Tutor!</h2>
        </header>

      <h2>Please select the lanuage you want to practice</h2>

      <div classname = 'languagesGrid'>
        <div className= 'item'>
          <button onClick={HandleClick.bind(this, '/chat-Chinese')}>
            <h2>Chinese</h2>
            <img src = {chineseImg} className='img' />
          </button>
        </div>
        <div className= 'item'>
          <button onClick={HandleClick.bind(this, '/chat-Spanish')}>
            <h2>Spanish</h2>
            <img src = {spanishImg} className='img'/>
          </button>
        </div>
        <div className= 'item'>
          <button onClick={HandleClick.bind(this, '/chat-French')}>
            <h2>French</h2>
            <img src = {frenchImg}className='img' />
          </button>
        </div>
        <div className= 'item'>
          <button onClick={HandleClick.bind(this, '/chat-Arabic')}>
            <h2>Arabic</h2>
            <img src = {arabicImg}className='img' />
          </button>
        </div>
      
        </div>
      
      </div>
    </div>
  );
}