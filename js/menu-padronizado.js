// Menu Padronizado
document.addEventListener('DOMContentLoaded', function() {
    // Inserir o menu de navegação
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.innerHTML = `
            <div class="container">
                <div class="logo">
                    <a href="/index.html">
                        <img src="/img/logo.png" alt="Centro de Treinamento">
                    </a>
                </div>
                
                <div class="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <ul class="nav-menu">
                    <li><a href="/index.html" class="nav-link">Home</a></li>
                    <li><a href="/sobre.html" class="nav-link">Sobre</a></li>
                    <li><a href="/modalidades.html" class="nav-link">Modalidades</a></li>
                    <li><a href="/produtos/index.html" class="nav-link">Produtos</a></li>
                    <li><a href="/contato.html" class="nav-link">Contato</a></li>
                </ul>
            </div>
        `;
        
        // Marcar o link ativo com base na URL atual
        const currentPage = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            
            // Verificar se é a página atual ou uma subpágina
            if (currentPage === linkPath || 
                (linkPath !== '/index.html' && currentPage.includes(linkPath.replace('.html', '')))) {
                link.classList.add('active');
            }
        });
        
        // Funcionalidade do menu mobile
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Fechar menu ao clicar em um link (mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});
