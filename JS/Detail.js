/**
 * 
 * Funcion para mostrar detalles del producto
 */
 function mostrarProductos(ev){
        
    let elemento = $("#lienzo");
     let h1 = document.getElementById('nombreProducto');
     let precio = document.getElementById('precio');
     let descripcion = document.getElementById('descripcion');
     let categoria = document.getElementById('categoria');
     

    let idProducto = window.location.search.split('=')[1];
    let producto = products.find(x => x.id == idProducto);
       
    elemento.append(`
        <img src="${producto.image}"  class="card-img-top"  style="max-height: 400px; margin-bottom: 20px;"  alt="...">
       
      `);
  h1.innerHTML = producto.title
  precio.innerHTML = `$ ${producto.price} ,00`
  descripcion.innerHTML = producto.description
  categoria.innerHTML = `Categoria: ${producto.company}`
 
}

mostrarProductos('Index')

/*Para agregar productos al carrito */

let btnDetail = document.querySelectorAll('#verCarrito')
console.log(btnDetail)
var compras =[]

btnDetail.forEach(btn =>{
  btn.addEventListener('click', showDetail)
})

/*Función que busca el detalle del producto*/ 

function showDetail (ev){
  let add = ev.target
  if(add){
    let item = add.closest('.products')
    let name = item.querySelector('.txt-nombre-producto').innerText

    let find = products.find((x) => {
      return x.Nombre == String(products)
    })
    console.log('find', find)
    agregaralCarritoDetail(find);{
      return alert('Producto: ${name} agregado al carrito')
    }
  }
}

/*Funcion que agrega el producto buscado en showDetail a la variable compras*/

function agregaralCarritoDetail(find){
  for(let i=0; i< compras.length; i++){
    if(compras[i].Nombre.trim() === find.Nombre.trim()){
      compras[i].Cantidad++;
      return null
    }
  }
}

compras.push(find)
verCarrito()
guardarEnPC()

function verCarrito(){
  console.log('Lo que hay en el carrito:', compras)
}
