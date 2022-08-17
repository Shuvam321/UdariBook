function addCustomer(){
    let customerdetail = document.getElementById("customerName").value;
    console.log(customerdetail);
    if(customerdetail){
        let a1 = 1;
        let b1 = 100;
        let random1 = a1 + (b1-a1)*Math.random();
        console.log(random1);
        let mainBody = document.getElementById("container");
    let detail = document.createElement('div');
    detail.classList.add('detail');
    let customerDetail = document.createElement('div');
    customerDetail.innerHTML = customerdetail;
    customerDetail.setAttribute('id',Math.round(random1));
    customerDetail.classList.add('customerdetailCss')
    let youGave = document.createElement('button');
    youGave.classList.add('youGaveCss');
    let youGot = document.createElement('button');
    youGot.classList.add('youGotCss');
    youGave.innerHTML = "YOU GAVE";
    youGot.innerHTML = "YOU GOT";

    detail.append(customerDetail);
    detail.appendChild(youGave);
    detail.appendChild(youGot);

    mainBody.appendChild(detail);
    }
    else{
        window.alert("Enter the Name");
    }
}