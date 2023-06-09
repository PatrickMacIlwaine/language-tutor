import axios from 'axios';
import { useState } from 'react';
import prompting from '../prompting.json';
import classes from './Translate.module.css';

export default function Translate(props) {

  const langCode = prompting.languages[props.language].googleLangCode
  console.log(langCode);
  const [input, setInput] = useState("");
  const [tranlsation, setTranslation] = useState("");


const GoogleTranslateService = {
  translate: async (text, sourceLanguage, targetLanguage) => {
    const apiUrl = 'https://translation.googleapis.com/language/translate/v2';
    const params = {
      key: process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY,
      q: text,
      source: sourceLanguage,
      target: targetLanguage,
    };

    try {
      const response = await axios.get(apiUrl, { params });
      const translation = response.data.data.translations[0].translatedText;
      return translation;
    } catch (error) {
      console.error('Error translating text:', error);
      return null;
    }
  },
};

async function handleClick(){
  if (input === ""){
    return;
  }
  const newTranslation = await GoogleTranslateService.translate(input, langCode, 'en');
  setTranslation(newTranslation);

}

return (
  <div className={classes.main}>
    <h2 className={classes.header} >Quick Translate</h2>
    <input className={classes.inputBox}
      type="text"
      text={input}
      onChange={e => setInput(e.target.value)}/>
    <button className={classes.submitButton} onClick={handleClick}>Translate</button>
    <p>{tranlsation}</p>
  </div>
);
}

