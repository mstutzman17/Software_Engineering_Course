let password = "hello kitty";

if(password.length >= 6){
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password");
    } else {
        console.log("Password cannot contain spaces")
    }
}
else {
    console.log("Password cannot contain spaces");
}


// else {
//     console.log("Password is long enough");
// }