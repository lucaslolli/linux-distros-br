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
    section.innerHTML = resultados.map((dado, index) => `
        <div class="item-resultado" id="resultado-${index}">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <button class="botao-expandir" onclick="expandirResultado(${index})">Mostrar mais</button>
            <div class="detalhes" id="detalhes-${index}" style="display: none;">
                ${Object.entries(dado)
            .filter(([key, value]) => key !== 'titulo' && key !== 'descricao' && key !== 'link')
            .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
            .join('')}
            </div>
            <a href="${dado.link}" target="_blank">Site oficial</a>
        </div>
    `).join('');
}

// Função para expandir o resultado
function expandirResultado(index) {
    const detalhes = document.getElementById(`detalhes-${index}`);
    if (detalhes.style.display === 'none') {
        detalhes.style.display = 'block';
    } else {
        detalhes.style.display = 'none';
    }
}
