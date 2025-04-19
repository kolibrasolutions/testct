// Placeholder para imagens de produtos
// Este arquivo cria imagens de placeholder para a vitrine de produtos

document.addEventListener('DOMContentLoaded', function() {
    // Lista de produtos que precisam de imagens
    const produtos = [
        { id: 'whey-protein', nome: 'Whey Protein Isolado' },
        { id: 'creatina', nome: 'Creatina Monohidratada' },
        { id: 'bcaa', nome: 'BCAA 2:1:1' },
        { id: 'pre-treino', nome: 'Pré-Treino Energy' },
        { id: 'camiseta', nome: 'Camiseta Dry-Fit' },
        { id: 'regata', nome: 'Regata Performance' },
        { id: 'shorts', nome: 'Shorts Esportivo' },
        { id: 'legging', nome: 'Legging Compressão' },
        { id: 'cafe-pre-treino', nome: 'Café Especial Pré-Treino' },
        { id: 'cafe-recuperacao', nome: 'Café Especial Recuperação' },
        { id: 'kit-cafe', nome: 'Kit Café Atleta' },
        { id: 'caneca', nome: 'Caneca Térmica' }
    ];

    // Função para criar imagens de placeholder
    function criarImagensPlaceholder() {
        const container = document.createElement('div');
        container.style.display = 'none';
        document.body.appendChild(container);
        
        produtos.forEach(produto => {
            // Criar canvas para a imagem principal
            criarImagemPlaceholder(produto.id, produto.nome, container);
            
            // Criar canvas para as imagens secundárias
            for (let i = 2; i <= 3; i++) {
                criarImagemPlaceholder(`${produto.id}-${i}`, `${produto.nome} ${i}`, container);
            }
        });
        
        // Criar imagens para categorias
        const categorias = [
            { id: 'categoria-suplementos', nome: 'Suplementos' },
            { id: 'categoria-vestuario', nome: 'Vestuário' },
            { id: 'categoria-cafe', nome: 'Produtos de Café' }
        ];
        
        categorias.forEach(categoria => {
            criarImagemPlaceholder(categoria.id, categoria.nome, container, '#3498db');
        });
        
        // Criar imagens para banners
        const banners = [
            { id: 'banner-principal', nome: 'Banner Principal' },
            { id: 'banner-pagina', nome: 'Banner de Página' },
            { id: 'banner-categoria', nome: 'Banner de Categoria' },
            { id: 'banner-produtos', nome: 'Banner de Produtos' },
            { id: 'cta-bg', nome: 'Background CTA' }
        ];
        
        banners.forEach(banner => {
            criarImagemPlaceholder(banner.id, banner.nome, container, '#2c3e50', 1200, 400);
        });
        
        // Criar imagens para depoimentos
        for (let i = 1; i <= 3; i++) {
            criarImagemPlaceholder(`depoimento${i}`, `Depoimento ${i}`, container, '#95a5a6', 100, 100);
        }
        
        // Criar logo
        criarImagemPlaceholder('logo', 'Centro de Treinamento', container, '#004494', 200, 50);
        
        // Criar favicon
        criarImagemPlaceholder('favicon', 'Favicon', container, '#004494', 32, 32);
    }
    
    // Função para criar uma imagem de placeholder individual
    function criarImagemPlaceholder(id, texto, container, corFundo = '#f39c12', largura = 400, altura = 300) {
        const canvas = document.createElement('canvas');
        canvas.width = largura;
        canvas.height = altura;
        const ctx = canvas.getContext('2d');
        
        // Desenhar fundo
        ctx.fillStyle = corFundo;
        ctx.fillRect(0, 0, largura, altura);
        
        // Desenhar texto
        ctx.fillStyle = '#ffffff';
        ctx.font = `bold ${Math.floor(altura/10)}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Quebrar texto em linhas se necessário
        const palavras = texto.split(' ');
        let linhas = [];
        let linhaAtual = '';
        
        for (let palavra of palavras) {
            const testeLinha = linhaAtual + palavra + ' ';
            if (ctx.measureText(testeLinha).width > largura * 0.8) {
                linhas.push(linhaAtual);
                linhaAtual = palavra + ' ';
            } else {
                linhaAtual = testeLinha;
            }
        }
        linhas.push(linhaAtual);
        
        // Desenhar cada linha
        const alturaLinha = Math.floor(altura/10) * 1.2;
        const yInicial = altura/2 - (linhas.length - 1) * alturaLinha / 2;
        
        linhas.forEach((linha, index) => {
            ctx.fillText(linha, largura/2, yInicial + index * alturaLinha);
        });
        
        // Adicionar à página
        canvas.style.display = 'none';
        canvas.id = `canvas-${id}`;
        container.appendChild(canvas);
        
        // Converter para imagem e fazer download
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = `${id}.png`;
        link.style.display = 'none';
        container.appendChild(link);
        link.click();
    }
    
    // Executar a criação de imagens
    criarImagensPlaceholder();
});
