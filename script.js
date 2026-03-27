
//alert('Bem-vindo à Netflix!');
// alerta teste

// Função para alternar entre dark e light mode
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');

    // Alterna a classe 'light-mode' no body
    body.classList.toggle('light-mode');

    // Atualiza o ícone do botão
    if (body.classList.contains('light-mode')) {
        themeIcon.textContent = '☀️'; // Sol para light mode
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.textContent = '🌙'; // Lua para dark mode
        localStorage.setItem('theme', 'dark');
    }
}

// Função para carregar o tema salvo
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');

    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeIcon.textContent = '☀️';
    } else {
        body.classList.remove('light-mode');
        themeIcon.textContent = '🌙';
    }
}

// Event listener para o botão de toggle
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');

    // Carrega o tema salvo ao carregar a página
    loadTheme();

    // Adiciona o event listener para o clique no toggle de tema
    themeToggle.addEventListener('click', toggleTheme);

    // Adiciona event listeners para os perfis
    const profileLinks = document.querySelectorAll('.profile a');
    profileLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Obtém os dados do perfil clicado
            const profileImg = this.querySelector('img');
            const profileName = this.querySelector('p').textContent;
            const profileImageSrc = profileImg.src;

            // Armazena no localStorage (compatível com catalogo.html)
            localStorage.setItem('perfilAtivoNome', profileName);
            localStorage.setItem('perfilAtivoImagem', profileImageSrc);

            // O link já redireciona para catalogo.html devido ao href
        });
    });
});