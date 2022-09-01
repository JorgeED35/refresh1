/* console.log('Mari') */
/* const tituloP = document.getElementById('tituloP')
const boton = document.querySelector(".btn-primary")

boton.addEventListener("click", (item) =>{
    boton.textContent = "Mari"
    tituloP.textContent = "Amo a la del boton ❤️"
    tituloP.style.color = 'red'
}) 

console.log(boton)
 */

const inputColor = document.querySelector("#inputColor")
const boton1 = document.querySelector("#boton1")
const textoHexadec = document.querySelector("#textoHexadec")
const cardColor = document.querySelector("#cardColor")
const textoColor1 = document.querySelector("#textoColor1")
const textoColor2 = document.querySelector("#textoColor2")

boton1.addEventListener("click", () => {
    console.log("Me diste click ")
    console.log(inputColor.value)
    textoHexadec.textContent = inputColor.value
    cardColor.style.backgroundColor = inputColor.value
    textoColor1.style.color = inputColor.value
    textoColor2.style.color = inputColor.value

    
    navigator.clipboard
    .writeText(inputColor.value)
    .then(() => {"Texto copiado"}) 
    .catch((e) => {console.log(e)})
})



