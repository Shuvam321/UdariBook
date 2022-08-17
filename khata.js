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
        if (r) {
            let mainBody = document.getElementById("container");
            let detail = document.createElement('div');
            detail.classList.add('detail');
            let customerDetail = document.createElement('div');
            customerDetail.innerHTML = customerdetail;
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
            window.alert("Please Don't Enter same name ")
        }
    }
    else {
        window.alert("Enter the Name");
    }
}