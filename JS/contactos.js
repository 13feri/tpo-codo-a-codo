var nombre = document.getElementById('nombre');

var mail = document.getElementById('mail');
var asunto = document.getElementById('asunto');
var msg = document.getElementById('msg');





send.addEventListener('click', ()=>{
    const name1 = nombre.value
    const email1 = mail.value
    const asunto1 = asunto.value
    const msg1 = msg.value

    const nameL =name1.length
    const emailL =email1.length
    const asuntoL =asunto1.length
    const msgL =msg1.length

    if(nameL <= 0){
        alert("Ingrese primero el nombre");
    }else if(emailL <= 0) {
        alert("Ingrese primero el correo electrónico");
    }else if(asuntoL <=0){
        alert("Ingrese primero el asunto");
    }else if(msgL <= 0){
        alert("Ingrese primero el mensaje");
    }else{
        console.log("nombre: "+ name1);
        console.log("correo: "+ email1);
        console.log("asunto: "+ asunto1);
        console.log("mensaje: "+ msg1)
    }

})
const $form = document.querySelector('#form');

$form.addEventListener(btn,handleSubmit)


async function handleSubmit(event){
    event.preventDefault()
    const form = await fetch(this.action,{
        method:this.method,
        body:form,
        headers:{
            'accept':'application/json'
        }
    })
        if(Response.ok){
            this.reset()
            alert('gracias por tu contactarte')
        }

    

}


