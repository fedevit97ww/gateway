fetch('../../assets/list.json')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        console.log("listProdotti ", listProdotti);
        json.productList.forEach(e => {
            console.log(e);
            // let prodotto = e.name;
            // console.log(prodotto);
            e = new Prodotto(e.name, e.value);
            console.log(e);
            listProdotti.push(e);

            console.log(listProdotti);
            console.log(e.showProdotto());
            // popolaLista(e);
            creaCard(e);
        })
    })
    .then(() => {
        const goPayment = document.querySelectorAll(".link");
        console.log(goPayment)
        // goPayment.addEventListener('click', checkout);
        // goPayment.setAttribute('onclick', checkout);
        goPayment.forEach(e => {
            e.addEventListener('click', ()=>{
                console.log('test')
            });
        })
        // function checkout() {
        //     // location.href = "https://www.w3schools.com"
        //     console.log('sono nell\' ultimo then')
        // }
    })

    
function creaCard(e) {

    const container = document.getElementById("cards");

    const card = document.createElement('div');
    card.classList.add("card");
    container.appendChild(card);

    const cardBody = document.createElement('div');
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add("card-title");
    cardTitle.appendChild(document.createTextNode(e.nome));
    cardBody.appendChild(cardTitle);

    const cardPrice = document.createElement('p');
    cardPrice.classList.add("card-text");
    cardPrice.appendChild(document.createTextNode(e.value + "€ "));
    cardBody.appendChild(cardPrice);

    const goPayment = document.createElement('a');
    goPayment.classList.add("link");
    goPayment.appendChild(document.createTextNode("Checkout"));
    cardPrice.appendChild(goPayment);
}

var listProdotti = [];
class Prodotto {
    constructor(nome, value) {
        this.nome = nome;
        this.value = value;
    }
    showProdotto() {
        return "Il prodotto di tipo " + this.nome + "costa " + this.value + "€";
    }
}


