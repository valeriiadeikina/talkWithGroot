const asking = document.querySelector(".chat-field");
const button = document.querySelector(".btn-send-message");
const input = document.querySelector(".text-field");
const chatingArea = document.querySelector(".chat-field");

button.addEventListener("click", addNewMessage);

input.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    addNewMessage();
  }
});

function addNewMessage() {
  const newMessage = document.createElement("div");
  newMessage.classList = "message-user message";

  const userImg = document.createElement("img");
  userImg.classList = "image-user";
  userImg.src = "./img/fox.jpg";
  userImg.style.width = "60px";
  userImg.style.height = "60px";

  const newInnetDiv = document.createElement("div");
  newInnetDiv.classList = "user";

  const newTitle = document.createElement("div");
  newTitle.classList = "title-user";
  newTitle.innerText = "User";

  const textMessage = document.createElement("span");
  textMessage.classList = "text";
  textMessage.innerText = input.value;

  newInnetDiv.append(newTitle, textMessage);
  newMessage.append(newInnetDiv, userImg);
  asking.append(newMessage);

  input.value = "";

  const grootMessage = document.createElement("div");
  grootMessage.classList = "message new-message-groot";

  const grootImg = document.createElement("img");
  grootImg.classList = "image-groot";
  grootImg.src = "./img/groot.png";
  grootImg.style.width = "60px";
  grootImg.style.height = "60px";

  const grootInnetDiv = document.createElement("div");
  grootInnetDiv.classList = "groot";
  
  const grootTypingInnetDiv = document.createElement("div");
  grootTypingInnetDiv.classList = "groot-typing";
  grootTypingInnetDiv.innerText = "Groot typing...";

  const grootTitle = document.createElement("div");
  grootTitle.classList = "title-groot groot-name";
  grootTitle.innerText = "Groot🌱";

  const textGroot = document.createElement("span");
  textGroot.classList = "text";
  const answers = ["Я есть Грут)", "Я есть Грут)", "Я есть Грут", "Я есть Грут","Я есть Грут?🤨", "Я есть Грут?","Я есть Грут!", "Я есть Грут, Я есть Грут.", "Я есть Грут😁", "Я есть Грут","Я есть Грут🤔", "Я есть Грут🛸😮", "Я есть Грут🤗", "Я есть Грут🥰", "Я есть Грут🎤🎶💃", "🤙🤙🤙"]
  textGroot.innerText = answers[Math.floor((Math.random()*answers.length))];

  grootInnetDiv.append(grootTitle, textGroot);
  grootMessage.append(grootImg, grootInnetDiv);
  asking.append(grootTypingInnetDiv);
  setTimeout(()=> asking.append(grootMessage), 2000);
  setTimeout(()=> grootTypingInnetDiv.remove(), 2000)
  

}

const observer = new MutationObserver(function(mutationsList, observer) {
  chatingArea.scrollTo({
    top: chatingArea.scrollHeight,
    behavior: 'smooth'
  });
});

observer.observe(chatingArea, { childList: true });