import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { speak } from './speak';
import prompting from './prompting.json';

const API_KEY = process.env.REACT_APP_API_KEY;



function ChatGPTComponent(props){

  const aiMessage = prompting.languages[props.language].aiMessage
  const langCode = prompting.languages[props.language].srLangCode


  const systemMessage = {
    "role": "system", 
    "content": `${aiMessage}`
  };

  const [input, setInput] = useState("Talk to me.");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([systemMessage]);
  const [lastMessage,setLastMessage] = useState("Hey I am your tutor");

  

  const handleSend = async () => {
    console.log(messages)
    setIsTyping(true);
    const newMessage = {
      "role": "user",
      "content": input
    };
    setMessages([...messages, newMessage]);
    await processMessageToChatGPT([...messages, newMessage]);
  };
  
  
  

  const processMessageToChatGPT = async (conversation) => {
    setLastMessage("*Thinking...*");
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": conversation
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((response) => {
      return response.json();
    }).then((data) => {
      setIsTyping(false);
      if (data.choices && data.choices.length > 0) {
        const aiMessage = {
          "role": "assistant",
          "content": data.choices[0].message.content
        };

        setMessages([...messages, aiMessage]);

        setLastMessage(aiMessage.content);

        speak(prompting.languages[props.language].voiceID,prompting.languages[props.language].langCode ,aiMessage.content, (url) => {
          const audio = new Audio(url);
          audio.play();
        }, (err) => {
          console.log("Error:", err);
        });
      }
    }).catch((error) => {
      console.error('Error:', error);
    });
  }


  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleRecordClick = () => {
    SpeechRecognition.startListening({ language: langCode });
  }

  const handleStopClick = () => {
    SpeechRecognition.stopListening();
    setInput(transcript);
  }

  
  return (
    <div className='App'>
      <div className='App-header'>
        <div className='inputArea'>
          <h2>{props.language} Tutor</h2>
          <input className="inputBox"
            type="text"
            value= {input}
            onChange={e => setInput(e.target.value)}
          />
          
          <button className='submitButton' onClick={handleSend}>
            Submit
          </button>
          <div>
            <div className='recordButtonsContainer'>
              <button className='recordButtons' onClick={handleRecordClick}>Record</button>
              <button className='recordButtons' onClick={handleStopClick}>Stop</button>
            </div>
          </div>
          <div>
          <p>{lastMessage}</p>
          </div>
        </div>
    </div>
    </div>
  );
};

export default ChatGPTComponent;
