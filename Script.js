let loginUsername = document.querySelector(`#username`);
let loginEmailid = document.querySelector(`#email`);
let loginPassword = document.querySelector(`#password`);
let conformPassword = document.querySelector(`#conformpassword`);

function validateForm() {
    if (loginUsername.value === `` || loginEmailid.value === ``){
        alert(`Username and Emailid cannot be empty`);
        return false;
    }   else if (loginPassword.value.length<5) {
        alert(`Password must contain atleast 6 letters`);
        return false;
    } else if (loginPassword.value === conformPassword.value){
        alert(`Registration was successfully completed!`);
        return true;
    } else {
        alert(`Password doesn't match`);
        return false;
    }
}
 