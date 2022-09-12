
// funcion para validar usuario/contraseña y habilitar inputs en caso de ser correcta//
function habilitar_edicion (username, password) {


var usuario = "asayago";
var contrasena = "$sayago22@";
var username = document.getElementById("inputUsername").value;
var password = document.getElementById("inputPassword").value;



if(username == usuario && password == contrasena){
    alert ("Welcome");
    
    return  habilitar_botones();
    
}

else {
  alert("Incorrect username or password !!");
  
}
   
}
//funcion para si se incia la sesion con usuario y contraseña correcta habilite los botones de edicion//
function habilitar_botones() {
    document.getElementsByClassName("bi-pencil-fill").style.display="block";
    document.getElementsByClassName("bi-x-circle-fill").style.display="block";
}


// funcion que hace que los botones de edicion se oculten //
//function deshabilitar_edicion (){
    //alert("See you soon!");
    //document.getElementsByClassName("bi-pencil-fill").style.display="none";
    //document.getElementsByClassName("bi-x-circle-fill").style.display="none";
//}//


// funcion que permite modificar o eliminar con el style=  block se muestra y con el style= none se oculta//
function habilitar_input(){
    
    document.getElementById("editor").style.display = "block";
}

