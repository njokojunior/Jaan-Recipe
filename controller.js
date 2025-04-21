import { signUpUser } from "./src/model/userModal.js";
import displayLogin from "./src/view/authView.js";
import { landingView } from "./src/view/landingView.js";

const containerEl = document.querySelector(".container");
let inputEmail;
let inputPassword;
let inputConfirmPassword;

let isSignIn = true;
const users = []; //That will store a list of users
// users will contain objects {}

const displayScreen = (receivedScreen) => {
  containerEl.innerHTML = receivedScreen;
};

const handleAuthButton = () => {
  isSignIn = !isSignIn;
  displayScreen(displayLogin(isSignIn));
};

const handleSignIn = (email, password) => {
  // When you open your app for the first time, the users array is empty
  console.log(
    users.find((user) => user.email === email && user.password === password)
  );
  displayScreen(landingView());
  // Landing page view
};

// The handle signup will now call the signupUser in the usermodel.js file
const handleSignup = function (email, password, confirm_password) {
  // The return value will now be pushed in the users array
  const data = signUpUser(email, password, confirm_password);
  if (!data) return console.log("invalid data");

  // If data is valid
  // store data
  users.push(data); //data will be added at the end of our array

  localStorage.setItem("userdata", JSON.stringify([...users])); // we destructure the data (we spread the data)
};

const getInitialData = () => {
  // retrieve data from localStorage
  // The data you will get will  be a string not an object
  // To format the data to an object
  // We insert the data in our users array
  users.push(...JSON.parse(localStorage.getItem("userdata")));
  console.log(users);
};

// function that will run at the start of our program
const init = function () {
  displayScreen(displayLogin(isSignIn));
  getInitialData();
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
      handleSignIn(inputEmail.value, inputPassword.value);
      return;
    }
    //else the button will try to signup
    // and when you try to signup up, the data is passed to the handleSignup function
    else {
      handleSignup(
        inputEmail.value,
        inputPassword.value,
        inputConfirmPassword.value
      );
    }
  }
});
