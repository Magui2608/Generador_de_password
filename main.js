// Declaración de las variables
let cantidad = document.getElementById("cantidad");
let botonGenerar = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");
let botonLimpiar = document.getElementById("limpiar");

//Declaración de una variable para indicar los caracteres permitidos en la creación de la contraseña
const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

// Función para generar una contraseña de forma aleatoria entre 8 y 15 caracteres
function generar() {

    let numeroDigitado = parseInt(cantidad.value); //Conversión del dato ingresado a número

    if ((numeroDigitado < 8) || (numeroDigitado > 15)) {
        alert("La cantidad de caracteres debe ser entre 8 y 15. Ingrese un nuevo número por favor.");
        return; // Detiene la ejecución si no cumple con la condición
    }

    let password = '';

    // Ciclo for que genera una contraseña aleatoria con la cantdad de caracteres solicitada por el usuario
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        
        password += caracterAleatorio;

    }

    contrasena.value = password;

    //Validación de los caracteres que componen la contraseña, si es fuerte o no y si posee al menos un caracter de cada tipo especificado
    let validarCaracteres = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,15}$/;

    if(validarCaracteres.test(password)){
        alert("La contraseña generada es fuerte");
        
    }else{
        alert("La contraseña generada es muy débil");
    }

}

//Función para limpiar los datos de los campos de cantidad y contraseña
function limpiar(){
    cantidad.value = '';
    contrasena.value = '';   
}







