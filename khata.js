var data = [];
function addCustomer() {
    let customerdetail = document.getElementById("customerName").value;
    console.log(customerdetail);


    if (customerdetail) {
        let customerDetail = document.createElement('div');
        let a1 = 1;
        let b1 = 100;
        let random1 = a1 + (b1 - a1) * Math.random();
        // console.log(random1);
        var r = Math.round(random1);
        customerDetail.setAttribute('id', r);
        console.log(r);


        let mainBody = document.getElementById("container");
        let detail = document.createElement('div');
        detail.classList.add('detail');
        detail.setAttribute('id',data.length);
        let customerDiv = document.createElement('div');
        customerDiv.classList.add('customerDiv'); // name vala box jismai naam, serial number and amount aa rha hai
        customerDiv.setAttribute('id','customerDivCss');
        let numberDiv = document.createElement('div');
        numberDiv.classList.add('NumberDivCss');
        // numberDiv.setAttribute('id',data.length);
        console.log()
        let amountDiv = document.createElement('div');
        amountDiv.setAttribute('id','amountDivCss');
        // let customerDetail = document.createElement('div');
        data.push(customerdetail);
        let l = data.length;
        console.log(data);


        numberDiv.innerHTML = l;
        customerDetail.innerHTML = customerdetail;
        amountDiv.innerHTML = "Rs. 0";
        customerDetail.classList.add('customerdetailCss');
        let youGave = document.createElement('button');
        youGave.classList.add('youGaveCss');
        // youGave.setAttribute('click','youGaveFun()');
        // youGave.onclick = function() {youGaveFun();};
        youGave.addEventListener("click", youGaveFun);
        let youGot = document.createElement('button');
        youGot.classList.add('youGotCss');
        youGot.addEventListener("click", youGotFun);
        youGave.innerHTML = "YOU GAVE";
        youGot.innerHTML = "YOU GOT";



        
        // for(let i = 1; i < 100 ;i++){
        //     numberDiv.innerHTML = i;
        //     console.log(i);
        // }

        customerDiv.appendChild(numberDiv);
        customerDiv.appendChild(customerDetail);
        customerDiv.appendChild(amountDiv);
        // customerDiv.appendChild(youGave);
        // customerDiv.appendChild(youGot);
        customerDiv.addEventListener('click',() => {
           
            document.getElementById('navbar').style.display='none';
            // document.getElementById(data.length).style.display='none';
            // customerDiv.appendChild(customerHeading);
            customerDiv.appendChild(youGave);
            customerDiv.appendChild(youGot);

           

            // if (this.childNodes[1].style.visibility == "visible") {
            //     this.childNodes[1].style.visibility = "hidden";  //hide item
            //   } else {
            //     this.childNodes[1].style.visibility = "visible";  //show item
            //   }

            
        });
        detail.appendChild(customerDiv);

        mainBody.appendChild(detail);


        
        // for(var i=0; i<data.length;i++){
        //     if(data[i]==data[i-1]){
        //         alert("same data");
        //     }

        // }

        // else {
        //     window.alert("Please Don't Enter same name ")
        // }

    }
    else {
        window.alert("Enter the Name");
    }
}

function youGaveFun() {
    let mainBody = document.getElementById("container");
    let mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'gaDiv');
    let gavDiv = document.getElementById('gaDiv');
    let contentDiv = document.createElement('div');
    let heading = document.createElement('h3');
    heading.classList.add('headingGaveCss');
    let line = document.createElement('hr');
    line.classList.add('lineGaveCss');
    let inputDetail = document.createElement('input');
    inputDetail.setAttribute('id','inputGaveCss');
    // let inputData = document.getElementById("inputGaveCss").value;
    // console.log(inputData);
    inputDetail.setAttribute('type','number')
    inputDetail.setAttribute('placeholder','Enter Amount')
    let gaveNote = document.createElement('input');
    gaveNote.setAttribute('type','text');
    gaveNote.setAttribute('placeholder','NOTE');
    gaveNote.setAttribute('id','gaveNoteCss');
    heading.innerHTML = "You Gave Rs 0 to Me";
    heading.setAttribute('id','headingCss');
    console.log(heading);
    let gaveButton = document.createElement('button');
    gaveButton.setAttribute('id','buttonGaveCss');
    gaveButton.innerHTML= "Save";


    // gavDiv.appendChild(heading)
    contentDiv.appendChild(heading);
    contentDiv.appendChild(line)
    contentDiv.appendChild(gaveNote);
    contentDiv.appendChild(inputDetail);

    gaveButton.addEventListener('click',function(){
        // window.alert("I am shuvam");
        // document.getElementById('inputGaveCss').style.display ="none";
        // document.getElementById('buttonGaveCss').style.display='none';
        let inputData = document.getElementById('inputGaveCss').value;
        let gaveNoteData = document.getElementById('gaveNoteCss').value;
        let gaveData = document.createElement('div');
        gaveData.setAttribute('id','gaveDataCss');
        gaveData.innerHTML = gaveNoteData + "<br>" + inputData;
        console.log(gaveData);
        // console.log(inputData);
        if(inputData>0 && gaveNoteData){
            document.getElementById('inputGaveCss').style.display ="none";
             document.getElementById('buttonGaveCss').style.display='none';
             document.getElementById('gaveNoteCss').style.display ="none";
             document.getElementById('headingCss').style.display="none";
            contentDiv.appendChild(gaveData);
        }
        else{
            alert("Enter Valid Data");
        }
        
    })
    contentDiv.appendChild(gaveButton);
    mainContent.appendChild(contentDiv);

    mainBody.appendChild(mainContent);
    console.log(mainContent);
    console.log(contentDiv);
    // console.log(gavDiv)
    // mainContent.appendChild(contentDiv);
    // console.log(mainContent);

    // gavDiv.appendChild(contentDiv);
}

function youGotFun() {
    let mainBody = document.getElementById("container");
    let mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'gaDiv');
    let gavDiv = document.getElementById('gaDiv');
    let contentDiv = document.createElement('div');
    let heading = document.createElement('h3');
    heading.classList.add('headingGotCss');
    let line = document.createElement('hr');
    line.classList.add('lineGotCss');
    let inputDetail = document.createElement('input');
    inputDetail.setAttribute('id','inputGotCss');
    // let inputGotData = document.getElementById('inputGotCss').value;
    // console.log(inputGotData);
    // console.log(inputDetail.value);
    inputDetail.setAttribute('type','number');
    inputDetail.setAttribute('placeholder','Enter Amount');
    let gotNote = document.createElement('input');
    gotNote.setAttribute('type','text');
    gotNote.setAttribute('placeholder','NOTE');
    gotNote.setAttribute('id','gotNoteCss');
    heading.innerHTML = "You Got Rs 0 to Me";
    console.log(heading);
    heading.setAttribute('id','headingCss');
    let gotButton = document.createElement('button');
    gotButton.setAttribute('id','buttonGotCss');
    gotButton.innerHTML= "Save";

    
    
    // gavDiv.appendChild(heading)
    contentDiv.appendChild(heading);
    contentDiv.appendChild(line)
    contentDiv.appendChild(gotNote);
    contentDiv.appendChild(inputDetail);
    
    gotButton.addEventListener('click',function(){
        // alert("I am shuvam");
        let inputData = document.getElementById('inputGotCss').value;
        let gotData = document.createElement('div');
        let gotNoteData = document.getElementById('gotNoteCss').value;
            // gotDataData.setAttribute('id','gotdataCss')
        // let gotNoteData = document.createElement('div');
        gotData.setAttribute('id','gotDataCss');
        // document.getElementById('inputGotCss').style.display="none";
        // document.getElementById('buttonGotCss').style.display="none";
        gotData.innerHTML =  gotNoteData + '<br>' + inputData ;
        console.log(gotData);
        // console.log(inputData);
        if(inputData>0 && gotNoteData ){
            document.getElementById('inputGotCss').style.display="none";
            document.getElementById('buttonGotCss').style.display="none";
            document.getElementById('gotNoteCss').style.display="none";
            document.getElementById('headingCss').style.display="none";
            contentDiv.appendChild(gotData);
        }
        else{
            alert("Enter Valid Data");
        }
        
    })
    contentDiv.appendChild(gotButton);


    mainContent.appendChild(contentDiv);

    mainBody.appendChild(mainContent);
    console.log(mainContent);
    console.log(contentDiv);
    // console.log(gavDiv)
    // mainContent.appendChild(contentDiv);
    // console.log(mainContent);

    // gavDiv.appendChild(contentDiv);

   

}

 //geolocation 

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
    var loaderCode = document.getElementById('mainLoader');

    function myLoader(){
      loaderCode.style.display = "none";
    }
    
  
  function showPosition(position) {
    // x.innerHTML = "Latitude: " + position.coords.latitude + 
    // "<br>Longitude: " + position.coords.longitude;

    window.alert("Latitude: " + position.coords.latitude +  "\n" +
    "Longitude: " + position.coords.longitude);
    console.log("Latitude: " + position.coords.latitude + "\n" +
    "Longitude: " + position.coords.longitude);
  }

  function loginDirection(){

        window.location = "login_form/index.html";
        // window.location("./login_form/index.html")
  }

  function signupDirection(){
    window.location = "./signUp/index.html";
  }

  
// tabs script

//   function openCity(evt, cityName) {
//     var i, x, tablinks;
//     x = document.getElementsByClassName("city");
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablink");
//     for (i = 0; i < x.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.firstElementChild.className += " w3-border-red";
//   }