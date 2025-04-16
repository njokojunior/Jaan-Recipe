import createUser from "./src/model/createUser.js";
import displayLogin from "./src/view/auth.js";

const containerEl = document.querySelector(".container");

let isSignIn = true;

const displayScreen = function (receivedScreen) {
  containerEl.innerHTML = receivedScreen;
};

// Here we now want to check if you are click on the login or signup button
// So here we are saying that, when you  will click on the login btn or on the signup button, it is going to change the sign in value and will re-render the screen
const handleAuthButton = function () {
  isSignIn = !isSignIn;
  displayScreen(displayLogin(isSignIn));
};

const init = function () {
  displayScreen(displayLogin(isSignIn));
};

init();

// Now I will just show you something cool
// So you remember that initially there is nothing on the screen, i.e there is no element to select at the top apart from the container, now it is only after calling the init function that the elements will be accessible but now we are going to access the element by saying

document.addEventListener("click", function (e) {
  if (
    e.target.type === "button" &&
    e.target.parentElement.classList.contains("section-auth-controls-buttons")
  ) {
    handleAuthButton();
  }
});
