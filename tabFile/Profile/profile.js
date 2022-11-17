// console.log(localStorage.getItem('dataArray', JSON.stringify(dataArray)));

// localStorage.getItem('profileData', JSON.stringify(loginDetail));
var data = localStorage.getItem('profileData');
console.log(localStorage.getItem('profileData'));
// console.log(localStorage.getItem('dataArray'));
    // console.log(person)
//     var detail = localStorage.getItem('dataArray')
//     // console.log(detail)
//     var data = JSON.parse(detail);
//     console.log(data);
//     // var username = datauser;
//     // console.log(username)
//     for (var i = 0; i < data.length; i++) {
//         // console.log("hiii..");
//         console.log(data[i].password);
//         console.log(data[i].email);
//     document.getElementById("usernameDetail").innerHTML = data[i].user;
//     document.getElementById("emailDetail").innerHTML = data[i].email;
    
   
// }
        console.log(document.getElementById("usernameDetail").innerHTML =data.user);
        document.getElementById("emailDetail").innerHTML =data.email; 
        document.getElementById("usernameDetail").innerHTML =data.user;       

