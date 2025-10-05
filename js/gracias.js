 // Crear partículas de fondo
        function createParticles() {
            const container = document.getElementById('particles-container');
            const particleCount = window.innerWidth < 768 ? 25 : 40;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Tamaño aleatorio responsivo
                const size = Math.random() * (window.innerWidth < 768 ? 4 : 6) + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Posición inicial aleatoria
                particle.style.left = `${Math.random() * 100}%`;
                
                // Duración y delay aleatorios
                const duration = Math.random() * 15 + 10;
                const delay = Math.random() * 5;
                particle.style.animationDuration = `${duration}s`;
                particle.style.animationDelay = `${delay}s`;
                
                container.appendChild(particle);
            }
        }
        
        // Efecto de confeti mejorado
        function createConfetti() {
            const colors = ['#6C63FF', '#4A43B7', '#FF6B9D', '#00D4AA', '#8A84FF', '#FF8FB1', '#2EFFD2'];
            const confettiCount = window.innerWidth < 768 ? 60 : 100;
            
            for (let i = 0; i < confettiCount; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.style.position = 'fixed';
                    confetti.style.width = `${Math.random() * (window.innerWidth < 768 ? 10 : 15) + 5}px`;
                    confetti.style.height = `${Math.random() * (window.innerWidth < 768 ? 10 : 15) + 5}px`;
                    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.left = `${Math.random() * 100}%`;
                    confetti.style.top = '-30px';
                    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
                    confetti.style.zIndex = '9999';
                    confetti.style.opacity = '0.9';
                    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                    
                    document.body.appendChild(confetti);
                    
                    // Animación
                    const animation = confetti.animate([
                        { 
                            opacity: 1,
                            transform: `translateY(0) translateX(0) rotate(0deg)`,
                        },
                        { 
                            opacity: 0.8,
                            transform: `translateY(${window.innerHeight/2}px) translateX(${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg)`,
                        },
                        { 
                            opacity: 0,
                            transform: `translateY(${window.innerHeight}px) translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 720}deg)`,
                        }
                    ], {
                        duration: Math.random() * 3000 + 2000,
                        easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
                    });
                    
                    animation.onfinish = () => {
                        confetti.remove();
                    };
                }, i * (window.innerWidth < 768 ? 40 : 30));
            }
        }
        
        // Efecto de escritura para el título
        function typeWriterEffect() {
            const title = document.querySelector('.success-card h1');
            const originalText = title.textContent;
            title.textContent = '';
            
            let i = 0;
            const typeWriter = setInterval(() => {
                if (i < originalText.length) {
                    title.textContent += originalText.charAt(i);
                    i++;
                } else {
                    clearInterval(typeWriter);
                }
            }, 80);
        }
        
        // Redimensionar elementos en tiempo real
        function handleResize() {
            // Recrear partículas si el tamaño cambia significativamente
            const particlesContainer = document.getElementById('particles-container');
            if (particlesContainer) {
                particlesContainer.innerHTML = '';
                createParticles();
            }
        }
        
        // Inicializar efectos cuando la página cargue
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            createConfetti();
            typeWriterEffect();
            
            // Redimensionar en cambio de orientación o tamaño
            window.addEventListener('resize', handleResize);
            window.addEventListener('orientationchange', handleResize);
        });