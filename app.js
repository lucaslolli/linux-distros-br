function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();
    const mensagemVazia = "<p class='texto-principal'>Nada foi encontrado</p>";

    if (!campoPesquisa) {
        section.innerHTML = mensagemVazia;
        return;
    }

    const resultados = dados.filter(dado =>
        Object.values(dado).some(value =>
            typeof value === "string" && value.toLowerCase().includes(campoPesquisa)
        )
    );

    if (resultados.length === 0) {
        section.innerHTML = mensagemVazia;
        return;
    }

    section.innerHTML = resultados.map((dado, index) => `
        <div class="item-resultado" id="resultado-${index}">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            
            <!-- Botão "Mostrar mais" que vai ter estilo de link -->
            <button class="link-estilizado" id="botao-expandir-${index}" onclick="expandirResultado(${index})">Mostrar mais</button>

            <div class="detalhes" id="detalhes-${index}" style="display: none;">
                ${Object.entries(dado)
            .filter(([key, value]) => key !== 'titulo' && key !== 'descricao' && key !== 'link')
            .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
            .join('')}
            </div>

            <!-- Link "Site oficial" que vai ter estilo de botão -->
            <div>
            <button href="${dado.link}" target="_blank">Site oficial</button>
            </div>
        </div>
    `).join('');
}

// Função para expandir o resultado
function expandirResultado(index) {
    const detalhes = document.getElementById(`detalhes-${index}`);
    const botao = document.getElementById(`botao-expandir-${index}`);

    if (detalhes.style.display === 'none') {
        detalhes.style.display = 'block';
        botao.textContent = 'Mostrar menos';  // Muda o texto do botão
    } else {
        detalhes.style.display = 'none';
        botao.textContent = 'Mostrar mais';  // Retorna o texto do botão
    }
}
