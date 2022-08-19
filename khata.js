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
        // let customerDetail = document.createElement('div');
        data.push(customerdetail);
        console.log(data);



        customerDetail.innerHTML = customerdetail;
        customerDetail.classList.add('customerdetailCss')
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

        detail.append(customerDetail);
        detail.appendChild(youGave);
        detail.appendChild(youGot);

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
    heading.classList.add('headingCss');
    let line = document.createElement('hr');
    line.classList.add('lineCss');
    let inputDetail = document.createElement('input');
    inputDetail.setAttribute('id','inputCss');
    inputDetail.setAttribute('type','number')
    inputDetail.setAttribute('placeholder','Enter Amount')
    heading.innerHTML = "You Gave Rs 0 to Me";
    console.log(heading);

    // gavDiv.appendChild(heading)
    contentDiv.appendChild(heading);
    contentDiv.appendChild(line)
    contentDiv.appendChild(inputDetail);
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
    heading.innerHTML = "You Got me money";
    console.log(heading);

    // gavDiv.appendChild(heading)
    contentDiv.appendChild(heading);
    mainContent.appendChild(contentDiv);

    mainBody.appendChild(mainContent);
    console.log(mainContent);
    console.log(contentDiv);

}