
function signUp() {
    var user = document.getElementById('user').value;
    console.log(user);
    var password = document.getElementById('pass').value;
    console.log(pass);
    var repass = document.getElementById('repass').value;
    console.log(repass);
    var email = document.getElementById('personalEmail').value;
    console.log(email);
    // console.log(psw);

    var person = { 
    'user': user, 
    'password': password, 
    'repass': repass, 
    'email': email };

    // console.log(person.password);
    if(password == repass){
    window.location = "../login_form/index.html";   
    console.log(person);
    localStorage.setItem('person', JSON.stringify(person));
    
    }
    else{
        alert("Please check password and repassword");
    }

};


