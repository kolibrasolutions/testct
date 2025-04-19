// Dados de exemplo para produtos
const produtos = [
    {
        id: 1,
        nome: 'Whey Protein Isolado',
        categoria: 'Suplementos',
        categoriaSlug: 'suplementos',
        preco: 149.90,
        imagem: '/img/produtos/whey-protein.png',
        imagens: [
            '/img/produtos/whey-protein.png',
            '/img/produtos/whey-protein-2.png',
            '/img/produtos/whey-protein-3.png'
        ],
        descricao: 'Whey Protein Isolado de alta qualidade, com 27g de proteína por dose e baixo teor de gordura e carboidratos.',
        destaque: true
    },
    {
        id: 2,
        nome: 'Creatina Monohidratada',
        categoria: 'Suplementos',
        categoriaSlug: 'suplementos',
        preco: 89.90,
        imagem: '/img/produtos/creatina.png',
        imagens: [
            '/img/produtos/creatina.png',
            '/img/produtos/creatina-2.png',
            '/img/produtos/creatina-3.png'
        ],
        descricao: 'Creatina pura monohidratada, 5g por dose. Auxilia no ganho de força e massa muscular.',
        destaque: true
    },
    {
        id: 3,
        nome: 'BCAA 2:1:1',
        categoria: 'Suplementos',
        categoriaSlug: 'suplementos',
        preco: 69.90,
        imagem: '/img/produtos/bcaa.png',
        imagens: [
            '/img/produtos/bcaa.png',
            '/img/produtos/bcaa-2.png',
            '/img/produtos/bcaa-3.png'
        ],
        descricao: 'BCAA na proporção 2:1:1 (leucina, isoleucina e valina). Auxilia na recuperação muscular.',
        destaque: false
    },
    {
        id: 4,
        nome: 'Pré-Treino Energy',
        categoria: 'Suplementos',
        categoriaSlug: 'suplementos',
        preco: 79.90,
        imagem: '/img/produtos/pre-treino.png',
        imagens: [
            '/img/produtos/pre-treino.png',
            '/img/produtos/pre-treino-2.png',
            '/img/produtos/pre-treino-3.png'
        ],
        descricao: 'Pré-treino com cafeína, beta-alanina e creatina. Aumenta a energia e o foco durante o treino.',
        destaque: true
    },
    {
        id: 5,
        nome: 'Camiseta Dry-Fit',
        categoria: 'Vestuário',
        categoriaSlug: 'vestuario',
        preco: 59.90,
        imagem: '/img/produtos/camiseta.png',
        imagens: [
            '/img/produtos/camiseta.png',
            '/img/produtos/camiseta-2.png',
            '/img/produtos/camiseta-3.png'
        ],
        descricao: 'Camiseta em tecido dry-fit, leve e respirável. Ideal para treinos intensos.',
        destaque: true
    },
    {
        id: 6,
        nome: 'Regata Performance',
        categoria: 'Vestuário',
        categoriaSlug: 'vestuario',
        preco: 49.90,
        imagem: '/img/produtos/regata.png',
        imagens: [
            '/img/produtos/regata.png',
            '/img/produtos/regata-2.png',
            '/img/produtos/regata-3.png'
        ],
        descricao: 'Regata em tecido leve e respirável, com tecnologia anti-odor.',
        destaque: false
    },
    {
        id: 7,
        nome: 'Shorts Esportivo',
        categoria: 'Vestuário',
        categoriaSlug: 'vestuario',
        preco: 69.90,
        imagem: '/img/produtos/shorts.png',
        imagens: [
            '/img/produtos/shorts.png',
            '/img/produtos/shorts-2.png',
            '/img/produtos/shorts-3.png'
        ],
        descricao: 'Shorts esportivo com tecido leve e bolsos laterais. Confortável para qualquer atividade física.',
        destaque: true
    },
    {
        id: 8,
        nome: 'Legging Compressão',
        categoria: 'Vestuário',
        categoriaSlug: 'vestuario',
        preco: 89.90,
        imagem: '/img/produtos/legging.png',
        imagens: [
            '/img/produtos/legging.png',
            '/img/produtos/legging-2.png',
            '/img/produtos/legging-3.png'
        ],
        descricao: 'Legging de compressão que melhora a circulação e oferece suporte muscular durante o treino.',
        destaque: false
    },
    {
        id: 9,
        nome: 'Café Especial Pré-Treino',
        categoria: 'Produtos de Café',
        categoriaSlug: 'cafe',
        preco: 39.90,
        imagem: '/img/produtos/cafe-pre-treino.png',
        imagens: [
            '/img/produtos/cafe-pre-treino.png',
            '/img/produtos/cafe-pre-treino-2.png',
            '/img/produtos/cafe-pre-treino-3.png'
        ],
        descricao: 'Café especial com torra média, ideal para consumo antes do treino. Rico em antioxidantes e cafeína natural.',
        destaque: true
    },
    {
        id: 10,
        nome: 'Café Especial Recuperação',
        categoria: 'Produtos de Café',
        categoriaSlug: 'cafe',
        preco: 39.90,
        imagem: '/img/produtos/cafe-recuperacao.png',
        imagens: [
            '/img/produtos/cafe-recuperacao.png',
            '/img/produtos/cafe-recuperacao-2.png',
            '/img/produtos/cafe-recuperacao-3.png'
        ],
        descricao: 'Café especial com torra clara, ideal para consumo após o treino. Auxilia na recuperação muscular.',
        destaque: false
    },
    {
        id: 11,
        nome: 'Kit Café Atleta',
        categoria: 'Produtos de Café',
        categoriaSlug: 'cafe',
        preco: 99.90,
        imagem: '/img/produtos/kit-cafe.png',
        imagens: [
            '/img/produtos/kit-cafe.png',
            '/img/produtos/kit-cafe-2.png',
            '/img/produtos/kit-cafe-3.png'
        ],
        descricao: 'Kit com três tipos de café especial para atletas: pré-treino, durante o treino e recuperação.',
        destaque: true
    },
    {
        id: 12,
        nome: 'Caneca Térmica',
        categoria: 'Produtos de Café',
        categoriaSlug: 'cafe',
        preco: 49.90,
        imagem: '/img/produtos/caneca.png',
        imagens: [
            '/img/produtos/caneca.png',
            '/img/produtos/caneca-2.png',
            '/img/produtos/caneca-3.png'
        ],
        descricao: 'Caneca térmica que mantém seu café quente por até 6 horas. Ideal para levar para a academia.',
        destaque: false
    }
];

// Exportar os dados para uso em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { produtos };
}
