// Formulário de Contato e Newsletter
document.addEventListener('DOMContentLoaded', function() {
    // Formulário de contato
    const formContato = document.getElementById('form-contato');
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter dados do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone') ? document.getElementById('telefone').value : '';
            const assunto = document.getElementById('assunto') ? document.getElementById('assunto').value : 'Contato via site';
            const mensagem = document.getElementById('mensagem').value;
            
            // Aqui você enviaria os dados para um servidor
            // Como é apenas uma demonstração, vamos simular o envio
            
            // Exibir mensagem de sucesso
            const formContainer = formContato.parentElement;
            formContainer.innerHTML = `
                <div class="mensagem-sucesso">
                    <i class="fas fa-check-circle"></i>
                    <h3>Mensagem enviada com sucesso!</h3>
                    <p>Obrigado por entrar em contato, ${nome}. Responderemos em breve para o e-mail ${email}.</p>
                </div>
            `;
            
            // Rolar para a mensagem de sucesso
            formContainer.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Formulário de newsletter
    const formNewsletter = document.getElementById('form-newsletter');
    if (formNewsletter) {
        formNewsletter.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter e-mail
            const email = formNewsletter.querySelector('input[type="email"]').value;
            
            // Aqui você enviaria o e-mail para um servidor
            // Como é apenas uma demonstração, vamos simular o envio
            
            // Exibir mensagem de sucesso
            const mensagemSucesso = document.createElement('div');
            mensagemSucesso.className = 'newsletter-sucesso';
            mensagemSucesso.innerHTML = `
                <p>E-mail cadastrado com sucesso!</p>
            `;
            
            // Substituir o formulário pela mensagem
            formNewsletter.parentElement.appendChild(mensagemSucesso);
            formNewsletter.style.display = 'none';
            
            // Restaurar o formulário após 3 segundos
            setTimeout(function() {
                formNewsletter.reset();
                formNewsletter.style.display = 'flex';
                mensagemSucesso.remove();
            }, 3000);
        });
    }
    
    // Funcionalidade do FAQ (na página de contato)
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const pergunta = item.querySelector('.faq-pergunta');
            const resposta = item.querySelector('.faq-resposta');
            const icon = item.querySelector('.faq-icon i');
            
            // Inicialmente, todas as respostas estão ocultas
            resposta.style.display = 'none';
            
            pergunta.addEventListener('click', () => {
                // Fechar outros itens
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.querySelector('.faq-resposta').style.display = 'none';
                        otherItem.querySelector('.faq-icon i').classList.remove('fa-minus');
                        otherItem.querySelector('.faq-icon i').classList.add('fa-plus');
                    }
                });
                
                // Alternar o item atual
                if (resposta.style.display === 'block') {
                    resposta.style.display = 'none';
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                } else {
                    resposta.style.display = 'block';
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                }
            });
        });
    }
    
    // Máscara para campo de telefone
    const inputTelefone = document.getElementById('telefone');
    if (inputTelefone) {
        inputTelefone.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 11) {
                value = value.substring(0, 11);
            }
            
            if (value.length > 7) {
                value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/^(\d{0,2})/, '($1');
            }
            
            e.target.value = value;
        });
    }
});
