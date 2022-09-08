const template = document.querySelector("#template")
const carrito = document.querySelector("#carrito")
const fragment = document.createDocumentFragment()
const btnsButtons = document.querySelectorAll(".card .btn")


const carritoObjeto = {}

const addCarrito = (e) => {
    console.log(e.target.dataset.fruta)

    producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    }

    if(carritoObjeto.hasOwnProperty(producto.titulo)){
        producto.cantidad = carritoObjeto[producto.id].cantidad + 1
    } 
    carritoObjeto[producto.id] = producto;

    pintarCarrito(producto)


}

btnsButtons.forEach(btn =>{
    btn.addEventListener('click',addCarrito)

})

const pintarCarrito = () =>{

    carrito.textContent = ""

    Object.values(carritoObjeto).forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true)
        clone.querySelector(".lead").textContent = item.titulo
        clone.querySelector(".badge").textContent = item.cantidad

        fragment.appendChild(clone)
    })

    carrito.appendChild(fragment)

}


/* arrCountries.forEach(pais => {
const li = document.createElement("li") 
li.textContent = pais;

const reference = fragment.firstChild

fragment.insertBefore(li, reference)
});
lista.appendChild(fragment) */

/* arrCountries.forEach((pais) => {
    const li = document.createElement("li")
    li.className = "list"

    const b = document.createElement("b")
    b.textContent = "País: "

    const span = document.createElement("span")
    span.className = "text-primary"
    span.textContent = pais

    li.appendChild(b)
    li.appendChild(span)

    fragment.appendChild(li)
}); */

