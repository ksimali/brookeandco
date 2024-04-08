var panier = JSON.parse(localStorage.getItem('panier'));
const countItemCart = document.getElementById('countItemCart');
if(panier){
  countItemCart.innerHTML = panier.quantite;
}

function loadPanier(){
    var panier = JSON.parse(localStorage.getItem('panier'));
    console.log('panier', panier);
    if(panier){
        let listContainer = document.querySelector(".list-container");
        let totalPanier = document. querySelector(".total-panier");
        listContainer.innerHTML = '';

        panier.panierItem.forEach(item =>{ 
            listContainer.innerHTML += ` 
            <tr class="list-cart">
                <td class="product-image">
                    <img src="/${item.image}" alt="${item.nom}" class="img-fluid rounded-4">
                </td>
                <td class="product-name">
                    <h5 class="mb-0"> ${item.nom}</h5>
                </td>
                <td>${item.prix}</td>
                <td>
                    <div class="input-group quantity-container">
                        <span class="mx-1">1</span>
                    </div>
                </td>
                <td>${item.prix}</td>
                <td><button class="btn btn-delete" type="button">&times</button></td>
            </tr>
        `;
        });

        totalPanier.innerHTML = `
        <div class="row justify-content-end">
            <div class="col-md-7">
                <div class="row">
                    <div class="col-md-12 text-right border-bottom mb-2">
                        <h3 class="text-uppercase">Details panier</h3>
                    </div>
                    <div class="row mb-5">
                        <div class="col-md-6">
                            <span class="text-black">Sous-total</span>
                        </div>
                        <div class="col-md-6 total-cart">
                            <strong class="text-black">${panier.subtotal}</strong>
                        </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-md-6">
                            <span class="text-black">TPS</span>
                        </div>
                        <div class="col-md-6 total-cart">
                            <strong class="text-black">${(panier.subtotal * 0.05).toFixed(2)}</strong>
                        </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-md-6">
                            <span class="text-black">TVQ</span>
                        </div>
                        <div class="col-md-6 total-cart">
                            <strong class="text-black">${(panier.subtotal * 0.09975).toFixed(2)}</strong>
                        </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-md-6">
                            <span class="text-black">Total</span>
                        </div>
                        <div class="col-md-6 total-cart">
                            <strong class="text-black">${(Number(panier.subtotal) + Number(panier.subtotal * 0.05) + Number(panier.subtotal * 0.09975)).toFixed(2)}</strong>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <a href="/pages/checkout.html"><button class="cart-btn" onclick="${localStorage.clear()}">Valider la commande</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div> `
    }
}