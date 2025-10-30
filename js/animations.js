// Animações de comemoração (5 animações) - Versão otimizada e suave
const CELEBRATION_ANIMATIONS = [
    {
        name: "calendar-flip",
        rarity: "common",
        svg: `<svg viewBox="0 0 200 200" class="animation-svg anim-bounce">
            <defs>
                <linearGradient id="calendarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#4169E1;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#1E90FF;stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect x="60" y="50" width="80" height="100" rx="5" fill="url(#calendarGrad)" stroke="#FFD700" stroke-width="3"/>
            <rect x="60" y="50" width="80" height="20" fill="#FFD700"/>
            <circle cx="75" cy="60" r="3" fill="#1E90FF"/>
            <circle cx="125" cy="60" r="3" fill="#1E90FF"/>
            <text x="100" y="95" text-anchor="middle" fill="#FFF" font-size="32" font-weight="bold">15</text>
            <text x="100" y="125" text-anchor="middle" fill="#FFF" font-size="14">JAN</text>
        </svg>`,
        message: "Acertou a data!"
    },
    {
        name: "sun-moon",
        rarity: "common",
        svg: `<svg viewBox="0 0 200 200" class="animation-svg anim-rotate-slow">
            <defs>
                <radialGradient id="sunGrad">
                    <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#FFA500;stop-opacity:0.5" />
                </radialGradient>
            </defs>
            <circle cx="80" cy="100" r="35" fill="url(#sunGrad)" class="anim-pulse"/>
            <circle cx="120" cy="100" r="30" fill="#C0C0C0" opacity="0.8"/>
            <circle cx="115" cy="95" r="30" fill="#E8E8E8"/>
            <line x1="80" y1="50" x2="80" y2="65" stroke="#FFD700" stroke-width="3"/>
            <line x1="80" y1="135" x2="80" y2="150" stroke="#FFD700" stroke-width="3"/>
            <line x1="30" y1="100" x2="45" y2="100" stroke="#FFD700" stroke-width="3"/>
            <line x1="115" y1="100" x2="130" y2="100" stroke="#FFD700" stroke-width="3"/>
        </svg>`,
        message: "Equilíbrio Solar e Lunar!"
    },
    {
        name: "world-clock",
        rarity: "common",
        svg: `<svg viewBox="0 0 200 200" class="animation-svg anim-rotate-slow">
            <circle cx="100" cy="100" r="70" fill="none" stroke="#4169E1" stroke-width="4"/>
            <circle cx="100" cy="100" r="60" fill="none" stroke="#1E90FF" stroke-width="2"/>
            <g class="anim-rotate">
                <line x1="100" y1="100" x2="100" y2="50" stroke="#FFD700" stroke-width="4"/>
                <line x1="100" y1="100" x2="130" y2="100" stroke="#DC143C" stroke-width="3"/>
            </g>
            <circle cx="100" cy="100" r="8" fill="#FFD700" class="anim-pulse"/>
            <text x="100" y="40" text-anchor="middle" fill="#FFD700" font-size="16" font-weight="bold">12</text>
            <text x="160" y="105" text-anchor="middle" fill="#CBD5E1" font-size="16">3</text>
            <text x="100" y="170" text-anchor="middle" fill="#CBD5E1" font-size="16">6</text>
            <text x="40" y="105" text-anchor="middle" fill="#CBD5E1" font-size="16">9</text>
        </svg>`,
        message: "Pontual como um relógio!"
    },
    {
        name: "cultural-celebration",
        rarity: "rare",
        svg: `<svg viewBox="0 0 200 200" class="animation-svg">
            <defs>
                <radialGradient id="celebGlow">
                    <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#FF4500;stop-opacity:0" />
                </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="90" fill="url(#celebGlow)" opacity="0.3" class="anim-pulse"/>
            <g class="anim-bounce">
                <text x="100" y="120" text-anchor="middle" font-size="60">🌍</text>
            </g>
            <g class="anim-rotate">
                <circle cx="50" cy="50" r="5" fill="#FFD700"/>
                <circle cx="150" cy="50" r="5" fill="#DC143C"/>
                <circle cx="150" cy="150" r="5" fill="#4169E1"/>
                <circle cx="50" cy="150" r="5" fill="#32CD32"/>
            </g>
        </svg>`,
        message: "Extraordinário! Sabedoria Global!"
    },
    {
        name: "legendary-time",
        rarity: "legendary",
        svg: `<svg viewBox="0 0 200 200" class="animation-svg">
            <defs>
                <radialGradient id="timeGlow">
                    <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#4169E1;stop-opacity:0.8" />
                    <stop offset="100%" style="stop-color:#9370DB;stop-opacity:0" />
                </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="95" fill="url(#timeGlow)" class="anim-glow"/>
            <g class="anim-rotate-fast">
                <line x1="100" y1="30" x2="100" y2="60" stroke="#FFD700" stroke-width="4"/>
                <line x1="141" y1="59" x2="121" y2="79" stroke="#DC143C" stroke-width="4"/>
                <line x1="170" y1="100" x2="140" y2="100" stroke="#FFD700" stroke-width="4"/>
                <line x1="141" y1="141" x2="121" y2="121" stroke="#DC143C" stroke-width="4"/>
                <line x1="100" y1="170" x2="100" y2="140" stroke="#FFD700" stroke-width="4"/>
                <line x1="59" y1="141" x2="79" y2="121" stroke="#DC143C" stroke-width="4"/>
                <line x1="30" y1="100" x2="60" y2="100" stroke="#FFD700" stroke-width="4"/>
                <line x1="59" y1="59" x2="79" y2="79" stroke="#DC143C" stroke-width="4"/>
            </g>
            <text x="100" y="110" text-anchor="middle" fill="#FFF" font-size="28" font-weight="bold">⏰</text>
        </svg>`,
        message: "PERFEITO! Mestre do Tempo!"
    }
];

// Animações de consolo (5 animações) - Versão otimizada e suave
const CONSOLATION_ANIMATIONS = [
    {
        name: "confused-calendar",
        frequency: 0.50, // 50%
        svg: `<svg viewBox="0 0 200 200" class="animation-svg anim-wobble">
            <rect x="60" y="60" width="80" height="90" rx="5" fill="#FFE4B5" stroke="#FF8C00" stroke-width="3"/>
            <rect x="60" y="60" width="80" height="18" fill="#FF8C00"/>
            <text x="100" y="110" text-anchor="middle" font-size="50">❓</text>
            <circle cx="75" cy="70" r="3" fill="#FFE4B5"/>
            <circle cx="125" cy="70" r="3" fill="#FFE4B5"/>
        </svg>`,
        message: "Ops! Revise os calendários..."
    },
    {
        name: "cloudy-time",
        frequency: 0.30, // 30%
        svg: `<svg viewBox="0 0 200 200" class="animation-svg anim-wobble">
            <circle cx="80" cy="80" r="30" fill="#FFD700" opacity="0.5"/>
            <ellipse cx="120" cy="100" rx="50" ry="35" fill="#A9A9A9" opacity="0.8" class="anim-pulse"/>
            <ellipse cx="90" cy="110" rx="45" ry="30" fill="#B0C4DE" opacity="0.7" class="anim-pulse"/>
            <text x="100" y="160" text-anchor="middle" fill="#666" font-size="18">Tempo nublado...</text>
        </svg>`,
        message: "Confuso! Tente de novo..."
    },
    {
        name: "broken-clock",
        frequency: 0.15, // 15%
        svg: `<svg viewBox="0 0 200 200" class="animation-svg anim-rotate">
            <circle cx="100" cy="100" r="60" fill="none" stroke="#CD5C5C" stroke-width="4" stroke-dasharray="10,5"/>
            <line x1="100" y1="100" x2="100" y2="60" stroke="#8B0000" stroke-width="3" opacity="0.5"/>
            <line x1="100" y1="100" x2="130" y2="130" stroke="#8B0000" stroke-width="3" opacity="0.5"/>
            <line x1="95" y1="70" x2="105" y2="60" stroke="#000" stroke-width="3"/>
            <circle cx="100" cy="100" r="6" fill="#CD5C5C"/>
            <text x="100" y="25" text-anchor="middle" fill="#CD5C5C" font-size="20" font-weight="bold">!</text>
        </svg>`,
        message: "Relógio quebrado! Continue tentando..."
    },
    {
        name: "falling-page",
        frequency: 0.03, // 3%
        svg: `<svg viewBox="0 0 200 200" class="animation-svg">
            <g class="anim-float">
                <rect x="80" y="60" width="40" height="50" rx="2" fill="#FFF" stroke="#999" stroke-width="2"/>
                <line x1="85" y1="70" x2="115" y2="70" stroke="#999" stroke-width="1"/>
                <line x1="85" y1="80" x2="115" y2="80" stroke="#999" stroke-width="1"/>
                <line x1="85" y1="90" x2="115" y2="90" stroke="#999" stroke-width="1"/>
            </g>
            <path d="M100,120 Q95,140 100,160 Q105,140 100,120" stroke="#CCC" stroke-width="2" fill="none" opacity="0.6" stroke-dasharray="3,3"/>
        </svg>`,
        message: "Passou rápido como uma folha!"
    },
    {
        name: "time-chaos",
        frequency: 0.02, // 2%
        svg: `<svg viewBox="0 0 200 200" class="animation-svg">
            <defs>
                <radialGradient id="chaosGrad">
                    <stop offset="0%" style="stop-color:#4B0082;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#8A2BE2;stop-opacity:0.3" />
                </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="70" fill="url(#chaosGrad)" class="anim-pulse"/>
            <g class="anim-wobble">
                <text x="70" y="90" text-anchor="middle" fill="#FFF" font-size="24" transform="rotate(-30 70 90)">⏰</text>
                <text x="130" y="90" text-anchor="middle" fill="#FFF" font-size="24" transform="rotate(30 130 90)">📅</text>
                <text x="100" y="130" text-anchor="middle" fill="#FFF" font-size="24" transform="rotate(-15 100 130)">⌛</text>
            </g>
            <text x="100" y="190" text-anchor="middle" fill="#8A2BE2" font-size="16">Caos temporal!</text>
        </svg>`,
        message: "Caos temporal! Não desista!"
    }
];

// Função para selecionar animação de comemoração baseada nos acertos
function getCelebrationAnimation(correctAnswers, totalQuestions) {
    if (correctAnswers === totalQuestions) {
        // 10/10 - Lendária
        return CELEBRATION_ANIMATIONS.find(anim => anim.rarity === "legendary");
    } else if (correctAnswers === totalQuestions - 1) {
        // 9/10 - Rara
        return CELEBRATION_ANIMATIONS.find(anim => anim.rarity === "rare");
    } else {
        // Comum - escolhe aleatoriamente entre as 3 comuns
        const commonAnims = CELEBRATION_ANIMATIONS.filter(anim => anim.rarity === "common");
        return commonAnims[Math.floor(Math.random() * commonAnims.length)];
    }
}

// Função para selecionar animação de consolo baseada em frequência
function getConsolationAnimation() {
    const rand = Math.random();
    let cumulative = 0;

    for (const anim of CONSOLATION_ANIMATIONS) {
        cumulative += anim.frequency;
        if (rand <= cumulative) {
            return anim;
        }
    }

    // Fallback para a primeira animação
    return CONSOLATION_ANIMATIONS[0];
}

// Função principal para mostrar animação
function showAnimation(isCorrect, correctAnswers = 0, totalQuestions = 10) {
    const container = document.getElementById('animation-container');
    const element = document.getElementById('animation-element');

    if (!container || !element) return;

    let animation;
    if (isCorrect) {
        animation = getCelebrationAnimation(correctAnswers, totalQuestions);
    } else {
        animation = getConsolationAnimation();
    }

    // Limpa conteúdo anterior
    element.innerHTML = '';

    // Adiciona SVG
    element.innerHTML = animation.svg;

    // Adiciona mensagem
    const messageDiv = document.createElement('div');
    messageDiv.className = 'animation-message';
    messageDiv.textContent = animation.message;
    element.appendChild(messageDiv);

    // Mostra container
    container.classList.remove('hidden');
    container.classList.add('visible');

    // Esconde após 2.5 segundos
    setTimeout(() => {
        container.classList.remove('visible');
        container.classList.add('hidden');
    }, 2500);
}
