let contador = 0;
let total = 0;

const botoes = document.querySelectorAll(".adicionar");
const cartCount = document.querySelector("#contador");
const totalPrice = document.querySelector("#total-price");



botoes.forEach(botao => {

botao.addEventListener("click", () => {

contador++;
cartCount.textContent = contador;


const preco = botao.getAttribute("data-price");
total += Number(preco);

if(totalPrice){
totalPrice.textContent = total;
}

alert("Produto adicionado!");

});


});