// Selecciona todos los elementos con la clase 'ml3'
/* var textWrappers = document.querySelectorAll('.ml3');

// Itera sobre cada elemento y aplica las animaciones
textWrappers.forEach(function (textWrapper) {
    // Envuelve cada letra en un span
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    // Aplica la animación con Anime.js
    anime.timeline({ loop: true })
        .add({
            targets: textWrapper.querySelectorAll('.letter'),
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 800,
            delay: (el, i) => 150 * (i + 1)
        })
        .add({
            targets: textWrapper,
            opacity: 0,
            duration: 900,
            easing: "easeOutExpo",
            delay: 900
        });
}); */


document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'slide', // Efecto deslizante clásico
        speed: 1200, // Velocidad lenta para un deslizamiento más elegante
        spaceBetween: 30, // Espacio entre las diapositivas
        grabCursor: true, // Mejora la experiencia del usuario con el cursor
        slideToClickedSlide: true, // Permite navegar al hacer clic en las diapositivas
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Arreglo con las frases a mostrar
    const frases = [
        '"Hello World! Todo empieza aquí."',
        '"El café es el combustible que convierte las líneas de código en magia."',
        '¿Por qué el programador fue al médico?<br>Porque tenía un bug en el sistema digestivo.',
        '"Detrás de cada gran línea de código, hay una taza de café vacía."'
    ];

    // Selecciona el elemento donde se mostrará la frase
    const fraseElemento = document.querySelector('.frase');

    let indice = 0; // Índice inicial de las frases

    // Función para cambiar la frase
    function cambiarFrase() {
        // Aplica una clase para el efecto de desvanecimiento
        fraseElemento.classList.remove('visible');
        
        setTimeout(() => {
            // Cambia la frase con un índice cíclico, usando innerHTML para soportar etiquetas HTML
            fraseElemento.innerHTML = frases[indice];
            fraseElemento.classList.add('visible');
            indice = (indice + 1) % frases.length; // Incrementa el índice de forma circular
        }, 500); // Tiempo de espera para el efecto de desvanecimiento
    }

    // Cambia la frase cada 4 segundos (4000 ms)
    setInterval(cambiarFrase, 4000);

    // Inicia mostrando la primera frase
    cambiarFrase();
});

function changeImage(element, activeImage, defaultImage) {
    document.querySelectorAll('.list-group-item').forEach(item => {
        // Remueve la clase active de todos los tabs
        item.classList.remove('active');
        
        const img = item.querySelector('.img-icon');
        if (img) {
            // Restaura la imagen predeterminada
            const defaultSrc = img.getAttribute('data-default-src') || img.src;
            img.src = defaultSrc;

            // Si es el primer tab, restablece a mujer-normal.png
            if (item.id === 'list-home-list') {
                img.src = './assets/img/icons/mujer-normal.png';
            }
        }
    });

    // Establece la clase activa en el tab seleccionado
    element.classList.add('active');
    const img = element.querySelector('.img-icon');
    if (img) {
        img.setAttribute('data-default-src', img.src);
        img.src = `./assets/img/icons/${activeImage}`;
    }
}

// Asegura que el primer tab tenga la imagen activa al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    const firstTab = document.querySelector('.list-group-item.active');
    if (firstTab) {
        const img = firstTab.querySelector('.img-icon');
        if (img) {
            img.setAttribute('data-default-src', img.src);
            img.src = './assets/img/icons/mujer-active.png';
        }
    }
});






