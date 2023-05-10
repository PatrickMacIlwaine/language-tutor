import AWS from "aws-sdk";

AWS.config.update({
  region: process.env.REACT_APP_AWS_REGION,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
});

const polly = new AWS.Polly();

export function speak(voiceID, langCode, text, onSuccess, onError) {
  const params = {
    OutputFormat: "mp3",
    Text: text,
    VoiceId: voiceID, 
    LanguageCode: langCode,
    TextType: "text"
  };

  polly.synthesizeSpeech(params, (err, data) => {
    if (err) {
      onError && onError(err);
    } else if (data) {
      const uInt8Array = new Uint8Array(data.AudioStream);
      const blob = new Blob([uInt8Array.buffer], { type: 'audio/mpeg' });
      const url = URL.createObjectURL(blob);
      onSuccess && onSuccess(url);
    }
  });
}
