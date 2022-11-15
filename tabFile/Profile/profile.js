// console.log(localStorage.getItem('dataArray', JSON.stringify(dataArray)));


console.log(localStorage.getItem('dataArray'));
    // console.log(person)
    var detail = localStorage.getItem('dataArray')
    // console.log(detail)
    var data = JSON.parse(detail);
    console.log(data);
    // var username = datauser;
    // console.log(username)
    for (var i = 0; i < data.length; i++) {
        // console.log("hiii..");
        console.log(data[i].password);
        console.log(data[i].email);
    document.getElementById("usernameDetail").innerHTML = data[i].user;
    document.getElementById("emailDetail").innerHTML = data[i].email;
    
   
}
        

