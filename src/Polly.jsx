import React, { useState } from "react";
import AWS from "aws-sdk";
import { v4 as uuidv4 } from 'uuid';

AWS.config.update({
  region: process.env.REACT_APP_AWS_REGION,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
});

const polly = new AWS.Polly();

function Polly(props) {
  const [audioSource, setAudioSource] = useState(null);

  const speak = (text) => {
    const params = {
      OutputFormat: "mp3",
      Text: text,
      VoiceId: "Zhiyu", // You can use different voices here
      LanguageCode: "cmn-CN",
      TextType: "text"
    };

    polly.synthesizeSpeech(params, (err, data) => {
      if (err) {
        console.log(err);
      } else if (data) {
        const uInt8Array = new Uint8Array(data.AudioStream);
        const blob = new Blob([uInt8Array.buffer], { type: 'audio/mpeg' });
        const url = URL.createObjectURL(blob);
        setAudioSource(url);
      }
    });
  }

  return (
    <div className="App">
      <button onClick={() => speak(`${props.textToSpeak}`)}>Speak</button>
      {audioSource && <audio src={audioSource} controls autoPlay />}
    </div>
  );
}

export default Polly;
