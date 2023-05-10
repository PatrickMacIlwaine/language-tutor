import ChatGPTComponent from "../ChatGPTComponent";
import Translate from "./Translate";



export default function LearningPage(props){



  return (
    <div>
      <div>
      <ChatGPTComponent language = {props.language}/>
      </div>

      <div>
        <Translate language = {props.language}/>
      </div>

    </div>
  ); 
}