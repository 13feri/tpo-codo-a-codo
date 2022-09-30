/**
 * 
 * Funcion para mostrar detalles del producto
 */
 function mostrarProductos(ev){
        
    let elemento = $('#lienzo');
     let h1 = document.getElementById('nombreProducto');
     let precio = document.getElementById('precio');
     let descripcion = document.getElementById('descripcion');
     let categoria = document.getElementById('categoria');
     

    let idProducto = window.location.search.split('=')[1];
    let producto = products.find(x => x.id == idProducto);
       
    elemento.append(`
        <img src="${producto.image}" class="card-img-top"  style="max-height: 400px; margin-bottom: 20px;"  alt="...">
       
      `);
  h1.innerHTML = producto.title
  precio.innerHTML = `$ ${producto.price} ,00`
  descripcion.innerHTML = producto.description
  categoria.innerHTML = `Categoria: ${producto.company}`
 
}

mostrarProductos('Index')

