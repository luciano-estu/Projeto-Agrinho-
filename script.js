let produtos =
JSON.parse(localStorage.getItem("produtos")) || [];

function salvar() {
localStorage.setItem(
"produtos",
JSON.stringify(produtos)
);
}

function calcularReceita(){

let total = 0;

produtos.forEach(produto => {

total +=
produto.preco *
produto.quantidade;

});

document.getElementById("receita")
.innerText =
"R$ " + total.toFixed(2);
}

function renderizar(lista = produtos){

const ul =
document.getElementById(
"listaProdutos"
);

ul.innerHTML = "";

lista.forEach((produto,index)=>{

const li =
document.createElement("li");

li.innerHTML = `
<div>
<strong>${produto.nome}</strong><br>
Produtor: ${produto.produtor}<br>
Preço: R$ ${produto.preco}<br>
Quantidade: ${produto.quantidade}
</div>

<button
class="remover"
onclick="removerProduto(${index})">
Excluir
</button>
`;

ul.appendChild(li);

});

calcularReceita();
}

function adicionarProduto(){

const nome =
document.getElementById("nome").value;

const preco =
Number(
document.getElementById("preco").value
);

const quantidade =
Number(
document.getElementById("quantidade").value
);

const produtor =
document.getElementById("produtor").value;

if(
!nome ||
!preco ||
!quantidade ||
!produtor
){
alert("Preencha todos os campos");
return;
}

produtos.push({
nome,
preco,
quantidade,
produtor
});

salvar();
renderizar();

document.getElementById("nome").value="";
document.getElementById("preco").value="";
document.getElementById("quantidade").value="";
document.getElementById("produtor").value="";
}

function removerProduto(index){

produtos.splice(index,1);

salvar();

renderizar();
}

function pesquisarProduto(){

const texto =
document
.getElementById("busca")
.value
.toLowerCase();

const filtrados =
produtos.filter(produto =>
produto.nome
.toLowerCase()
.includes(texto)
);

renderizar(filtrados);
}

renderizar();
