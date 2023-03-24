console.log("register");
let pets= [pet1, pet2, pet3];//areglo vacio
// crear constructor
function Pet (nombreP, generoP, razaP, edadP, servicioP, sucursalP){
    this.nombre=nombreP;
    this.genero=generoP;
    this.raza=razaP;
    this.edadP=edadP;
    this.servicio=servicioP;
    this.sucursal=sucursalP;
}

// variables globales
//obtener los valores de los inputs
    let inputNombre=document.getElementById("txtNombre");
    let inputGenero=document.getElementById("txtGenero");
    let inputRaza=document.getElementById("txtRaza");
    let inputEdad=document.getElementById("txtEdad");
    let inputServicio=document.getElementById("selServicio");
    let inputSucursal=document.getElementById("txtSucursal");

    function validacion(pet){
        let valida=true; //todo bien

        //reset de los inputs

        if(pet.nombre ==""){//comparacion (utilizar== < >= <= !=)
            //si entro aquí no es valida la mascota
            inputNombre.classList.add=("error");
            valida=false;
        }
        return valida;
    //validar que el servicio no quede vacio
    if(pet.servicio==""){//comparacion (utilizar== < >= <= !=)
        //si entro aqui no se valida la mascota
        inputNombre.classList.add("error");
        valida= false;
    }
        return valida;
    }
   

// crear funcion de registro
function registro (){
    console.log ("Registrando mascota...");
    //crear objeto
    let newPet= new Pet(inputNombre.value,inputGenero.value,inputRaza.value,inputEdad.value,inputServicio.value,inputSucursal.value);
    if(validacion(newPet)==true){
        //Imprimir el objeto en consola
    console.log(newPet);
    //limpiar
    limpiarForm();
    }
}
    
    
function limpiarForm(){
    inputNombre.value="";
    inputGenero.value="";
    inputRaza.value="";
    inputEdad.value="";
    inputServicio.value="";
    inputSucursal.value="";
   
}

function init(){
    console.log("register");
    //objeto
    let pet1 = new Pet("Macchiato","Macho","Boxer","Grooming");
    pets.push (pet1);
}

window.onload=init; //ejecuta init cuando termina de renderizar el HTML
