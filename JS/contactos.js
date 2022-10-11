var getData= function (){
var nombre =document.getElementById ("nombre").value;
var email =document.getElementById ("email").value;
var telefono =document.getElementById ("telefono").value;
var asunto =document.getElementById ("asunto").value;
var mensaje =document.getElementById ("mensaje").value;
}


if( nombre == ""){
    document.getElementById("nombre").focus ();
} else{

}

if(email == ""){
    document.getElementById("email").focus ();
} else{

}

if(telefono == ""){
    document.getElementById("telefono").focus ();
} else{

}
if(asunto == ""){
    document.getElementById("asunto").focus ();
} else{

}

if(mensaje == ""){
    document.getElementById("mensaje").focus ();
} else{

}

console.log(nombre+""+email+""+telefono+""+asunto+""+mensaje);


