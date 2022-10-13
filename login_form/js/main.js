
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

//my JS

function logIn(){
    var loginEmail = document.getElementById('loginEmail').value;
    var loginPsw =  document.getElementById('loginPasssword').value;
    console.log(loginEmail);
    console.log(loginPsw);
    
    
    // if(loginEmail == "kshuvam360@gmail.com" && loginPsw == "12345" ){
    //     window.location = "../index.html";
    // }
    // else{
    //     alert("invalide data")
    // }

    console.log(localStorage.getItem('person'));
    // console.log(person)
    var detail = localStorage.getItem('person')

    var data =  JSON.parse(detail);
    console.log(data);
    console.log(typeof(data.password))
    // console.log(typeof(parseInt(data.password));
    var num = parseInt(data.password);
    console.log(typeof(num));

    // if(loginEmail == data.email && loginPsw == data.pass){
    //     window.location = "../index.html";

    // }

    // else{
    //     alert("Enter valid data")
    // }
    if(loginEmail === data.email && parseInt(loginPsw) === parseInt(data.password)){
        window.location = "../index.html";
    }
    else{
        alert("Enter valid data");
    }
    
}