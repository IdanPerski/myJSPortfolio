const projectHeader = document.querySelectorAll(".project-header");
const projectPage = document.querySelectorAll(".project-page");
const projectSection = document.querySelector("#projectSection");
const backToMainPage = document.querySelectorAll(".back-to-main-page");
const contactSection = document.querySelector(".contact-section");

// Define function to show/hide elements
const displayAndUndisplay = (dispaly, undisplay) => {
  dispaly.classList.remove("d-none");
  undisplay.classList.add("d-none");
};

// Define function to hide all elements in a NodeList
function iterateThruNodeListAndUndisplay(nodeList) {
  nodeList.forEach((node) => {
    node.classList.contains("d-none") ? null : node.classList.add("d-none");
  });
}

// Add event listeners to "back to main page" buttons
backToMainPage.forEach((button) => {
  button.addEventListener("click", () => {
    iterateThruNodeListAndUndisplay(projectPage);
    projectSection.classList.add("d-none");
    projectSection.classList.remove("d-none");
  });
});

// Add event listeners to project headers
for (let i = 0; i < projectHeader.length; i++) {
  console.log(projectHeader[i]);
  projectHeader[i].addEventListener("click", () => {
    displayAndUndisplay(projectPage[i], projectSection);
    contactSection.classList.add("d-none");
  });
}

let messageArray = [];
const formBtn = document.querySelector("#sendBtn");
formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Get form input values and regex patterns for validation
  const nameInput = document.querySelector("#nameInput");
  const emailInput = document.querySelector("#emailInput");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonNumber = document.querySelector("#phonNumber");
  const phoneNumberRegex =
    /^\+?\d{1,3}[- ]?\(?\d{1,3}\)?[- ]?\d{3,4}[- ]?\d{3,4}$/;
  const textMessage = document.querySelector("#floatingTextarea");
  if (
    formValidation(emailRegex, emailInput, "invalid email address") ||
    formValidation(phoneNumberRegex, phonNumber, "invalid phone number")
  ) {
    return;
  }

  if (textMessage.value === "") {
    alert("Text Area is Empty");
    return;
  }

  const newMessage = {
    name: nameInput.value,
    email: emailInput.value,
    phonNumber: phonNumber.value,
    message: textMessage.value,
  };
  console.log(newMessage);
  messageArray.push(newMessage);
  console.log(messageArray);
});

const formValidation = (regex, input, textAlert) => {
  if (!regex.test(input.value) || input.value === "") {
    alert(textAlert);
    input.classList.add("border-danger");
    return true;
  } else {
    input.classList.remove("border-danger");
    return false;
  }
};
