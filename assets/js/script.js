// Selecciona todos los elementos con la clase 'ml3'
var textWrappers = document.querySelectorAll('.ml3');

// Itera sobre cada elemento y aplica las animaciones
textWrappers.forEach(function (textWrapper) {
    // Envuelve cada letra en un span
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    // Aplica la animación con Anime.js
    anime.timeline({loop: true})
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
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
});

