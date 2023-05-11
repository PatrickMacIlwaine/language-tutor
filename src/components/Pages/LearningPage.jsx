import ChatGPTComponent from "../../ChatGPTComponent";
import Translate from "../Translate";
import classes from "./LearningPage.module.css";



export default function LearningPage(props){



  return (
    <div className={classes.Page}>
      <div className={classes.leftSide}>
      <ChatGPTComponent language = {props.language}/>
      </div>

      <div className={classes.rightSide}>
        <Translate language = {props.language}/>
      </div>

    </div>
  ); 
}