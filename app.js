// Mapeamento das chaves para descrições em português
const descricoes = {
    titulo: "Título",
    descricao: "Descrição",
    link: "Link",
    imagem: "Imagem",
    dataLancamento: "Data de Lançamento",
    requisitos: "Requisitos",
    foco: "Foco",
    gerenciadorPacotes: "Gerenciador de Pacotes",
    ambienteDesktopPadrao: "Ambiente Desktop Padrão",
    caracteristicas: "Características",
    pros: "Prós",
    contras: "Contras"
};

// Função para transformar um objeto em um array com a descrição e o valor
function transformarObjetoEmArray(obj) {
    return Object.entries(obj).map(([chave, valor]) => {
        const descricao = descricoes[chave] || chave;
        return [descricao, valor];
    });
}

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();

    // Mensagem padrão caso não haja resultados
    const mensagemVazia = "<p class='texto-principal'>Nada foi encontrado</p>";

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
    section.innerHTML = resultados.map((dado, index) => {
        const dadosTransformados = transformarObjetoEmArray(dado);
        const chavesExcluidas = ['Título', 'Descrição', 'Link', 'Imagem'];
        const detalhes = dadosTransformados
            .filter(([chave, valor]) => !chavesExcluidas.includes(chave))
            .map(([chave, valor]) => `<p><strong>${chave}:</strong> ${valor}</p>`)
            .join('');

        return `
            <div class="item-resultado" id="resultado-${index}">
                <div class="resultado-header">
                    <!-- Imagem da logo à esquerda -->
                    <img src="${dado.imagem}" alt="${dado.titulo} logo" class="logo" />
                    <!-- Título à direita da logo -->
                    <h2>${dado.titulo}</h2>
                </div>
                <p class="descricao-meta">${dado.descricao}</p>
                
                <div class="detalhes" id="detalhes-${index}" style="display: none;">
                    ${detalhes}
                </div>
                
                <!-- Botão "Mais detalhes" que vai ter estilo de link -->
                <div>
                <button class="link-estilizado" id="botao-expandir-${index}" onclick="expandirResultado(${index})">Mais detalhes</button>
                </div>

                <!-- Link "Site oficial" que vai ter estilo de botão -->
                <div class="botao-container">
                    <a class="botao-site-oficial" href="${dado.link}" target="_blank">Site oficial</a>
                </div>
            </div>
        `;
    }).join('');
}

// Função para expandir o resultado
function expandirResultado(index) {
    const detalhes = document.getElementById(`detalhes-${index}`);
    const botaoExpandir = document.getElementById(`botao-expandir-${index}`);

    if (detalhes.style.display === 'none') {
        detalhes.style.display = 'block';
        botaoExpandir.textContent = 'Menos detalhes';
    } else {
        detalhes.style.display = 'none';
        botaoExpandir.textContent = 'Mais detalhes';
    }
}
