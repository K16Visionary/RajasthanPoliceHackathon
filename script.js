const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
  // Create a chat <li> element with passed message and className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", `${className}`);
  let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi; // return chat <li> element
};

const predefinedOptions = {
    "hi": ["Hello! How can I assist you today? Type 1 to learn about Cyber Crime. Type 2 if you are a victim of cyber crime"],
    "1": ["Go to the link - https://www.cybercrime.gov.in to learn about cyber crime"],
    "2": ["Select an option below and type the number according to that:\n" +
          "a = Financial Crime\n" +
          "b = Cyber Crime\n" +
          "c = Physical Crime\n" +
          "d = Sexual Harassment\n" +
          "e = Fraud Crime"],
    "bye": ["Goodbye! Have a great day!", "See you later!", "Take care!"],
    // Add more predefined options as needed
  };

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Remove leading and trailing whitespace
    if (!userMessage) return;
  
    chatbox.appendChild(createChatLi(userMessage, "outgoing")); // Display the user's message
  
    const options = predefinedOptions[userMessage.toLowerCase()]; // Convert user's message to lowercase for comparison
    if (options) {
      // If the user's message has predefined options, display them
      options.forEach((option) => {
        chatbox.appendChild(createChatLi(option, "incoming"));
      });
    } else {
      // If the user's message doesn't have predefined options, display a default response
      const defaultMessage = "I'm sorry, I don't understand. Can you please rephrase your message?";
      chatbox.appendChild(createChatLi(defaultMessage, "incoming"));
    }
  
    chatbox.scrollTo(0, chatbox.scrollHeight);
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;
  };

chatInput.addEventListener("input", () => {
  // Adjust the height of the input textarea based on its content
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  // If Enter key is pressed without Shift key and the window
  // width is greater than 800px, handle the chat
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));s