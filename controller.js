import { signUpUser } from "./src/model/userModal.js";
import displayLogin from "./src/view/auth.js";

const containerEl = document.querySelector(".container");
let inputEmail;
let inputPassword;
let inputConfirmPassword;

let isSignIn = true;
const users = []; //Initially the array is empty

const displayScreen = function (receivedScreen) {
  containerEl.innerHTML = receivedScreen;
};

const handleAuthButton = function () {
  isSignIn = !isSignIn;
  displayScreen(displayLogin(isSignIn));
};

// The handle signup will now call the signupUser in the usermodel.js file
const handleSignup = function (email, password, confirm_password) {
  // The return value will now be pushed in the users array
  users.push(signUpUser(email, password, confirm_password));
  console.log(users); // to preview the array
};

const init = function () {
  displayScreen(displayLogin(isSignIn));
};

init();

document.addEventListener("click", function (e) {
  // This first button represent the signin and signup button that will display the view you want to use
  if (
    e.target.type === "button" &&
    e.target.parentElement.classList.contains("section-auth-controls-buttons")
  ) {
    e.preventDefault();
    handleAuthButton();
  }

  //This button represent the one that will submit either the login or signup form, depending on the variable is signIn
  if (e.target.id === "auth-button") {
    e.preventDefault();

    inputEmail = document.getElementById("email");
    inputPassword = document.getElementById("password");
    inputConfirmPassword = document.getElementById("confirm_password");

    // if user is on sigIn view the the button will attempt to sign in
    if (isSignIn) {
      e.preventDefault();
      console.log("User is trying to signIn");
      return;
    }
    //else the button will try to signup
    // and when you try to signup up, the data is passed to the handleSignup function
    else {
      console.log(
        inputEmail.value,
        inputPassword.value,
        inputConfirmPassword.value
      );
      handleSignup(
        inputEmail.value,
        inputPassword.value,
        inputConfirmPassword.value
      );
      console.log("signUp successful");
    }
  }
});
