async function carregarDados() {

    const url = "https://glowing-journey-xxxxx-3000.app.github.dev";

    const resposta = await fetch(url);

    const dados = await resposta.json();

    const listaProdutos = document.getElementById("lista-produtos");

    listaProdutos.innerHTML =
        <div class="card">
            <h2>${dados.nome}</h2>
            <p>Categoria: ${dados.categoria}</p>
            <p>Preço: R$ ${dados.preco}</p>
        </div>;
}

carregarDados();