document.getElementById('contra').onmousedown=function(){
document.getElementById('password').type = "text";
};
document.getElementById('contra').onmouseup=function(){
    document.getElementById('password').type = "password";
};
document.getElementById('btn-borrar').onclick=function(){
    document.getElementById('user').value="";
    document.getElementById('password').value = "";
};
