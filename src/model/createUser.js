const createUser = function(email, password, reTypedPassword){
    // Checking if there is any empty field

    if(!email || !password || !reTypedPassword) return alert('Fill all the fields');

    // Else we create the user
    // by saying user = {email, password}, I am just saying user = {email: email, password: password}
    // i.e I am creating 2 new properties for that object user, but I assign to it the value of our email and password. We now return it so that the user can be used

    //Lets check it

    const user = {
        email,
        password
    }

    return user;
}

export default createUser;

// I forgot to export