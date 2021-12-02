//Validación formulario de Inicio de Sesion ------------------------------

var user = document.getElementById("user");
var pass = document.getElementById("pass");
var errores = document.getElementById("error");

function validarUsuario(){
    if(user.value == ""){
        errores.innerHTML = "No has introducido usuario.";
        user.focus();
        return false;
    }else{
        errores.innerHTML = "";
        user.style.backgroundColor = "darkgreen";
        return true;
    }//Fin Si
}//Fin Función

function validarContrasenia(){
    if(pass.value == ""){
        errores.innerHTML = "No has introducido contraseña.";
        pass.focus();
        return false;
    }else{
        errores.innerHTML = "";
        pass.style.backgroundColor = "darkgreen";
        return true;
    }//Fin Si
}//Fin Función

function userPassCorrectos(){
    if(user.value != pass.value){
        errores.innerHTML = "Usuario y contraseña no coinciden.";
        return false;
    }else{
        errores.innerHTML = "";
        return true;
    }//Fin Si
}//Fin Función

user.addEventListener('focusout', validarUsuario);
user.addEventListener('focusout', validarContrasenia);

enviar.addEventListener('click', function(event){
    if(validarUsuario() && validarContrasenia()){
        if(userPassCorrectos()){
            errores.innerHTML = "";
            return true;
        }else{
            event.preventDefault();
            return false;
        }//Fin Si
    }else{
        event.preventDefault();
        errores.innerHTML = "";
        errores.innerHTML = "Debes introducir usuario y contraseña.";
        return false;
    }//Fin Si
}//Fin Función
);

//Cambio de imagenes de Secciones -----------------------------------------
function cambio_Imagen_cachimba(x) {
    x.src = "Imagenes/apartado_cachimba_hover.png";
}//Fin Función

function imagen_predeterminada_cachimba(x){
    x.src = "Imagenes/apartado_cachimba.png";
}//Fin Función

function cambio_Imagen_cazoleta(x) {
    x.src = "Imagenes/apartado_cazoleta_hover.png";
}//Fin Función

function imagen_predeterminada_cazoleta(x){
    x.src = "Imagenes/apartado_cazoleta.png";
}//Fin Función

function cambio_Imagen_accesorios(x) {
    x.src = "Imagenes/apartado_accesorios_hover.png";
}//Fin Función

function imagen_predeterminada_accesorios(x){
    x.src = "Imagenes/apartado_accesorios.png";
}//Fin Función

function cambio_Imagen_boquillas(x) {
    x.src = "Imagenes/apartado_boquillas_hover.png";
}//Fin Función

function imagen_predeterminada_boquillas(x){
    x.src = "Imagenes/apartado_boquillas.png";
}//Fin Función

function cambio_Imagen_oferta(x) {
    x.src = "Imagenes/apartado_ofertas_hover.png";
}//Fin Función

function imagen_predeterminada_oferta(x){
    x.src = "Imagenes/apartado_ofertas.png";
}//Fin Función

//Comprar productos - SECCION_CACHIMBA.HTML

var steam = document.getElementById("steam");
var wookah = document.getElementById("wookah");

function ArticuloCachimba(seccion, articulo, precio, stock){
    this.seccion = seccion;
    this.articulo = articulo;
    this.precio = precio;
    this.stock = stock;

    function imprimeSeccion(){
        return this.seccion;
    }//Fin Función

    function imprimeArticulo(){
        return this.articulo;
    }//Fin Función

    function imprimePrecio(){
        return this.precio;
    }//Fin Función
}//Fin Objeto

var carrito = new Array;
var steamulation = new ArticuloCachimba("Cachimba","Steamulation","299,99","100");
var wookah = new ArticuloCachimba("Cachimba","Wookah","299,99","0");

steam.addEventListener('click', function(event){
    var i;
    if(steamulation.stock > 0){
        carrito.push("");
        do{
            i++;
        }while(carrito[i] != "");
        carrito[i] = steamulation;
        return alert(carrito[0].imprimeArticulo+" "+carrito[0].imprimePrecio);
    }//Fin Si
}//Fin Función
);