function revert(){
    var x = document.getElementById("check")
    if(x.type=="password")x.type="text";
    else x.type="password";
}
function revert2(){
    var x = document.getElementById("check2")
    if(x.type=="password")x.type="text";
    else x.type="password";
}
function login(){
    document.getElementsByClassName("signup-form")[0].style.display= "none";
    document.getElementsByClassName("login-form")[0].style.display= "";
}
function signup(){
    document.getElementsByClassName("signup-form")[0].style.display= "";
    document.getElementsByClassName("login-form")[0].style.display= "none";
}