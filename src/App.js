import './App.css';
import ChatGPT3Component from './ChatGPTComponent';
import { Route, Routes } from "react-router-dom";
import HomePage from './components/Pages/HomePage';
import LearningPage from './components/LearningPage';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element= {<HomePage/>}/>

        <Route path="/chat-Chinese" element= {<LearningPage language = 'Chinese'/>}/>
        <Route path="/chat-Spanish" element= {<LearningPage language = 'Spanish'/>}/>
        <Route path="/chat-French" element= {<LearningPage language = 'French'/>}/>
        <Route path="/chat-Arabic" element= {<LearningPage language = 'Arabic'/>}/>


    </Routes>
    </div>
  );
}

export default App;
