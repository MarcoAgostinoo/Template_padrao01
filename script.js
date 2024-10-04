

// Lógica para alternar entre os temas
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    toggleButton.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        // Altera o atributo do tema
        htmlElement.setAttribute('data-bs-theme', newTheme);

        // Muda o ícone do botão
        toggleButton.innerHTML = newTheme === 'dark'
            ? '<i class="fas fa-moon"></i>' // Meia-lua
            : '<i class="fas fa-sun"></i>'; // Sol
    });
});


// Lógica para o FAQ customizado
document.querySelectorAll('.custom-faq-item input[type="checkbox"]').forEach(checkbox => {
    const icon = checkbox.nextElementSibling.querySelector('.faq-icon');

    // Define o ícone inicial
    icon.textContent = '+';

    checkbox.addEventListener('change', () => {
        icon.textContent = checkbox.checked ? '-' : '+';
    });
});

// fixar o menu no topo do site
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function () {
        let header = document.querySelector('#header');
        header.classList.toggle('rolagem', window.scrollY > 60);
    });
});

// fixar os itens do menu-humburger a esquerda ao abrir
document.addEventListener("DOMContentLoaded", function() {
    const toggler = document.querySelector('.navbar-toggler');
    const navItems = document.querySelector('.navbar-nav');

    toggler.addEventListener('click', function() {
        navItems.classList.toggle('open'); // Adiciona ou remove a classe 'open'
    });
});


// configuração dos cookies
document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookies = document.getElementById('accept-cookies');
    const declineCookies = document.getElementById('decline-cookies');

    // Verifica se o consentimento já foi dado
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'block';
    }

    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
    });

    declineCookies.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'false');
        cookieBanner.style.display = 'none';
    });
});
