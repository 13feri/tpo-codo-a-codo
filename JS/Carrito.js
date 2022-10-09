const shopCont = document.getElementById("shopCont");

const verCarrito = document.getElementById("verCarrito");
   let carrito =[];
   products.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML= ` 
    <img src="${product.image}"></img>
    <h3>${product.title}</h3>
    <p class="price">${"$"+product.price} </p>
    `
    shopCont.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Agregar a carrito";
    comprar.className= "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
      carrito.push({
        id : product.id,
        img : product.image,
        name : product.title,
        price : product.price,
      });
      console.log(carrito)
    })
   });