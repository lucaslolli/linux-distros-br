function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();

    // Mensagem padrão caso não haja resultados
    const mensagemVazia = "<p class='texto-principal'>Nada foi encontrado</p>";

    // Se o campo de pesquisa estiver vazio
    if (!campoPesquisa) {
        section.innerHTML = mensagemVazia;
        return;
    }

    // Filtra os dados com base na pesquisa
    const resultados = dados.filter(dado => 
        Object.values(dado).some(value => 
            typeof value === "string" && value.toLowerCase().includes(campoPesquisa)
        )
    );

    // Verifica se há resultados, senão exibe mensagem
    if (resultados.length === 0) {
        section.innerHTML = mensagemVazia;
        return;
    }

    // Gera o HTML dos resultados
    section.innerHTML = resultados.map(dado => `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Site oficial</a>
        </div>
    `).join('');
}
