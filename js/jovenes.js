document.addEventListener('DOMContentLoaded', function() {
            const bloquesAnimados = document.querySelectorAll('.bloque-animado');

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.3
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('activo');
                    } else {
                     
                    }
                });
            }, observerOptions);

            bloquesAnimados.forEach(bloque => {
                observer.observe(bloque);
            });
        });
