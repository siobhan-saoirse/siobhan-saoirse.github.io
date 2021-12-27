importScripts('/js/lib/speakjs/speakClient.js');

onmessage = function(event) {
  postMessage(generateSpeech(event.data.text, event.data.args));
};

