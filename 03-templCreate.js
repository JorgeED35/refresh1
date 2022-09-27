const template = document.querySelector("#template")
const carrito = document.querySelector("#carrito")
const footer = document.querySelector("#footer")
const templateFooter = document.querySelector("#templateFooter")
const fragment = document.createDocumentFragment()

document.addEventListener("click", e => {
  
    if(e.target.matches(".card .btn-primary")){
        addCarrito(e)
    }
    if(e.target.matches(".btn-success")){
        aumentarPre(e)
    }
    if (e.target.matches(".btn-danger")){
        disminuirPre(e)
    }
    
})

let carritoObjeto = []

const addCarrito = (e) => {
    
  //  console.log(e.target.dataset.fruta)

    producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio)
    }
    //console.log(producto)
    
    const index = carritoObjeto.findIndex((item) => item.id === producto.id)

    if (index === -1) {
        carritoObjeto.push(producto)
    }else{
        carritoObjeto[index].cantidad ++
        /* carritoObjeto[index].precio = carritoObjeto[index].cantidad * producto.precio  */
    }

    
    
    if(carritoObjeto.hasOwnProperty(producto.titulo)){
        producto.cantidad = carritoObjeto[producto.id].cantidad + 1
    } 
    //carritoObjeto[producto.id] = producto;
    
    pintarCarrito()
    
    console.log(carritoObjeto)

}

/* btnsButtons.forEach(btn =>{
    btn.addEventListener('click',addCarrito)
    }) */

const pintarCarrito = () =>{

    carrito.textContent = ""

    /* Object.values(carritoObjeto) */carritoObjeto.forEach((item) => {
        const clone = template.content.cloneNode(true)

        clone.querySelector(".text-white .lead").textContent = item.titulo
        clone.querySelector(".badge").textContent = item.cantidad
        clone.querySelector("div span").textContent = item.precio * item.cantidad
        clone.querySelector(".btn-success").dataset.id = item.id
        clone.querySelector(".btn-danger").dataset.id = item.id


        fragment.appendChild(clone)
    })

    carrito.appendChild(fragment)

    pintarFooter()
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

const pintarFooter = (e) =>{
    //console.log("pintar footer")
    footer.textContent = ""

    const total = carritoObjeto.reduce((acc, current) => acc + current.cantidad * current.precio, 0)
    const clone = templateFooter.content.cloneNode(true)
    clone.querySelector("span").textContent = total
    footer.appendChild(clone)

    
    console.log(total)
    }

const aumentarPre = e =>{
    carritoObjeto = carritoObjeto.map(item => {
        if(item.id === e.target.dataset.id){
            item.cantidad ++
        }
        return item
    })
    pintarCarrito()
}

const disminuirPre = e => {
    carritoObjeto = carritoObjeto.filter(item => {
        if (item.id === e.target.dataset.id) {
            if (item.cantidad > 0) {
                item.cantidad --
                if (item.cantidad === 0) return
                return item
            }
        }else {return item}
    })
    pintarCarrito()
}
