export const signUpUser = function (email, password, reTypedPassword) {
  if (!email || !password || !reTypedPassword)
    return alert("Fill all the fields");

  if (password !== reTypedPassword) return alert("Passwords are not the same");
  // The function will create a new user with the data you provided and now will return it
  const user = {
    email,
    password,
  };
  return user;
};

// But you see that signUpuser expect some values like email, password,and retypedPassword, so we should provide those values when passing the function
