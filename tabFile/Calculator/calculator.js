function equal(){
    if (cal.display.value == ""){
      var eq = "";
    }
    else{
      var eq = eval(cal.display.value);
    }
    cal.display.value = eq;
  }