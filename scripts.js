
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
 //funcion que permite agregar el texto que se escribe en el input
    //recibe como parametro una variable que se llama valor
    function cambiar_texto(valor) {
        document.getElementById("texto_a_modificar").innerText = valor;
    }

    //detecta cuando se ha presionado la tecla enter
    //en el input con id igual a editor
    let textarea = document.getElementById("editor")
    textarea.addEventListener('keyup', (e) => {
        logMessage(`Key "${e.key}" relased [event: keyup]`);
        if (e.key == "Enter") {
            document.getElementById("editor").style.display = "none"
        }
    })

    //funcion que sirve para mostrar un mensaje
    // de log en la consola del navegador,
    // se lo accede mediante F12 o clic derecho inspeccionar ...
    function logMessage(message) {
        console.log(message + "<br>")
    };



