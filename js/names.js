// Sistema de nomes aleatórios com ícones temáticos sobre a Lua
const RANDOM_NAMES = [
    // Fases da Lua
    { name: "Guardião da Lua Cheia", icon: "🌕" },
    { name: "Mestre da Lua Nova", icon: "🌑" },
    { name: "Protetor Crescente", icon: "🌒" },
    { name: "Sábio Minguante", icon: "🌘" },
    { name: "Observador das Fases", icon: "🌓" },
    { name: "Guardião do Quarto Crescente", icon: "🌔" },

    // Astronomia Lunar
    { name: "Astrônomo Lunar", icon: "🔭" },
    { name: "Observador do Satélite", icon: "🛰️" },
    { name: "Mestre da Órbita", icon: "🌍" },
    { name: "Protetor do Sistema Terra-Lua", icon: "🌎" },
    { name: "Sábio dos Eclipses", icon: "🌘" },

    // Missões Apollo
    { name: "Astronauta Apollo", icon: "👨‍🚀" },
    { name: "Comandante Armstrong", icon: "🚀" },
    { name: "Piloto Lunar", icon: "🛸" },
    { name: "Explorador Espacial", icon: "🌌" },
    { name: "Mestre das Missões", icon: "🚀" },
    { name: "Guardião do Eagle", icon: "🦅" },

    // Superfície Lunar
    { name: "Guardião das Crateras", icon: "🕳️" },
    { name: "Mestre dos Mares Lunares", icon: "🌊" },
    { name: "Protetor do Regolito", icon: "🏜️" },
    { name: "Sábio de Tycho", icon: "⭕" },
    { name: "Guardião da Tranquilidade", icon: "🌙" },

    // Influência da Lua
    { name: "Mestre das Marés", icon: "🌊" },
    { name: "Guardião Gravitacional", icon: "⚖️" },
    { name: "Protetor dos Oceanos", icon: "🌊" },
    { name: "Sábio da Gravidade", icon: "🪐" },

    // Eclipses
    { name: "Observador de Eclipses", icon: "🌑" },
    { name: "Mestre do Eclipse Lunar", icon: "🌚" },
    { name: "Guardião da Lua de Sangue", icon: "🔴" },
    { name: "Protetor da Sombra", icon: "🌘" },

    // Características Físicas
    { name: "Sábio da Gravidade Fraca", icon: "🪶" },
    { name: "Mestre dos 384.400 km", icon: "📏" },
    { name: "Guardião do Satélite Natural", icon: "🌙" },
    { name: "Protetor do Lado Oculto", icon: "🌚" },

    // Exploração Moderna
    { name: "Pioneiro Artemis", icon: "🚀" },
    { name: "Mestre da Exploração", icon: "🛰️" },
    { name: "Guardião Chang'e", icon: "🐰" },
    { name: "Protetor Chandrayaan", icon: "🇮🇳" },

    // Mitologia Lunar
    { name: "Selene da Grécia", icon: "🏛️" },
    { name: "Luna de Roma", icon: "🏛️" },
    { name: "Guardião Mitológico", icon: "⚡" },
    { name: "Mestre das Lendas", icon: "📚" },
    { name: "Protetor do Coelho Lunar", icon: "🐰" },

    // Ciência Lunar
    { name: "Cientista Lunar", icon: "🔬" },
    { name: "Geólogo Espacial", icon: "🪨" },
    { name: "Mestre da Formação", icon: "💥" },
    { name: "Guardião de Theia", icon: "☄️" },

    // Tempo e Ciclos
    { name: "Guardião dos 29,5 Dias", icon: "📅" },
    { name: "Mestre do Ciclo Lunar", icon: "🔄" },
    { name: "Protetor Sinódico", icon: "⏰" },
    { name: "Sábio dos 27,3 Dias", icon: "🗓️" },

    // Observação
    { name: "Observador Noturno", icon: "🌃" },
    { name: "Guardião do Telescópio", icon: "🔭" },
    { name: "Mestre da Observação", icon: "👁️" },
    { name: "Protetor dos Astrônomos", icon: "🔭" },

    // Elementos Visuais
    { name: "Guardião do Brilho Lunar", icon: "✨" },
    { name: "Mestre da Reflexão", icon: "💫" },
    { name: "Protetor do Luar", icon: "🌙" },
    { name: "Sábio da Luz Refletida", icon: "💡" },

    // Curiosidades
    { name: "Mestre dos 12 Astronautas", icon: "👥" },
    { name: "Guardião de 1969", icon: "🗓️" },
    { name: "Protetor da Pegada", icon: "👣" },
    { name: "Sábio da Bandeira", icon: "🏴" },

    // Temperaturas e Condições
    { name: "Guardião dos 127°C", icon: "🌡️" },
    { name: "Mestre do Vácuo", icon: "🌌" },
    { name: "Protetor Extremo", icon: "❄️🔥" },
    { name: "Sábio da Ausência de Ar", icon: "🌫️" },

    // Mais Exploração
    { name: "Viajante Espacial", icon: "🚀" },
    { name: "Pioneiro Lunar", icon: "🌙" },
    { name: "Guardião do LEM", icon: "🛸" },
    { name: "Mestre do Módulo", icon: "📦" },

    // Crateras Famosas
    { name: "Guardião de Copérnico", icon: "⭕" },
    { name: "Mestre de Mare Imbrium", icon: "🌊" },
    { name: "Protetor de Aristarchus", icon: "✨" },
    { name: "Sábio de Kepler", icon: "🔭" },

    // Descobertas
    { name: "Descobridor de Água Lunar", icon: "💧" },
    { name: "Guardião do Gelo Polar", icon: "🧊" },
    { name: "Mestre das Descobertas", icon: "🔍" },
    { name: "Protetor dos Segredos", icon: "🗝️" },

    // Comparações
    { name: "Mestre do 1/6 da Gravidade", icon: "⚖️" },
    { name: "Guardião do 1/4 do Tamanho", icon: "📐" },
    { name: "Protetor das Comparações", icon: "📊" },
    { name: "Sábio da Proporção", icon: "📏" },

    // Movimentos
    { name: "Guardião da Rotação Sincronizada", icon: "🔄" },
    { name: "Mestre do Afastamento", icon: "↔️" },
    { name: "Protetor dos 3,8 cm/ano", icon: "📏" },
    { name: "Sábio do Movimento", icon: "🌀" },

    // Nomes Inspiradores
    { name: "Sonhador Lunar", icon: "💭" },
    { name: "Visionário Espacial", icon: "👁️" },
    { name: "Guardião dos Sonhos", icon: "✨" },
    { name: "Mestre da Inspiração", icon: "🌟" },
    { name: "Protetor da Curiosidade", icon: "❓" },
    { name: "Sábio do Conhecimento", icon: "📚" }
];
