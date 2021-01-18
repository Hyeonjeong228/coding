const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const answer = document.querySelector('.answer');

const greetings = ['Im good you, little piece of love', 'Tired', 'leave me alone'];
const colour = ['red', 'yellow', 'blue'];
const subject = ['math', 'science', 'language', 'literature'];
const pet = ['Banny', 'Kong Doo', 'Mooney', 'Sa tto'];
const cook = ['Kim bap', 'Pasta', 'Lasagna', 'Tomato soup'];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log('voice is activated, you can to microphone');
};

recognition.onresult = function(event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;

  content.innerHTML = "<p>" + transcript + "</p>";

  readOutLoud(transcript);
};

btn.addEventListener('click', () => {
  recognition.start();
});

function readOutLoud(message) {

  const speech = new SpeechSynthesisUtterance();

  speech.text = 'i dont know what you said';

  if (message.includes('how are you')) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  }

  if (message.includes('colour')) {
    const finalText = colour[Math.floor(Math.random() * colour.length)];
    speech.text = finalText;
  }

  if (message.includes('subject')) {
    const finalText = subject[Math.floor(Math.random() * subject.length)];
    speech.text = finalText;
  }

  if (message.includes('pet')) {
    const finalText = pet[Math.floor(Math.random() * subject.length)];
    speech.text = finalText;
  }

  if (message.includes('cook')) {
    const finalText = cook[Math.floor(Math.random() * subject.length)];
    speech.text = finalText;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
  answer.innerHTML = "<p>" + speech.text + "</p>";
}
