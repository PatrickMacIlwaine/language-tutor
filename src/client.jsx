const axios = require('axios');

const text = 'Hello, world!';

axios.post('http://localhost:3000/synthesize', { text: text }, { responseType: 'arraybuffer' })
  .then(response => {
    const audioBlob = new Blob([response.data], { type: 'audio/mpeg' });
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    audio.play();
  });
