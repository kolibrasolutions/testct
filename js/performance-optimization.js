// Otimização de performance para o site CT Team Abu
document.addEventListener('DOMContentLoaded', function() {
    // Lazy loading para imagens
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                    }
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback para navegadores que não suportam IntersectionObserver
        let lazyLoadThrottleTimeout;
        
        function lazyLoad() {
            if (lazyLoadThrottleTimeout) {
                clearTimeout(lazyLoadThrottleTimeout);
            }
            
            lazyLoadThrottleTimeout = setTimeout(function() {
                const scrollTop = window.pageYOffset;
                
                lazyImages.forEach(img => {
                    if (img.offsetTop < window.innerHeight + scrollTop) {
                        img.src = img.dataset.src;
                        if (img.dataset.srcset) {
                            img.srcset = img.dataset.srcset;
                        }
                        img.classList.add('loaded');
                    }
                });
                
                if (lazyImages.length === 0) {
                    document.removeEventListener('scroll', lazyLoad);
                    window.removeEventListener('resize', lazyLoad);
                    window.removeEventListener('orientationChange', lazyLoad);
                }
            }, 20);
        }
        
        document.addEventListener('scroll', lazyLoad);
        window.addEventListener('resize', lazyLoad);
        window.addEventListener('orientationChange', lazyLoad);
    }
    
    // Otimização de animações
    const optimizeAnimations = function() {
        // Verificar se a página está visível
        if (document.hidden) {
            document.querySelectorAll('.animated').forEach(el => {
                el.style.animationPlayState = 'paused';
            });
        } else {
            document.querySelectorAll('.animated').forEach(el => {
                el.style.animationPlayState = 'running';
            });
        }
        
        // Verificar se está em modo de economia de bateria
        if (navigator.getBattery) {
            navigator.getBattery().then(battery => {
                if (battery.charging === false && battery.level < 0.2) {
                    document.body.classList.add('reduce-animations');
                } else {
                    document.body.classList.remove('reduce-animations');
                }
            });
        }
    };
    
    // Executar otimização de animações
    optimizeAnimations();
    document.addEventListener('visibilitychange', optimizeAnimations);
    
    // Debounce para eventos de scroll e resize
    const debounce = function(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    
    // Aplicar debounce aos eventos de scroll
    const scrollHandlers = document.querySelectorAll('[data-scroll-handler]');
    scrollHandlers.forEach(handler => {
        const originalHandler = window[handler.dataset.scrollHandler];
        if (typeof originalHandler === 'function') {
            window[handler.dataset.scrollHandler] = debounce(originalHandler, 100);
        }
    });
    
    // Otimização de carregamento de fontes
    if ('fonts' in document) {
        // Precarregar fontes críticas
        Promise.all([
            document.fonts.load('1em Poppins'),
            document.fonts.load('1em Montserrat'),
            document.fonts.load('1em Orbitron')
        ]).then(() => {
            document.documentElement.classList.add('fonts-loaded');
        });
    }
    
    // Otimização de efeitos de partículas
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        // Reduzir número de partículas em dispositivos móveis
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 20 : 50;
        
        // Limitar taxa de criação de partículas
        const createParticleThrottled = debounce(function() {
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
            
            particle.style.animation = `float ${duration}s linear infinite`;
            
            // Remover após um tempo
            setTimeout(() => {
                particle.remove();
            }, duration * 1000);
        }, 200);
        
        // Criar partículas iniciais
        for (let i = 0; i < particleCount; i++) {
            createParticleThrottled();
        }
        
        // Criar novas partículas periodicamente
        setInterval(createParticleThrottled, isMobile ? 1000 : 500);
    }
    
    // Otimização de carregamento de scripts
    const loadScriptsAsync = function() {
        const scripts = document.querySelectorAll('script[data-src]');
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            newScript.src = script.dataset.src;
            newScript.async = true;
            document.body.appendChild(newScript);
            script.remove();
        });
    };
    
    // Carregar scripts não críticos após o carregamento da página
    if (window.requestIdleCallback) {
        requestIdleCallback(loadScriptsAsync);
    } else {
        setTimeout(loadScriptsAsync, 1000);
    }
    
    // Otimização de imagens de fundo
    const optimizeBackgroundImages = function() {
        const bgElements = document.querySelectorAll('[data-bg]');
        bgElements.forEach(el => {
            const isMobile = window.innerWidth < 768;
            const bgUrl = isMobile ? el.dataset.bgMobile || el.dataset.bg : el.dataset.bg;
            el.style.backgroundImage = `url(${bgUrl})`;
        });
    };
    
    // Executar otimização de imagens de fundo
    optimizeBackgroundImages();
    window.addEventListener('resize', debounce(optimizeBackgroundImages, 200));
    
    // Prefetch para páginas comuns
    const prefetchPages = function() {
        const links = [
            '/index.html',
            '/sobre.html',
            '/modalidades.html',
            '/produtos/index.html',
            '/contato.html'
        ];
        
        links.forEach(link => {
            const prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = link;
            document.head.appendChild(prefetchLink);
        });
    };
    
    // Executar prefetch após carregamento da página
    if (window.requestIdleCallback) {
        requestIdleCallback(prefetchPages);
    } else {
        setTimeout(prefetchPages, 2000);
    }
    
    // Otimização de formulários
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        // Validação de formulário do lado do cliente
        form.addEventListener('submit', function(e) {
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                const errorMessage = document.createElement('div');
                errorMessage.className = 'form-error';
                errorMessage.textContent = 'Por favor, preencha todos os campos obrigatórios.';
                
                // Remover mensagens de erro anteriores
                const oldError = form.querySelector('.form-error');
                if (oldError) {
                    oldError.remove();
                }
                
                form.prepend(errorMessage);
            }
        });
    });
    
    // Otimização de carregamento de vídeos
    const videoContainers = document.querySelectorAll('.video-container');
    videoContainers.forEach(container => {
        const videoThumbnail = container.querySelector('.video-thumbnail');
        const videoIframe = container.querySelector('iframe');
        
        if (videoThumbnail && videoIframe) {
            videoThumbnail.addEventListener('click', function() {
                videoIframe.src = videoIframe.dataset.src;
                videoThumbnail.style.display = 'none';
                videoIframe.style.display = 'block';
            });
        }
    });
    
    // Detecção de conexão lenta
    if ('connection' in navigator) {
        const connection = navigator.connection;
        
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
            document.body.classList.add('slow-connection');
            
            // Desativar animações pesadas
            document.querySelectorAll('.heavy-animation').forEach(el => {
                el.classList.remove('heavy-animation');
            });
            
            // Carregar imagens de menor resolução
            document.querySelectorAll('img[data-low-src]').forEach(img => {
                img.dataset.src = img.dataset.lowSrc;
            });
        }
        
        // Monitorar mudanças na conexão
        connection.addEventListener('change', function() {
            if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
                document.body.classList.add('slow-connection');
            } else {
                document.body.classList.remove('slow-connection');
            }
        });
    }
    
    // Otimização de cache para recursos estáticos
    if ('caches' in window) {
        const cacheName = 'ct-team-abu-static-v1';
        const urlsToCache = [
            '/css/modern-style.css',
            '/css/animations.css',
            '/css/responsive.css',
            '/js/modern-animations.js',
            '/js/performance-optimization.js',
            '/img/logo.png',
            '/img/favicon.png'
        ];
        
        caches.open(cacheName).then(cache => {
            cache.addAll(urlsToCache);
        });
    }
});
