// Sistema de nomes aleatórios com ícones temáticos
const RANDOM_NAMES = [
    // Calendários do mundo
    { name: "Guardião do Gregoriano", icon: "📅" },
    { name: "Mestre do Juliano", icon: "⏳" },
    { name: "Sábio Chinês", icon: "🐉" },
    { name: "Guardião Islâmico", icon: "☪️" },
    { name: "Escriba Maia", icon: "📜" },
    { name: "Protetor Etíope", icon: "🦁" },
    { name: "Rabino do Tempo", icon: "✡️" },
    { name: "Guardião Juche", icon: "🏛️" },
    { name: "Faraó do Nilo", icon: "🏜️" },

    // Tipos de calendários
    { name: "Mestre Solar", icon: "☀️" },
    { name: "Guardião Lunar", icon: "🌙" },
    { name: "Sábio Lunissolar", icon: "🌗" },

    // Elementos astronômicos
    { name: "Observador do Sol", icon: "🌞" },
    { name: "Guardião da Lua Nova", icon: "🌑" },
    { name: "Mestre da Lua Cheia", icon: "🌕" },
    { name: "Protetor do Crescente", icon: "🌙" },
    { name: "Sábio das Fases", icon: "🌘" },

    // Conceitos de tempo
    { name: "Guardião do Tempo", icon: "⏰" },
    { name: "Mestre dos Ciclos", icon: "🔄" },
    { name: "Protetor dos Anos", icon: "📆" },
    { name: "Sábio dos Meses", icon: "📅" },
    { name: "Guardião dos Dias", icon: "🗓️" },
    { name: "Mestre das Horas", icon: "⌚" },

    // Culturas e tradições
    { name: "Cronista Romano", icon: "🏛️" },
    { name: "Escriba do Vaticano", icon: "⛪" },
    { name: "Astrônomo Chinês", icon: "🔭" },
    { name: "Sábio de Meca", icon: "🕌" },
    { name: "Sacerdote Maia", icon: "🗿" },
    { name: "Monge Etíope", icon: "⛪" },
    { name: "Rabino de Jerusalém", icon: "🕍" },
    { name: "Líder de Pyongyang", icon: "🏙️" },
    { name: "Sacerdote do Nilo", icon: "🏺" },

    // Símbolos matemáticos e científicos
    { name: "Calculador de Épocas", icon: "🔢" },
    { name: "Mestre dos Bissextos", icon: "➕" },
    { name: "Guardião dos 365 Dias", icon: "3️⃣6️⃣5️⃣" },
    { name: "Protetor dos 354 Dias", icon: "🌙" },
    { name: "Sábio dos 13 Meses", icon: "1️⃣3️⃣" },

    // Festividades
    { name: "Mestre do Ano Novo", icon: "🎊" },
    { name: "Guardião das Festas", icon: "🎉" },
    { name: "Protetor das Tradições", icon: "🎭" },
    { name: "Sábio dos Feriados", icon: "🎈" },

    // Histórico
    { name: "Cronista Antigo", icon: "📖" },
    { name: "Guardião da História", icon: "📚" },
    { name: "Mestre do Passado", icon: "⏮️" },
    { name: "Protetor do Futuro", icon: "⏭️" },
    { name: "Sábio do Presente", icon: "▶️" },

    // Natureza e astronomia
    { name: "Observador das Estrelas", icon: "⭐" },
    { name: "Guardião do Equinócio", icon: "⚖️" },
    { name: "Mestre do Solstício", icon: "🌅" },
    { name: "Protetor das Estações", icon: "🍂" },
    { name: "Sábio da Primavera", icon: "🌸" },
    { name: "Guardião do Verão", icon: "☀️" },
    { name: "Mestre do Outono", icon: "🍁" },
    { name: "Protetor do Inverno", icon: "❄️" },

    // Instrumentos e símbolos
    { name: "Mestre do Relógio", icon: "🕰️" },
    { name: "Guardião da Ampulheta", icon: "⌛" },
    { name: "Protetor do Astrolábio", icon: "🧭" },
    { name: "Sábio do Cronômetro", icon: "⏱️" },

    // Conceitos gerais
    { name: "Organizador de Rotinas", icon: "📋" },
    { name: "Planejador Universal", icon: "🗂️" },
    { name: "Guardião da Ordem", icon: "📊" },
    { name: "Mestre da Pontualidade", icon: "⏰" },
    { name: "Protetor da Precisão", icon: "🎯" },

    // Mitologia e lendas
    { name: "Filho do Tempo", icon: "👤" },
    { name: "Guardião Eterno", icon: "♾️" },
    { name: "Mestre Imortal", icon: "👑" },
    { name: "Protetor Ancestral", icon: "🗿" },
    { name: "Sábio Milenar", icon: "🧙" },

    // Específicos por calendário
    { name: "Papa Gregório XIII", icon: "⛪" },
    { name: "Júlio César", icon: "🏛️" },
    { name: "Imperador Amarelo", icon: "🐉" },
    { name: "Profeta do Deserto", icon: "🏜️" }
];

// Função para gerar um nome aleatório
function getRandomName() {
    return RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)];
}

// Função para obter ícone baseado no nome
function getIconForName(name) {
    const found = RANDOM_NAMES.find(item => item.name === name);
    if (found) return found.icon;

    // Se não encontrou, retorna um ícone padrão baseado na primeira letra
    const firstChar = name.charAt(0).toUpperCase();
    return firstChar;
}
