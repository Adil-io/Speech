const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const wmy = [
     'I am made by my creator Anheart',
     'Anheart Gave me life Sir',
     'Greetings sire Anheart developed me'
];

const ann = [
     'Your name is Adil But i would love to call you Anheart',
     'Adil One of the greatest Developers',
     'Adil! how can i forget you',
     'Your Name is Adil AKA Anheart'
];


const sname = [
     'Zeba! what a name'
]

const fname = [
     'Your name is Adil and Your Fathers name is A A Ansari',
];

const mname = [
     'Your name is Adil and Your Mothers name is Zeenat Parveen',
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
	console.log('voice is activated');
};

recognition.onresult = function(event){
	const current = event.resultIndex;
	const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message){
	const speech = new SpeechSynthesisUtterance();
    //const voices = window.speechSynthesis.getVoices();
    speech.text = 'Speak properly cant you talk like a normal human being';

    if(message.includes('who made you')){
    	const finalText = 
    	     wmy[Math.floor(Math.random() * wmy.length)];
    	speech.text = finalText;     
    }

    if(message.includes('what is my name')){
    	const finalText = 
    	     ann[Math.floor(Math.random() * ann.length)];
    	speech.text = finalText;     
    }

    if(message.includes('what is my father name')){
    	const finalText = 
    	     fname[0];
    	speech.text = finalText;     
    }
    
    if(message.includes('what is my mother name')){
    	const finalText = 
    	     mname[0];
    	speech.text = finalText;     
    }

    if(message.includes('what is my sister name')){
    	const finalText = 
    	     sname[0];
    	speech.text = finalText;     
    }

	speech.volume = 1;
	speech.rate = .55;
	speech.pitch = 2;
    //speech.voice = voices[2];
	window.speechSynthesis.speak(speech);
}