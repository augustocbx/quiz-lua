// Banco de perguntas sobre os 12 tipos de calendários mais famosos do mundo
const QUESTION_BANK = [
    // CALENDÁRIO GREGORIANO (5 perguntas)
    {
        question: "Qual calendário é tradicionalmente usado no Brasil e no Ocidente?",
        answers: ["Gregoriano", "Juliano", "Islâmico", "Chinês"],
        correctIndex: 0,
        backgroundClass: "bg-gregorian"
    },
    {
        question: "Quem instituiu o calendário Gregoriano em 1582?",
        answers: ["Papa Gregório XIII", "Júlio César", "Imperador Chinês", "Profeta Maomé"],
        correctIndex: 0,
        backgroundClass: "bg-gregorian",
        difficulty: "hard"
    },
    {
        question: "Quantos dias tem um ano no calendário Gregoriano?",
        answers: ["365 dias (366 em anos bissextos)", "354 dias", "360 dias", "400 dias"],
        correctIndex: 0,
        backgroundClass: "bg-gregorian"
    },
    {
        question: "Por que existem anos bissextos no calendário Gregoriano?",
        answers: ["Para ajustar as 6 horas extras do ano solar", "Para celebrar datas especiais", "Por tradição religiosa", "Para facilitar os cálculos"],
        correctIndex: 0,
        backgroundClass: "bg-gregorian",
        difficulty: "hard"
    },
    {
        question: "Em que o calendário Gregoriano é baseado?",
        answers: ["No movimento da Terra ao redor do Sol", "Nas fases da Lua", "Nas estrelas", "Nos planetas"],
        correctIndex: 0,
        backgroundClass: "bg-gregorian"
    },

    // CALENDÁRIO JULIANO (5 perguntas)
    {
        question: "Em que ano foi instituído o calendário Juliano?",
        answers: ["46 a.C.", "1582 d.C.", "622 d.C.", "2697 a.C."],
        correctIndex: 0,
        backgroundClass: "bg-julian",
        difficulty: "hard"
    },
    {
        question: "Qual calendário substituiu o calendário Romano?",
        answers: ["Juliano", "Gregoriano", "Islâmico", "Maia"],
        correctIndex: 0,
        backgroundClass: "bg-julian"
    },
    {
        question: "Por que o calendário Juliano foi substituído?",
        answers: ["Apresentava falhas na contagem do tempo", "Era muito complicado", "Não tinha anos bissextos", "Tinha poucos meses"],
        correctIndex: 0,
        backgroundClass: "bg-julian",
        difficulty: "hard"
    },
    {
        question: "Quantos dias de diferença existem hoje entre o Juliano e o Gregoriano?",
        answers: ["13 dias", "7 dias", "1 dia", "30 dias"],
        correctIndex: 0,
        backgroundClass: "bg-julian",
        difficulty: "veryHard"
    },
    {
        question: "O calendário Juliano é do tipo:",
        answers: ["Solar", "Lunar", "Lunissolar", "Estelar"],
        correctIndex: 0,
        backgroundClass: "bg-julian"
    },

    // CALENDÁRIO CHINÊS (5 perguntas)
    {
        question: "O calendário Chinês é de que tipo?",
        answers: ["Lunissolar", "Apenas Lunar", "Apenas Solar", "Estelar"],
        correctIndex: 0,
        backgroundClass: "bg-chinese"
    },
    {
        question: "Quantos animais fazem parte do horóscopo chinês?",
        answers: ["12 animais", "10 animais", "8 animais", "15 animais"],
        correctIndex: 0,
        backgroundClass: "bg-chinese"
    },
    {
        question: "Em quanto tempo se completa o ciclo dos animais no calendário Chinês?",
        answers: ["12 anos", "10 anos", "5 anos", "365 dias"],
        correctIndex: 0,
        backgroundClass: "bg-chinese"
    },
    {
        question: "Quando foi criado o calendário Chinês?",
        answers: ["Há mais de 4000 anos", "Há 500 anos", "Há 2000 anos", "Há 1000 anos"],
        correctIndex: 0,
        backgroundClass: "bg-chinese",
        difficulty: "hard"
    },
    {
        question: "Como é chamado o Ano Novo Chinês?",
        answers: ["Festival da Primavera", "Festival da Lua", "Festival do Sol", "Festival do Dragão"],
        correctIndex: 0,
        backgroundClass: "bg-chinese",
        difficulty: "hard"
    },

    // CALENDÁRIO ISLÂMICO (5 perguntas)
    {
        question: "O calendário Islâmico é baseado em quê?",
        answers: ["No ciclo da Lua", "No movimento do Sol", "Nas estações do ano", "Nos planetas"],
        correctIndex: 0,
        backgroundClass: "bg-islamic"
    },
    {
        question: "Quantos dias tem um ano no calendário Islâmico?",
        answers: ["354 dias", "365 dias", "360 dias", "366 dias"],
        correctIndex: 0,
        backgroundClass: "bg-islamic",
        difficulty: "hard"
    },
    {
        question: "Quando começou o calendário Islâmico?",
        answers: ["No ano 622 d.C.", "No ano 1582 d.C.", "No ano 1 d.C.", "No ano 1000 d.C."],
        correctIndex: 0,
        backgroundClass: "bg-islamic",
        difficulty: "hard"
    },
    {
        question: "Como se chama o Ano Novo Islâmico?",
        answers: ["Al-Hijra", "Ramadã", "Eid", "Hajj"],
        correctIndex: 0,
        backgroundClass: "bg-islamic",
        difficulty: "hard"
    },
    {
        question: "Quando começa um novo mês no calendário Islâmico?",
        answers: ["Após a fase da lua crescente", "No dia 1º de cada mês", "Na lua cheia", "No domingo"],
        correctIndex: 0,
        backgroundClass: "bg-islamic",
        difficulty: "hard"
    },

    // CALENDÁRIO MAIA (5 perguntas)
    {
        question: "Quantas partes principais tem o calendário Maia?",
        answers: ["Duas: Haab e Tzolkin", "Uma única parte", "Três partes", "Quatro partes"],
        correctIndex: 0,
        backgroundClass: "bg-mayan",
        difficulty: "hard"
    },
    {
        question: "Quantos dias tem o calendário Haab (Maia)?",
        answers: ["365 dias", "260 dias", "354 dias", "360 dias"],
        correctIndex: 0,
        backgroundClass: "bg-mayan"
    },
    {
        question: "No calendário Haab, quantos meses existem?",
        answers: ["18 meses de 20 dias", "12 meses de 30 dias", "13 meses de 28 dias", "20 meses de 18 dias"],
        correctIndex: 0,
        backgroundClass: "bg-mayan",
        difficulty: "veryHard"
    },
    {
        question: "Quantos dias tem o Tzolkin (calendário religioso Maia)?",
        answers: ["260 dias", "365 dias", "354 dias", "180 dias"],
        correctIndex: 0,
        backgroundClass: "bg-mayan",
        difficulty: "hard"
    },
    {
        question: "O que acontece com os 5 dias restantes do calendário Haab?",
        answers: ["Ficam de fora e não pertencem a nenhum mês", "São adicionados ao último mês", "Formam um mês extra", "São considerados feriados"],
        correctIndex: 0,
        backgroundClass: "bg-mayan",
        difficulty: "veryHard"
    },

    // CALENDÁRIO ETÍOPE (5 perguntas)
    {
        question: "Quantos meses tem o calendário Etíope?",
        answers: ["13 meses", "12 meses", "10 meses", "18 meses"],
        correctIndex: 0,
        backgroundClass: "bg-ethiopian",
        difficulty: "hard"
    },
    {
        question: "O calendário Etíope é baseado em qual outro calendário?",
        answers: ["Juliano", "Gregoriano", "Islâmico", "Chinês"],
        correctIndex: 0,
        backgroundClass: "bg-ethiopian",
        difficulty: "hard"
    },
    {
        question: "Quantos dias têm os primeiros 12 meses do calendário Etíope?",
        answers: ["30 dias cada", "28 dias cada", "29 dias cada", "31 dias cada"],
        correctIndex: 0,
        backgroundClass: "bg-ethiopian",
        difficulty: "hard"
    },
    {
        question: "Quantos dias tem o 13º mês do calendário Etíope em anos normais?",
        answers: ["5 dias", "6 dias", "7 dias", "10 dias"],
        correctIndex: 0,
        backgroundClass: "bg-ethiopian",
        difficulty: "veryHard"
    },
    {
        question: "O calendário Etíope é de que tipo?",
        answers: ["Solar", "Lunar", "Lunissolar", "Estelar"],
        correctIndex: 0,
        backgroundClass: "bg-ethiopian"
    },

    // CALENDÁRIO JUDAICO (5 perguntas)
    {
        question: "O calendário Judaico é de que tipo?",
        answers: ["Lunissolar", "Apenas Solar", "Apenas Lunar", "Estelar"],
        correctIndex: 0,
        backgroundClass: "bg-jewish"
    },
    {
        question: "Quando foi criado o calendário Judaico?",
        answers: ["Há mais de 3000 anos", "Há 500 anos", "Há 1000 anos", "Há 4000 anos"],
        correctIndex: 0,
        backgroundClass: "bg-jewish",
        difficulty: "hard"
    },
    {
        question: "Há quantos anos o calendário Judaico é usado em Israel?",
        answers: ["Mais de 3 mil anos", "500 anos", "1000 anos", "100 anos"],
        correctIndex: 0,
        backgroundClass: "bg-jewish",
        difficulty: "hard"
    },
    {
        question: "Por que o calendário Judaico pode ter 12 ou 13 meses?",
        answers: ["Para ajustar os ciclos lunar e solar", "Por motivos religiosos", "Para ter mais feriados", "Por erro de cálculo"],
        correctIndex: 0,
        backgroundClass: "bg-jewish",
        difficulty: "hard"
    },
    {
        question: "A quantidade de dias no ano judaico:",
        answers: ["Pode variar de ano para ano", "É sempre 365 dias", "É sempre 354 dias", "É sempre 360 dias"],
        correctIndex: 0,
        backgroundClass: "bg-jewish",
        difficulty: "hard"
    },

    // CALENDÁRIO JUCHE (2 perguntas simplificadas)
    {
        question: "Onde é usado o calendário Juche?",
        answers: ["Apenas na Coreia do Norte", "Em toda a Ásia", "No mundo todo", "Na China"],
        correctIndex: 0,
        backgroundClass: "bg-juche",
        difficulty: "hard"
    },
    {
        question: "O calendário Juche é de que tipo?",
        answers: ["Solar (como o Gregoriano)", "Lunar", "Lunissolar", "Misto"],
        correctIndex: 0,
        backgroundClass: "bg-juche"
    },

    // CALENDÁRIO EGÍPCIO (5 perguntas)
    {
        question: "O calendário Egípcio é um dos:",
        answers: ["Mais antigos da história", "Mais modernos", "Mais complexos", "Menos usados"],
        correctIndex: 0,
        backgroundClass: "bg-egyptian"
    },
    {
        question: "O calendário Egípcio está ligado a qual rio?",
        answers: ["Rio Nilo", "Rio Amazonas", "Rio Ganges", "Rio Amarelo"],
        correctIndex: 0,
        backgroundClass: "bg-egyptian",
        difficulty: "hard"
    },
    {
        question: "Quantos dias tinha o ano no calendário Egípcio?",
        answers: ["365 dias", "354 dias", "360 dias", "366 dias"],
        correctIndex: 0,
        backgroundClass: "bg-egyptian"
    },
    {
        question: "Quantos meses tinha o calendário Egípcio?",
        answers: ["12 meses de 30 dias", "13 meses", "10 meses", "18 meses"],
        correctIndex: 0,
        backgroundClass: "bg-egyptian",
        difficulty: "hard"
    },
    {
        question: "Para que serviam os 5 dias extras no calendário Egípcio?",
        answers: ["Homenagear os deuses", "Celebrar o faraó", "Fazer festas", "Ajustar o ano"],
        correctIndex: 0,
        backgroundClass: "bg-egyptian",
        difficulty: "hard"
    },

    // CALENDÁRIOS LUNAR, SOLAR E LUNISSOLAR (10 perguntas conceituais)
    {
        question: "Um calendário Lunar é baseado em quê?",
        answers: ["Nas fases da Lua", "No movimento do Sol", "Nas estrelas", "Nos planetas"],
        correctIndex: 0,
        backgroundClass: "bg-lunar-concept"
    },
    {
        question: "Quantos dias tem aproximadamente um ano em calendários Lunares?",
        answers: ["354 ou 355 dias", "365 dias", "360 dias", "400 dias"],
        correctIndex: 0,
        backgroundClass: "bg-lunar-concept",
        difficulty: "hard"
    },
    {
        question: "Quando começa um novo mês em calendários Lunares?",
        answers: ["Com a lua nova", "No primeiro dia do mês", "Com a lua cheia", "A qualquer momento"],
        correctIndex: 0,
        backgroundClass: "bg-lunar-concept"
    },
    {
        question: "Um calendário Solar é baseado em quê?",
        answers: ["No ciclo do Sol", "Nas fases da Lua", "Nas estrelas", "Nos planetas"],
        correctIndex: 0,
        backgroundClass: "bg-solar-concept"
    },
    {
        question: "Qual é o modelo de calendário que usamos no Ocidente?",
        answers: ["Solar (Gregoriano)", "Lunar", "Lunissolar", "Estelar"],
        correctIndex: 0,
        backgroundClass: "bg-solar-concept"
    },
    {
        question: "Quantos meses tem um calendário Solar típico?",
        answers: ["12 meses", "13 meses", "10 meses", "18 meses"],
        correctIndex: 0,
        backgroundClass: "bg-solar-concept"
    },
    {
        question: "O que é um calendário Lunissolar?",
        answers: ["Usa o Sol e a Lua como base", "Usa apenas a Lua", "Usa apenas o Sol", "Usa as estrelas"],
        correctIndex: 0,
        backgroundClass: "bg-lunisolar-concept"
    },
    {
        question: "Quais calendários são exemplos de Lunissolar?",
        answers: ["Judaico e Chinês", "Gregoriano e Juliano", "Islâmico e Egípcio", "Maia e Etíope"],
        correctIndex: 0,
        backgroundClass: "bg-lunisolar-concept",
        difficulty: "hard"
    },
    {
        question: "Por que calendários Lunissolares precisam de ajustes?",
        answers: ["Para alinhar o ano solar com as fases da lua", "Por tradição", "Para ter mais feriados", "Para facilitar cálculos"],
        correctIndex: 0,
        backgroundClass: "bg-lunisolar-concept",
        difficulty: "hard"
    },
    {
        question: "Como se faz o ajuste em calendários Lunissolares?",
        answers: ["Incluindo um mês extra periodicamente", "Tirando dias", "Mudando a ordem dos meses", "Não há ajustes"],
        correctIndex: 0,
        backgroundClass: "bg-lunisolar-concept",
        difficulty: "veryHard"
    },

    // PERGUNTAS GERAIS E COMPARATIVAS (8 perguntas)
    {
        question: "Para que foram desenvolvidos os calendários?",
        answers: ["Para medir o tempo e organizar rotinas", "Apenas para festas religiosas", "Para navegação", "Para matemática"],
        correctIndex: 0,
        backgroundClass: "bg-general"
    },
    {
        question: "Os calendários são pautados por:",
        answers: ["Cultura e tradições de cada povo", "Apenas pela ciência", "Apenas pela religião", "Por regras universais"],
        correctIndex: 0,
        backgroundClass: "bg-general"
    },
    {
        question: "Quantos tipos principais de calendários existem?",
        answers: ["Três: Solar, Lunar e Lunissolar", "Dois: Antigo e Moderno", "Um único tipo", "Cinco tipos"],
        correctIndex: 0,
        backgroundClass: "bg-general",
        difficulty: "hard"
    },
    {
        question: "Qual destes calendários NÃO é Solar?",
        answers: ["Islâmico", "Gregoriano", "Juliano", "Etíope"],
        correctIndex: 0,
        backgroundClass: "bg-general"
    },
    {
        question: "Qual calendário tem um sistema mais complexo, com duas partes?",
        answers: ["Maia", "Gregoriano", "Islâmico", "Etíope"],
        correctIndex: 0,
        backgroundClass: "bg-general",
        difficulty: "hard"
    },
    {
        question: "Qual é o calendário mais antigo mencionado no quiz?",
        answers: ["Egípcio", "Gregoriano", "Islâmico", "Etíope"],
        correctIndex: 0,
        backgroundClass: "bg-general"
    },
    {
        question: "Por que diferentes povos criaram calendários diferentes?",
        answers: ["Cada cultura observava o tempo de forma única", "Por falta de comunicação", "Por erro de cálculo", "Apenas por religião"],
        correctIndex: 0,
        backgroundClass: "bg-general"
    },
    {
        question: "Quais calendários usam tanto o Sol quanto a Lua?",
        answers: ["Chinês e Judaico", "Gregoriano e Juliano", "Islâmico e Egípcio", "Maia e Etíope"],
        correctIndex: 0,
        backgroundClass: "bg-general",
        difficulty: "hard"
    }
];
