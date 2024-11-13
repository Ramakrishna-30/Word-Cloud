let wordCloud = [
    "Hello",
    "hii",
    "how",
    "what",
    "you",
    "yourself",
    "name",
    "victory",
    "food",
    "lovely",
    "beautiful",
    "written",
    "where",
    "who",
    "awesome",
  ];
  
  const wordsContainer = document.getElementById("wordsContainer");
  const addBtn = document.getElementById("addBtn");
  const userInput = document.getElementById("userInput");
  const errorMsg = document.getElementById("errorMsg");
  
  // Function to generate a random font size between 12px and 30px
  function getRandomFontSize() {
    return Math.floor(Math.random() * (30 - 12 + 1)) + 12;
  }
  
  // Function to create and display a word with random font size
  function displayWord(word) {
    const span = document.createElement("span");
    span.textContent = word;
    span.style.fontSize = `${getRandomFontSize()}px`;
    span.style.margin = "5px";
    wordsContainer.appendChild(span);
  }
  
  // Display initial words in the word cloud
  wordCloud.forEach(displayWord);
  
  addBtn.addEventListener("click", () => {
    const userWord = userInput.value.trim();
  
    if (userWord === "") {
      errorMsg.textContent = "Please enter a word!";
    } else {
      errorMsg.textContent = ""; // Clear error message
      displayWord(userWord);
      userInput.value = ""; // Clear input field
    }
  });
  