// Animações e efeitos modernos para o site CT Team Abu
document.addEventListener('DOMContentLoaded', function() {
    // Animação de elementos ao scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    };
    
    // Executar animação inicial e adicionar evento de scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Efeito de parallax no banner
    const banner = document.querySelector('.banner-principal');
    if (banner) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const bannerBackground = document.querySelector('.banner-background');
            const geometricOverlay = document.querySelector('.geometric-overlay');
            
            if (bannerBackground && geometricOverlay) {
                bannerBackground.style.transform = `translateY(${scrollPosition * 0.4}px)`;
                geometricOverlay.style.transform = `translateY(${scrollPosition * 0.2}px)`;
            }
        });
    }
    
    // Efeito de hover nos cards
    const cards = document.querySelectorAll('.plano-card, .modalidade-card, .produto-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(64, 224, 208, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
        });
    });
    
    // Animação do menu mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Animar os spans do botão toggle
            const spans = navToggle.querySelectorAll('span');
            if (navToggle.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Fechar menu ao clicar em um link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                
                // Resetar os spans do botão toggle
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
    
    // Efeito de digitação para o texto do banner
    const bannerTitle = document.querySelector('.banner-content h1');
    if (bannerTitle) {
        const text = bannerTitle.textContent;
        bannerTitle.innerHTML = '';
        
        let i = 0;
        const typeWriter = function() {
            if (i < text.length) {
                bannerTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
    
    // Contador para números (estatísticas)
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 segundos
        const step = Math.ceil(target / (duration / 20)); // Atualiza a cada 20ms
        
        let current = 0;
        const counterInterval = setInterval(() => {
            current += step;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(counterInterval);
            } else {
                counter.textContent = current;
            }
        }, 20);
    });
    
    // Efeito de partículas no fundo (opcional - pode ser pesado em dispositivos móveis)
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        const createParticle = function() {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Posição aleatória
            const posX = Math.random() * window.innerWidth;
            const posY = Math.random() * window.innerHeight;
            
            // Tamanho aleatório
            const size = Math.random() * 5 + 1;
            
            // Estilo
            particle.style.left = posX + 'px';
            particle.style.top = posY + 'px';
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            
            // Adicionar ao container
            particlesContainer.appendChild(particle);
            
            // Animação
            const duration = Math.random() * 10 + 5;
            const direction = Math.random() > 0.5 ? 1 : -1;
            
            particle.style.animation = `float ${duration}s linear infinite`;
            
            // Remover após um tempo
            setTimeout(() => {
                particle.remove();
            }, duration * 1000);
        };
        
        // Criar partículas iniciais
        for (let i = 0; i < 50; i++) {
            createParticle();
        }
        
        // Criar novas partículas periodicamente
        setInterval(createParticle, 500);
    }
    
    // Efeito de brilho nos preços
    const precos = document.querySelectorAll('.preco-valor, .produto-preco');
    precos.forEach(preco => {
        preco.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 10px rgba(64, 224, 208, 0.8), 0 0 20px rgba(64, 224, 208, 0.5)';
            this.style.color = '#7fffd4';
        });
        
        preco.addEventListener('mouseleave', function() {
            this.style.textShadow = '0 0 10px rgba(64, 224, 208, 0.5)';
            this.style.color = '#40e0d0';
        });
    });
    
    // Efeito de destaque nos botões
    const buttons = document.querySelectorAll('.btn, .btn-produto, .btn-interesse');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 0 10px rgba(64, 224, 208, 0.5), 0 0 20px rgba(64, 224, 208, 0.3)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Modal de interesse em produto
    const modalInteresse = document.getElementById('modal-interesse');
    const btnInteresse = document.querySelector('.btn-interesse');
    const fecharModal = document.querySelector('.fechar-modal');
    
    if (btnInteresse && modalInteresse && fecharModal) {
        btnInteresse.addEventListener('click', function() {
            modalInteresse.style.display = 'flex';
            setTimeout(() => {
                modalInteresse.style.opacity = '1';
            }, 10);
        });
        
        fecharModal.addEventListener('click', function() {
            modalInteresse.style.opacity = '0';
            setTimeout(() => {
                modalInteresse.style.display = 'none';
            }, 300);
        });
        
        window.addEventListener('click', function(event) {
            if (event.target === modalInteresse) {
                modalInteresse.style.opacity = '0';
                setTimeout(() => {
                    modalInteresse.style.display = 'none';
                }, 300);
            }
        });
    }
    
    // Trocar imagem principal na página de produto
    const miniaturas = document.querySelectorAll('.miniatura');
    const imagemPrincipal = document.getElementById('imagem-principal');
    
    if (miniaturas.length > 0 && imagemPrincipal) {
        miniaturas.forEach(miniatura => {
            miniatura.addEventListener('click', function() {
                // Efeito de fade
                imagemPrincipal.style.opacity = '0';
                
                setTimeout(() => {
                    imagemPrincipal.src = this.src;
                    imagemPrincipal.style.opacity = '1';
                }, 300);
                
                // Remover borda ativa de todas as miniaturas
                miniaturas.forEach(m => m.classList.remove('active'));
                
                // Adicionar borda ativa à miniatura clicada
                this.classList.add('active');
            });
        });
    }
    
    // Adicionar efeito de onda ao clicar nos botões
    const addRippleEffect = function(event) {
        const button = event.currentTarget;
        
        // Criar elemento de onda
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        button.appendChild(ripple);
        
        // Posicionar a onda no ponto de clique
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = event.clientX - rect.left - size / 2 + 'px';
        ripple.style.top = event.clientY - rect.top - size / 2 + 'px';
        
        // Remover após a animação
        ripple.addEventListener('animationend', function() {
            ripple.remove();
        });
    };
    
    // Adicionar efeito de onda a todos os botões
    buttons.forEach(button => {
        button.addEventListener('click', addRippleEffect);
    });
    
    // Adicionar efeito de destaque ao scroll para seções
    const highlightSection = function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector(`.nav-menu a[href*=${sectionId}]`)?.classList.add('active');
            } else {
                document.querySelector(`.nav-menu a[href*=${sectionId}]`)?.classList.remove('active');
            }
        });
    };
    
    window.addEventListener('scroll', highlightSection);
    
    // Adicionar funcionalidade de scroll suave para links de navegação
    const smoothScroll = function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            
            const hash = this.hash;
            const targetElement = document.querySelector(hash);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    };
    
    const navLinks = document.querySelectorAll('.nav-menu a[href*="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    
    // Adicionar classe 'scrolled' ao navbar quando rolar a página
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});
