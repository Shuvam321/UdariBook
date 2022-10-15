var dataArray = [];

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
        'email': email
    };

    //  dataArray.push(person);
      dataArray.push(person);
    //  console.log(signupDetail);
    console.log(dataArray);

    // dataArray.push({
    //     'user': user,
    //     'password': password,
    //     'repass': repass,
    //     'email': email
    // })

    // console.log(dataArray);

    //  localStorage.setItem('dataArray', JSON.stringify(signupDetail));
    console.log(localStorage.setItem('dataArray', JSON.stringify(dataArray)));
    // console.log(localStorage.getItem('dataArray', JSON.stringify(dataArray)));
    // console.log(person.password);
    if(password == repass){
     window.location = "../login_form/index.html";   
    console.log(person);

    }
    else{
        alert("Please check password and repassword");
    }

}



function myLoader(){
    var loaderCode = document.getElementById('mainLoader').style.display='none';
//   loaderCode.style.display = "none";
}


