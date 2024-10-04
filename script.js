// Lógica para alternar entre os temas
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

// Lógica para o FAQ customizado
document.querySelectorAll('.custom-faq-item input[type="checkbox"]').forEach(checkbox => {
    const icon = checkbox.nextElementSibling.querySelector('.faq-icon');

    // Define o ícone inicial
    icon.textContent = '+';
  
    checkbox.addEventListener('change', () => {
        icon.textContent = checkbox.checked ? '-' : '+';
    });
});

