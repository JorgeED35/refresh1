const formu = document.querySelector("form")
const userName = document.querySelector("#userName")
const userEmail = document.querySelector("#userEmail")
const textName = document.querySelector("#textName")
const textEmail = document.querySelector("#textEmail")
const textsucces = document.querySelector("#textsucces")
const emailV = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
const word = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/

const pintarMsj = () => {
    textsucces.classList.remove("d-none")
    textsucces.textContent = "Mensaje enviado con exito"
}
const pintMsjMista = (mistakes) => {
mistakes.forEach(item => {
    item.tipo.classList.remove("d-none")
    item.tipo.textContent = item.message
    
});
}

document.addEventListener("submit", (e) =>{
    e.preventDefault()
    
    mistakes = []
    
    if(!word.test(userName.value) || !userName.value.trim()){
        userName.classList.add("is-invalid")
        mistakes.push({
            tipo: textName,
            message: "Formato no valido, solo letras"
    })
    }else{
        userName.classList.remove("is-invalid")
        userName.classList.add("is-valid")
        textName.classList.add("d-none")

    }

    if(!emailV.test(userEmail.value) || !userEmail.value.trim()){
        userEmail.classList.add("is-invalid")
        mistakes.push({
            tipo: textEmail,
            message: "Escriba un correo valido"
    })
    }else{
        userEmail.classList.remove("is-invalid")
        userEmail.classList.add("is-valid")
        textEmail.classList.add("d-none")

    } 
    if (mistakes.length !== 0) {
        pintMsjMista(mistakes)
        return
    }
    

    console.log("Formato valido para enviar")
    pintarMsj()
})










const prueba = /marisabel/i 


/* solo numeros */

const num = /^\d+$/gi

/* solo letras sin tilde */ 

const matilde =  /^[a-zA-Z ]*$/

