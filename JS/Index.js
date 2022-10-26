const misCompania = document.getElementById('misCategorias');
const misProductos = document.querySelector('#misProductos');
const txtBuscar = document.getElementById('txtBuscar');

function mostrarEmpresa() {
    let ListaEmp = ['TODOS', ...new Set(products.map((prod) => prod.company))];
    misCompania.innerHTML = '';

   

    misCompania.innerHTML = ListaEmp.map((emp) => { 
        return `<button class="empresa-btn" data-id="${emp}" onclick="mostrarProductos(event)">${emp}</button>`;
    }).join('');
}

mostrarEmpresa();

function mostrarProductos(ev){
    misProductos.innerHTML = '';

    if(ev != undefined) {
        if (ev.currentTarget.dataset.id != "TODOS")
        {
            misProductos.innerHTML = products.filter(x => x.company == ev.currentTarget.dataset.id).map((proc) => {
                return `<article class="product" data-id="${proc.id}">
                            <img src="${proc.image}" class="product-img img" alt="">
                            <footer>
                            <h5 class="product-name">${proc.title}</h5>
                            <span class="product-price">$${proc.price}</span>
                            </footer>
                            <a href="./Detail.html?IdProducto=${proc.id}">Ver más</a>
                        </article> `
            }).join('');
            
            return;
        }
    }
    
    misProductos.innerHTML = products.map((proc) => {
        return `<article class="product" data-id="${proc.id}">
                    <img src="${proc.image}" class="product-img img" alt="">
                    <footer>
                    <h5 class="product-name">${proc.title}</h5>
                    <span class="product-price">$${proc.price}</span>
                    </footer>
                    <a class="Vermas" href="./Detail.html?IdProducto=${proc.id}">Ver más</a>
                </article> `
    }).join('');
    
    return;
}

mostrarProductos();

txtBuscar.addEventListener('keyup', (ev) => {
    misProductos.innerHTML = '';
    misProductos.innerHTML = products.filter(x => x.title.toLowerCase().includes(ev.currentTarget.value.toLowerCase())).map((proc) => {
        return `<article class="product" data-id="${proc.id}">
                    <img src="${proc.image}" class="product-img img" alt="">
                    <footer>
                    <h5 class="product-name">${proc.title}</h5>
                    <span class="product-price">$${proc.price}</span>
                    </footer>
                    <a href="./Detail.html?IdProducto=${proc.id}">Ver más</a>
                </article> `
    }).join('');
    
    return;
});