document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.testimonial-carousel');

    let isMouseDown = false;
    let startX;
    let scrollLeft;

    // Função para ativar a rolagem com o mouse
    carousel.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isMouseDown = false;
    });

    carousel.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return; // Se o botão do mouse não estiver pressionado, não faça nada
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; // Aumenta a velocidade de rolagem
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Função para controlar a rolagem com as setas
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            carousel.scrollBy({ left: 300, behavior: 'smooth' }); // Desloca para a direita
        }
        if (e.key === 'ArrowLeft') {
            carousel.scrollBy({ left: -300, behavior: 'smooth' }); // Desloca para a esquerda
        }
    });
});


const swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
});
// Initialize carousel to show the first item
changeCarousel();

// Set an interval to change items every 3 seconds
setInterval(changeCarousel, 3000);

function changeCarousel() {
    // Remove a classe active de todos os itens
    items.forEach(item => item.classList.remove('active'));

    // Adiciona a classe active ao item atual
    items[currentIndex].classList.add('active');

    // Atualiza o índice para o próximo item
    currentIndex = (currentIndex + 1) % totalItems;
}