let startButton = document.querySelector('.start-button');
let loadingAnimetion = document.querySelector('.loading-container');
let dialogs = document.querySelector('.dialog');

startButton.addEventListener('click', () => {
    startButton.classList.add('hidden');
    loadingAnimetion.style.display = 'flex';

    setTimeout(() => {
        loadingAnimetion.style.display = 'none';
        dialogs.style.display = 'grid';
      }, 2000);
})
var messages = [
  "Text1",
  "Text2",
  "Text3",
  "Text3",
  "Text3",
  "Text3",
  "Text3",
  "Text3",
  "Text3",
  "Text3"
];

var currentMessageIndex = 0;
var currentCharacterIndex = 0;
var storyContainer = document.getElementById('story-text');
var nextButton = document.getElementById('next-button');
var LactosePic2 = document.getElementById('Pic');
var imgCollection = document.getElementById('image');
var imgDialog = document.getElementById('Allimage')
function showNextCharacter() {
  var currentMessage = messages[currentMessageIndex];
  
  if (currentCharacterIndex < currentMessage.length) {
    storyContainer.textContent += currentMessage[currentCharacterIndex];
    currentCharacterIndex++;
    setTimeout(showNextCharacter, 100); // Interval between showing each character
  } else {
    currentCharacterIndex = 0;
    currentMessageIndex++;
    
    if (currentMessageIndex === messages.length) {
      nextButton.style.display = 'none'; // Hide the "Next" button
      imgCollection.style.display = 'grid';
    } else {
      nextButton.style.display = 'grid'; // Show the "Next" button
    }
    if (currentMessageIndex === 7){
      LactosePic2.style.background = 'url(/Img/Lac2Re.png) center no-repeat';
      LactosePic2.style.width = '100%';
      LactosePic2.style.height = '100%';
      LactosePic2.style.backgroundSize = 'cover';
    }
    if (currentMessageIndex === messages.length){
      imgCollection.style.display = 'grid';
    }
  }
}

function showNextMessage() {
  storyContainer.textContent = ''; // Clear previous message
  nextButton.style.display = 'none'; // Hide the "Next" button
  showNextCharacter();
}

nextButton.addEventListener('click', showNextMessage);

imgCollection.addEventListener('click', () => {
  storyContainer.textContent = '';
  imgDialog.style.display = 'flex';
  imgCollection.style.display = 'none'
  //imgDialog.style.animation = 'fadeIn 1s ease-in-out forwards;';
})
