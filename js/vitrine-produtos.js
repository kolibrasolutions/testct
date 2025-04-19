// Vitrine de Produtos
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
            descricao: 'Whey Protein Isolado de alta qualidade, com 27g de proteína por dose e baixo teor de gordura e carboidratos.',
            destaque: true
        },
        {
            id: 2,
            nome: 'Creatina Monohidratada',
            categoria: 'Suplementos',
            categoriaSlug: 'suplementos',
            preco: 89.90,
            imagem: '/img/produtos/creatina.jpg',
            descricao: 'Creatina pura monohidratada, 5g por dose. Auxilia no ganho de força e massa muscular.',
            destaque: true
        },
        {
            id: 3,
            nome: 'BCAA 2:1:1',
            categoria: 'Suplementos',
            categoriaSlug: 'suplementos',
            preco: 69.90,
            imagem: '/img/produtos/bcaa.jpg',
            descricao: 'BCAA na proporção 2:1:1 (leucina, isoleucina e valina). Auxilia na recuperação muscular.',
            destaque: false
        },
        {
            id: 4,
            nome: 'Pré-Treino Energy',
            categoria: 'Suplementos',
            categoriaSlug: 'suplementos',
            preco: 79.90,
            imagem: '/img/produtos/pre-treino.jpg',
            descricao: 'Pré-treino com cafeína, beta-alanina e creatina. Aumenta a energia e o foco durante o treino.',
            destaque: true
        },
        {
            id: 5,
            nome: 'Camiseta Dry-Fit',
            categoria: 'Vestuário',
            categoriaSlug: 'vestuario',
            preco: 59.90,
            imagem: '/img/produtos/camiseta.jpg',
            descricao: 'Camiseta em tecido dry-fit, leve e respirável. Ideal para treinos intensos.',
            destaque: true
        },
        {
            id: 6,
            nome: 'Regata Performance',
            categoria: 'Vestuário',
            categoriaSlug: 'vestuario',
            preco: 49.90,
            imagem: '/img/produtos/regata.jpg',
            descricao: 'Regata em tecido leve e respirável, com tecnologia anti-odor.',
            destaque: false
        },
        {
            id: 7,
            nome: 'Shorts Esportivo',
            categoria: 'Vestuário',
            categoriaSlug: 'vestuario',
            preco: 69.90,
            imagem: '/img/produtos/shorts.jpg',
            descricao: 'Shorts esportivo com tecido leve e bolsos laterais. Confortável para qualquer atividade física.',
            destaque: true
        },
        {
            id: 8,
            nome: 'Legging Compressão',
            categoria: 'Vestuário',
            categoriaSlug: 'vestuario',
            preco: 89.90,
            imagem: '/img/produtos/legging.jpg',
            descricao: 'Legging de compressão que melhora a circulação e oferece suporte muscular durante o treino.',
            destaque: false
        },
        {
            id: 9,
            nome: 'Café Especial Pré-Treino',
            categoria: 'Produtos de Café',
            categoriaSlug: 'cafe',
            preco: 39.90,
            imagem: '/img/produtos/cafe-pre-treino.jpg',
            descricao: 'Café especial com torra média, ideal para consumo antes do treino. Rico em antioxidantes e cafeína natural.',
            destaque: true
        },
        {
            id: 10,
            nome: 'Café Especial Recuperação',
            categoria: 'Produtos de Café',
            categoriaSlug: 'cafe',
            preco: 39.90,
            imagem: '/img/produtos/cafe-recuperacao.jpg',
            descricao: 'Café especial com torra clara, ideal para consumo após o treino. Auxilia na recuperação muscular.',
            destaque: false
        },
        {
            id: 11,
            nome: 'Kit Café Atleta',
            categoria: 'Produtos de Café',
            categoriaSlug: 'cafe',
            preco: 99.90,
            imagem: '/img/produtos/kit-cafe.jpg',
            descricao: 'Kit com três tipos de café especial para atletas: pré-treino, durante o treino e recuperação.',
            destaque: true
        },
        {
            id: 12,
            nome: 'Caneca Térmica',
            categoria: 'Produtos de Café',
            categoriaSlug: 'cafe',
            preco: 49.90,
            imagem: '/img/produtos/caneca.jpg',
            descricao: 'Caneca térmica que mantém seu café quente por até 6 horas. Ideal para levar para a academia.',
            destaque: false
        }
    ];

    // Função para formatar preço em Real
    function formatarPreco(preco) {
        return preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }

    // Função para criar card de produto
    function criarCardProduto(produto) {
        return `
            <div class="produto-card">
                <div class="produto-img">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                </div>
                <h3>${produto.nome}</h3>
                <div class="produto-categoria">${produto.categoria}</div>
                <div class="produto-preco">${formatarPreco(produto.preco)}</div>
                <a href="/produtos/produto-detalhe.html?id=${produto.id}" class="btn-produto">Ver detalhes</a>
            </div>
        `;
    }

    // Exibir produtos em destaque na página inicial
    const produtosDestaqueContainer = document.getElementById('produtos-destaque');
    if (produtosDestaqueContainer) {
        const produtosDestaque = produtos.filter(produto => produto.destaque);
        let html = '';
        
        // Limitar a 4 produtos em destaque
        const produtosExibir = produtosDestaque.slice(0, 4);
        
        produtosExibir.forEach(produto => {
            html += criarCardProduto(produto);
        });
        
        produtosDestaqueContainer.innerHTML = html;
    }

    // Exibir produtos por categoria
    const produtosCategoriaContainer = document.getElementById('produtos-categoria');
    if (produtosCategoriaContainer) {
        // Obter a categoria da URL
        const paginaAtual = window.location.pathname;
        let categoriaAtual = '';
        
        if (paginaAtual.includes('suplementos.html')) {
            categoriaAtual = 'suplementos';
        } else if (paginaAtual.includes('vestuario.html')) {
            categoriaAtual = 'vestuario';
        } else if (paginaAtual.includes('cafe.html')) {
            categoriaAtual = 'cafe';
        }
        
        if (categoriaAtual) {
            const produtosCategoria = produtos.filter(produto => produto.categoriaSlug === categoriaAtual);
            let html = '';
            
            produtosCategoria.forEach(produto => {
                html += criarCardProduto(produto);
            });
            
            produtosCategoriaContainer.innerHTML = html;
        }
    }

    // Funcionalidade de ordenação
    const selectOrdenar = document.getElementById('ordenar');
    if (selectOrdenar && produtosCategoriaContainer) {
        selectOrdenar.addEventListener('change', function() {
            const valorSelecionado = this.value;
            const paginaAtual = window.location.pathname;
            let categoriaAtual = '';
            
            if (paginaAtual.includes('suplementos.html')) {
                categoriaAtual = 'suplementos';
            } else if (paginaAtual.includes('vestuario.html')) {
                categoriaAtual = 'vestuario';
            } else if (paginaAtual.includes('cafe.html')) {
                categoriaAtual = 'cafe';
            }
            
            if (categoriaAtual) {
                let produtosCategoria = produtos.filter(produto => produto.categoriaSlug === categoriaAtual);
                
                // Ordenar produtos
                switch (valorSelecionado) {
                    case 'menor-preco':
                        produtosCategoria.sort((a, b) => a.preco - b.preco);
                        break;
                    case 'maior-preco':
                        produtosCategoria.sort((a, b) => b.preco - a.preco);
                        break;
                    case 'nome-az':
                        produtosCategoria.sort((a, b) => a.nome.localeCompare(b.nome));
                        break;
                    case 'nome-za':
                        produtosCategoria.sort((a, b) => b.nome.localeCompare(a.nome));
                        break;
                    default:
                        // Relevância (padrão)
                        break;
                }
                
                let html = '';
                produtosCategoria.forEach(produto => {
                    html += criarCardProduto(produto);
                });
                
                produtosCategoriaContainer.innerHTML = html;
            }
        });
    }
});
