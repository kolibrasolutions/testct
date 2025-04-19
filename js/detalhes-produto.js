// Detalhes do Produto
document.addEventListener('DOMContentLoaded', function() {
    // Dados dos produtos (simulando um banco de dados)
    const produtos = [
        {
            id: 1,
            nome: 'Whey Protein Isolado',
            categoria: 'Suplementos',
            categoriaSlug: 'suplementos',
            preco: 149.90,
            imagem: '/img/produtos/whey-protein.jpg',
            imagens: [
                '/img/produtos/whey-protein.jpg',
                '/img/produtos/whey-protein-2.jpg',
                '/img/produtos/whey-protein-3.jpg'
            ],
            descricao: 'Whey Protein Isolado de alta qualidade, com 27g de proteína por dose e baixo teor de gordura e carboidratos. Ideal para quem busca ganho de massa muscular e recuperação pós-treino.',
            detalhes: 'Nosso Whey Protein Isolado é produzido com matéria-prima importada e passa por um rigoroso processo de filtragem que garante alta concentração de proteínas e baixo teor de gorduras e carboidratos. Cada dose contém 27g de proteína de alto valor biológico, essencial para a recuperação e crescimento muscular.',
            especificacoes: [
                'Porção: 30g (1 scoop)',
                'Proteínas: 27g por dose',
                'Carboidratos: 1g por dose',
                'Gorduras: 0.5g por dose',
                'Sabores disponíveis: Chocolate, Baunilha, Morango, Cookies'
            ],
            destaque: true,
            produtosRelacionados: [2, 3, 4]
        },
        {
            id: 2,
            nome: 'Creatina Monohidratada',
            categoria: 'Suplementos',
            categoriaSlug: 'suplementos',
            preco: 89.90,
            imagem: '/img/produtos/creatina.jpg',
            imagens: [
                '/img/produtos/creatina.jpg',
                '/img/produtos/creatina-2.jpg',
                '/img/produtos/creatina-3.jpg'
            ],
            descricao: 'Creatina pura monohidratada, 5g por dose. Auxilia no ganho de força e massa muscular.',
            detalhes: 'Nossa Creatina Monohidratada é 100% pura e micronizada, garantindo melhor absorção e resultados. A creatina é um dos suplementos mais estudados e eficazes para aumento de força, potência e massa muscular. Recomendada para atletas de todos os níveis.',
            especificacoes: [
                'Porção: 5g (1 colher medida)',
                'Creatina pura: 5g por dose',
                'Sem aditivos ou conservantes',
                'Embalagem com 300g (60 doses)'
            ],
            destaque: true,
            produtosRelacionados: [1, 3, 4]
        },
        {
            id: 3,
            nome: 'BCAA 2:1:1',
            categoria: 'Suplementos',
            categoriaSlug: 'suplementos',
            preco: 69.90,
            imagem: '/img/produtos/bcaa.jpg',
            imagens: [
                '/img/produtos/bcaa.jpg',
                '/img/produtos/bcaa-2.jpg',
                '/img/produtos/bcaa-3.jpg'
            ],
            descricao: 'BCAA na proporção 2:1:1 (leucina, isoleucina e valina). Auxilia na recuperação muscular.',
            detalhes: 'Nosso BCAA contém os três aminoácidos essenciais (leucina, isoleucina e valina) na proporção 2:1:1, considerada ideal para maximizar a síntese proteica e a recuperação muscular. Pode ser consumido antes, durante ou após o treino.',
            especificacoes: [
                'Porção: 7g (1 colher medida)',
                'Leucina: 3.5g por dose',
                'Isoleucina: 1.75g por dose',
                'Valina: 1.75g por dose',
                'Sabores disponíveis: Limão, Laranja, Uva, Neutro'
            ],
            destaque: false,
            produtosRelacionados: [1, 2, 4]
        },
        {
            id: 4,
            nome: 'Pré-Treino Energy',
            categoria: 'Suplementos',
            categoriaSlug: 'suplementos',
            preco: 79.90,
            imagem: '/img/produtos/pre-treino.jpg',
            imagens: [
                '/img/produtos/pre-treino.jpg',
                '/img/produtos/pre-treino-2.jpg',
                '/img/produtos/pre-treino-3.jpg'
            ],
            descricao: 'Pré-treino com cafeína, beta-alanina e creatina. Aumenta a energia e o foco durante o treino.',
            detalhes: 'Nosso Pré-Treino Energy combina ingredientes cientificamente comprovados para aumentar a energia, foco e desempenho durante os treinos. Contém cafeína para energia imediata, beta-alanina para resistência muscular e creatina para força e potência.',
            especificacoes: [
                'Porção: 10g (1 scoop)',
                'Cafeína: 200mg por dose',
                'Beta-alanina: 1.6g por dose',
                'Creatina: 3g por dose',
                'Sabores disponíveis: Frutas Vermelhas, Limão, Tangerina'
            ],
            destaque: true,
            produtosRelacionados: [1, 2, 3]
        },
        {
            id: 5,
            nome: 'Camiseta Dry-Fit',
            categoria: 'Vestuário',
            categoriaSlug: 'vestuario',
            preco: 59.90,
            imagem: '/img/produtos/camiseta.jpg',
            imagens: [
                '/img/produtos/camiseta.jpg',
                '/img/produtos/camiseta-2.jpg',
                '/img/produtos/camiseta-3.jpg'
            ],
            descricao: 'Camiseta em tecido dry-fit, leve e respirável. Ideal para treinos intensos.',
            detalhes: 'Nossa Camiseta Dry-Fit é confeccionada com tecido de alta tecnologia que afasta o suor da pele, mantendo o corpo seco e confortável durante os treinos. O material leve e respirável proporciona liberdade de movimentos e conforto térmico.',
            especificacoes: [
                'Material: 92% Poliéster, 8% Elastano',
                'Tecnologia Dry-Fit',
                'Proteção UV',
                'Tamanhos disponíveis: P, M, G, GG',
                'Cores disponíveis: Preto, Azul, Cinza, Vermelho'
            ],
            destaque: true,
            produtosRelacionados: [6, 7, 8]
        },
        {
            id: 6,
            nome: 'Regata Performance',
            categoria: 'Vestuário',
            categoriaSlug: 'vestuario',
            preco: 49.90,
            imagem: '/img/produtos/regata.jpg',
            imagens: [
                '/img/produtos/regata.jpg',
                '/img/produtos/regata-2.jpg',
                '/img/produtos/regata-3.jpg'
            ],
            descricao: 'Regata em tecido leve e respirável, com tecnologia anti-odor.',
            detalhes: 'Nossa Regata Performance é ideal para treinos intensos em dias quentes. Confeccionada com tecido leve e respirável, possui tecnologia anti-odor que previne o mau cheiro causado pelo suor. O corte anatômico proporciona liberdade de movimentos.',
            especificacoes: [
                'Material: 90% Poliéster, 10% Elastano',
                'Tecnologia Anti-odor',
                'Secagem rápida',
                'Tamanhos disponíveis: P, M, G, GG',
                'Cores disponíveis: Preto, Branco, Azul, Vermelho'
            ],
            destaque: false,
            produtosRelacionados: [5, 7, 8]
        },
        {
            id: 7,
            nome: 'Shorts Esportivo',
            categoria: 'Vestuário',
            categoriaSlug: 'vestuario',
            preco: 69.90,
            imagem: '/img/produtos/shorts.jpg',
            imagens: [
                '/img/produtos/shorts.jpg',
                '/img/produtos/shorts-2.jpg',
                '/img/produtos/shorts-3.jpg'
            ],
            descricao: 'Shorts esportivo com tecido leve e bolsos laterais. Confortável para qualquer atividade física.',
            detalhes: 'Nosso Shorts Esportivo combina conforto e funcionalidade. Confeccionado com tecido leve e resistente, possui bolsos laterais e elástico na cintura com cordão de ajuste. Ideal para corrida, musculação e outras atividades físicas.',
            especificacoes: [
                'Material: 88% Poliéster, 12% Elastano',
                'Bolsos laterais',
                'Elástico na cintura com cordão',
                'Tamanhos disponíveis: P, M, G, GG',
                'Cores disponíveis: Preto, Azul Marinho, Cinza'
            ],
            destaque: true,
            produtosRelacionados: [5, 6, 8]
        },
        {
            id: 8,
            nome: 'Legging Compressão',
            categoria: 'Vestuário',
            categoriaSlug: 'vestuario',
            preco: 89.90,
            imagem: '/img/produtos/legging.jpg',
            imagens: [
                '/img/produtos/legging.jpg',
                '/img/produtos/legging-2.jpg',
                '/img/produtos/legging-3.jpg'
            ],
            descricao: 'Legging de compressão que melhora a circulação e oferece suporte muscular durante o treino.',
            detalhes: 'Nossa Legging de Compressão é desenvolvida com tecnologia que proporciona compressão gradual, melhorando a circulação sanguínea e oferecendo suporte muscular durante os treinos. O tecido de alta elasticidade garante conforto e liberdade de movimentos.',
            especificacoes: [
                'Material: 85% Poliamida, 15% Elastano',
                'Compressão gradual',
                'Cintura alta com elástico interno',
                'Tamanhos disponíveis: P, M, G, GG',
                'Cores disponíveis: Preto, Azul, Vinho, Cinza'
            ],
            destaque: false,
            produtosRelacionados: [5, 6, 7]
        },
        {
            id: 9,
            nome: 'Café Especial Pré-Treino',
            categoria: 'Produtos de Café',
            categoriaSlug: 'cafe',
            preco: 39.90,
            imagem: '/img/produtos/cafe-pre-treino.jpg',
            imagens: [
                '/img/produtos/cafe-pre-treino.jpg',
                '/img/produtos/cafe-pre-treino-2.jpg',
                '/img/produtos/cafe-pre-treino-3.jpg'
            ],
            descricao: 'Café especial com torra média, ideal para consumo antes do treino. Rico em antioxidantes e cafeína natural.',
            detalhes: 'Nosso Café Especial Pré-Treino é produzido com grãos selecionados e torra média, que preserva os antioxidantes e garante o teor ideal de cafeína. Perfeito para ser consumido 30 minutos antes do treino, proporcionando energia e foco de forma natural.',
            especificacoes: [
                'Grãos: 100% Arábica',
                'Torra: Média',
                'Moagem: Média (ideal para coador ou prensa francesa)',
                'Embalagem: 250g',
                'Origem: Sul de Minas Gerais'
            ],
            destaque: true,
            produtosRelacionados: [10, 11, 12]
        },
        {
            id: 10,
            nome: 'Café Especial Recuperação',
            categoria: 'Produtos de Café',
            categoriaSlug: 'cafe',
            preco: 39.90,
            imagem: '/img/produtos/cafe-recuperacao.jpg',
            imagens: [
                '/img/produtos/cafe-recuperacao.jpg',
                '/img/produtos/cafe-recuperacao-2.jpg',
                '/img/produtos/cafe-recuperacao-3.jpg'
            ],
            descricao: 'Café especial com torra clara, ideal para consumo após o treino. Auxilia na recuperação muscular.',
            detalhes: 'Nosso Café Especial Recuperação é produzido com grãos selecionados e torra clara, que preserva ao máximo os antioxidantes naturais do café. Ideal para ser consumido após o treino, auxiliando na recuperação muscular e combatendo os radicais livres produzidos durante o exercício.',
            especificacoes: [
                'Grãos: 100% Arábica',
                'Torra: Clara',
                'Moagem: Média (ideal para coador ou prensa francesa)',
                'Embalagem: 250g',
                'Origem: Cerrado Mineiro'
            ],
            destaque: false,
            produtosRelacionados: [9, 11, 12]
        },
        {
            id: 11,
            nome: 'Kit Café Atleta',
            categoria: 'Produtos de Café',
            categoriaSlug: 'cafe',
            preco: 99.90,
            imagem: '/img/produtos/kit-cafe.jpg',
            imagens: [
                '/img/produtos/kit-cafe.jpg',
                '/img/produtos/kit-cafe-2.jpg',
                '/img/produtos/kit-cafe-3.jpg'
            ],
            descricao: 'Kit com três tipos de café especial para atletas: pré-treino, durante o treino e recuperação.',
            detalhes: 'Nosso Kit Café Atleta contém três tipos de café especial desenvolvidos para diferentes momentos do treino: Pré-Treino (torra média, mais cafeína), Durante o Treino (torra média-clara, equilíbrio entre cafeína e antioxidantes) e Recuperação (torra clara, máximo de antioxidantes). Um kit completo para potencializar seus resultados.',
            especificacoes: [
                'Grãos: 100% Arábica',
                'Torras: Média, Média-Clara e Clara',
                'Moagem: Média (ideal para coador ou prensa francesa)',
                'Embalagem: 3 pacotes de 250g',
                'Origem: Diferentes regiões produtoras do Brasil'
            ],
            destaque: true,
            produtosRelacionados: [9, 10, 12]
        },
        {
            id: 12,
            nome: 'Caneca Térmica',
            categoria: 'Produtos de Café',
            categoriaSlug: 'cafe',
            preco: 49.90,
            imagem: '/img/produtos/caneca.jpg',
            imagens: [
                '/img/produtos/caneca.jpg',
                '/img/produtos/caneca-2.jpg',
                '/img/produtos/caneca-3.jpg'
            ],
            descricao: 'Caneca térmica que mantém seu café quente por até 6 horas. Ideal para levar para a academia.',
            detalhes: 'Nossa Caneca Térmica é fabricada com parede dupla de aço inoxidável, mantendo sua bebida quente por até 6 horas ou fria por até 12 horas. Possui tampa hermética que evita vazamentos e é ideal para transportar seu café para a academia ou qualquer outro lugar.',
            especificacoes: [
                'Material: Aço inoxidável 304 (grau alimentício)',
                'Capacidade: 450ml',
                'Parede dupla com isolamento a vácuo',
                'Tampa hermética',
                'Cores disponíveis: Preto, Prata, Azul, Vermelho'
            ],
            destaque: false,
            produtosRelacionados: [9, 10, 11]
        }
    ];

    // Função para formatar preço em Real
    function formatarPreco(preco) {
        return preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }

    // Função para obter parâmetros da URL
    function obterParametroUrl(nome) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(nome);
    }

    // Exibir detalhes do produto
    const produtoContainer = document.getElementById('produto-container');
    if (produtoContainer) {
        const produtoId = parseInt(obterParametroUrl('id'));
        const produto = produtos.find(p => p.id === produtoId);
        
        if (produto) {
            // Criar HTML para as imagens miniaturas
            let miniaturas = '';
            produto.imagens.forEach((img, index) => {
                miniaturas += `<img src="${img}" alt="${produto.nome} ${index + 1}" class="miniatura" onclick="trocarImagemPrincipal(this.src)">`;
            });
            
            // Criar HTML para as especificações
            let especificacoes = '';
            produto.especificacoes.forEach(spec => {
                especificacoes += `<li>${spec}</li>`;
            });
            
            // Montar HTML do produto
            produtoContainer.innerHTML = `
                <div class="produto-imagens">
                    <div class="imagem-principal">
                        <img src="${produto.imagem}" alt="${produto.nome}" id="imagem-principal">
                    </div>
                    <div class="miniaturas">
                        ${miniaturas}
                    </div>
                </div>
                <div class="produto-info">
                    <h1>${produto.nome}</h1>
                    <div class="produto-categoria">${produto.categoria}</div>
                    <div class="produto-preco">${formatarPreco(produto.preco)}</div>
                    
                    <div class="produto-descricao">
                        <p>${produto.descricao}</p>
                        <p>${produto.detalhes}</p>
                    </div>
                    
                    <div class="produto-especificacoes">
                        <h3>Especificações</h3>
                        <ul>
                            ${especificacoes}
                        </ul>
                    </div>
                    
                    <div class="produto-acoes">
                        <div class="quantidade">
                            <button class="qtd-btn" onclick="diminuirQuantidade()">-</button>
                            <input type="number" value="1" min="1" class="qtd-input" id="quantidade">
                            <button class="qtd-btn" onclick="aumentarQuantidade()">+</button>
                        </div>
                        <button class="btn-interesse" onclick="abrirModalInteresse(${produto.id}, '${produto.nome}')">
                            <i class="fas fa-envelope"></i> Tenho interesse
                        </button>
                    </div>
                </div>
            `;
            
            // Adicionar script para trocar imagem principal
            window.trocarImagemPrincipal = function(src) {
                document.getElementById('imagem-principal').src = src;
            };
            
            // Adicionar script para controle de quantidade
            window.aumentarQuantidade = function() {
                const input = document.getElementById('quantidade');
                input.value = parseInt(input.value) + 1;
            };
            
            window.diminuirQuantidade = function() {
                const input = document.getElementById('quantidade');
                if (parseInt(input.value) > 1) {
                    input.value = parseInt(input.value) - 1;
                }
            };
            
            // Adicionar script para abrir modal de interesse
            window.abrirModalInteresse = function(id, nome) {
                const modal = document.getElementById('modal-interesse');
                document.getElementById('produto_id').value = id;
                document.getElementById('produto_nome').value = nome;
                modal.style.display = 'flex';
                
                // Fechar modal ao clicar no X
                const fecharModal = document.querySelector('.fechar-modal');
                fecharModal.onclick = function() {
                    modal.style.display = 'none';
                };
                
                // Fechar modal ao clicar fora do conteúdo
                window.onclick = function(event) {
                    if (event.target === modal) {
                        modal.style.display = 'none';
                    }
                };
            };
            
            // Exibir produtos relacionados
            const produtosRelacionadosContainer = document.getElementById('produtos-relacionados');
            if (produtosRelacionadosContainer && produto.produtosRelacionados) {
                let html = '';
                
                produto.produtosRelacionados.forEach(id => {
                    const produtoRelacionado = produtos.find(p => p.id === id);
                    if (produtoRelacionado) {
                        html += `
                            <div class="produto-card">
                                <div class="produto-img">
                                    <img src="${produtoRelacionado.imagem}" alt="${produtoRelacionado.nome}">
                                </div>
                                <h3>${produtoRelacionado.nome}</h3>
                                <div class="produto-categoria">${produtoRelacionado.categoria}</div>
                                <div class="produto-preco">${formatarPreco(produtoRelacionado.preco)}</div>
                                <a href="/produtos/produto-detalhe.html?id=${produtoRelacionado.id}" class="btn-produto">Ver detalhes</a>
                            </div>
                        `;
                    }
                });
                
                produtosRelacionadosContainer.innerHTML = html;
            }
        } else {
            produtoContainer.innerHTML = `
                <div class="produto-nao-encontrado">
                    <h2>Produto não encontrado</h2>
                    <p>O produto que você está procurando não está disponível.</p>
                    <a href="/produtos/index.html" class="btn btn-primary">Ver todos os produtos</a>
                </div>
            `;
        }
    }
    
    // Formulário de interesse
    const formInteresse = document.getElementById('form-interesse');
    if (formInteresse) {
        formInteresse.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const produtoId = document.getElementById('produto_id').value;
            const produtoNome = document.getElementById('produto_nome').value;
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Aqui você enviaria os dados para um servidor
            // Como é apenas uma vitrine, vamos simular o envio
            
            alert(`Obrigado pelo seu interesse no produto "${produtoNome}"! Entraremos em contato em breve.`);
            
            // Fechar o modal
            document.getElementById('modal-interesse').style.display = 'none';
            
            // Limpar o formulário
            formInteresse.reset();
        });
    }
});
