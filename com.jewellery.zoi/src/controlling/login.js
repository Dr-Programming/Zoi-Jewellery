function inputValidator(){
    var form = document.getElementById('login-form');
    var email = form.email.value;
    var password = form.password.value;

    if(email != 0 && password !=0){
        if(emailValidation(email) != true){
            alert("Kibndly enter valid email!");
        }
    }
}

function emailValidation(email){
    var indexOfAT = email.indexOf('@');
    if(email.includes('@') && email.includes('.com')  && (email.charAt(indexOfAT+1) != '.')){
        // alert("emmail: " + email+"\npassword : " + password);
        return true;
    }else{
        // alert("Kibndly enter valid email!");
        return false;
    }
}

function signUpValidation(){
    var form = document.getElementById('signup-form');
    var mobile = form.mobile.value;
    var email = form.email.value;
    if(mobile.length != 10){
        alert("Kibndly enter valid Mobile number!");
    }
    if(emailValidation(email) != true){
        alert("Kibndly enter valid email!");
    }
    var password = form.password.value;
    var re_password = form.REpassword.value;

    if(password != re_password){
        alert('Kindly check your password');
    }

    alert("Your account will be automatically activated once your indention has been completed, and the message for the same will be emailed.");
}