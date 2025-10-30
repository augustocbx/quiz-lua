// Banco de perguntas sobre a Lua - Nosso Satélite Natural
const QUESTION_BANK = [
    // CARACTERÍSTICAS FÍSICAS DA LUA (5 perguntas)
    {
        question: "Qual é o tamanho da Lua em comparação com a Terra?",
        answers: ["Cerca de 1/4 do tamanho da Terra", "Metade do tamanho da Terra", "Igual à Terra", "1/10 do tamanho da Terra"],
        correctIndex: 0,
        backgroundClass: "bg-physical"
    },
    {
        question: "Quanto tempo a luz do Sol leva para chegar à Lua?",
        answers: ["Cerca de 1,3 segundos", "8 minutos", "1 hora", "Instantâneo"],
        correctIndex: 0,
        backgroundClass: "bg-physical",
        difficulty: "hard"
    },
    {
        question: "Qual é a temperatura na superfície da Lua durante o dia lunar?",
        answers: ["Pode chegar a 127°C", "Sempre 20°C", "Sempre abaixo de zero", "Igual à Terra"],
        correctIndex: 0,
        backgroundClass: "bg-physical",
        difficulty: "hard"
    },
    {
        question: "Por que não existe atmosfera na Lua?",
        answers: ["Sua gravidade é muito fraca para segurar gases", "O Sol evaporou toda a atmosfera", "Nunca teve atmosfera", "Os astronautas a destruíram"],
        correctIndex: 0,
        backgroundClass: "bg-physical",
        difficulty: "hard"
    },
    {
        question: "Qual é a força da gravidade na Lua comparada à Terra?",
        answers: ["Aproximadamente 1/6 da gravidade terrestre", "Igual à Terra", "Duas vezes maior", "Não existe gravidade na Lua"],
        correctIndex: 0,
        backgroundClass: "bg-physical"
    },

    // FASES DA LUA (5 perguntas)
    {
        question: "Quantas fases principais a Lua possui?",
        answers: ["4 fases principais", "2 fases", "8 fases", "12 fases"],
        correctIndex: 0,
        backgroundClass: "bg-phases"
    },
    {
        question: "Quanto tempo leva para a Lua completar todas as suas fases?",
        answers: ["Aproximadamente 29,5 dias", "30 dias exatos", "Uma semana", "Um ano"],
        correctIndex: 0,
        backgroundClass: "bg-phases"
    },
    {
        question: "Em qual fase a Lua está completamente iluminada vista da Terra?",
        answers: ["Lua Cheia", "Lua Nova", "Quarto Crescente", "Quarto Minguante"],
        correctIndex: 0,
        backgroundClass: "bg-phases"
    },
    {
        question: "Por que vemos diferentes fases da Lua?",
        answers: ["Por causa da posição da Lua em relação ao Sol e à Terra", "A Lua muda de tamanho", "Nuvens bloqueiam a Lua", "A Terra projeta sombra"],
        correctIndex: 0,
        backgroundClass: "bg-phases",
        difficulty: "hard"
    },
    {
        question: "Na fase da Lua Nova, o que acontece?",
        answers: ["A Lua está entre a Terra e o Sol e não é visível", "A Lua está completamente iluminada", "Ocorre um eclipse", "A Lua muda de cor"],
        correctIndex: 0,
        backgroundClass: "bg-phases",
        difficulty: "hard"
    },

    // FORMAÇÃO DA LUA (5 perguntas)
    {
        question: "Qual é a teoria mais aceita sobre a formação da Lua?",
        answers: ["Impacto gigante entre a Terra e um corpo do tamanho de Marte", "A Lua sempre existiu junto com a Terra", "A Lua veio de outro sistema solar", "Deus criou a Lua no quarto dia"],
        correctIndex: 0,
        backgroundClass: "bg-formation",
        difficulty: "hard"
    },
    {
        question: "Há quanto tempo aproximadamente a Lua foi formada?",
        answers: ["Cerca de 4,5 bilhões de anos atrás", "100 milhões de anos", "1 bilhão de anos", "10 bilhões de anos"],
        correctIndex: 0,
        backgroundClass: "bg-formation",
        difficulty: "hard"
    },
    {
        question: "Como se chama o corpo celeste que colidiu com a Terra formando a Lua?",
        answers: ["Theia", "Apolo", "Selene", "Luna"],
        correctIndex: 0,
        backgroundClass: "bg-formation",
        difficulty: "veryHard"
    },
    {
        question: "Do que a Lua é feita principalmente?",
        answers: ["Rochas e poeira semelhantes às da Terra", "Gelo e neve", "Gases congelados", "Metal líquido"],
        correctIndex: 0,
        backgroundClass: "bg-formation"
    },
    {
        question: "A Lua está se afastando ou se aproximando da Terra?",
        answers: ["Se afastando cerca de 3,8 cm por ano", "Se aproximando rapidamente", "Permanece na mesma distância", "Varia aleatoriamente"],
        correctIndex: 0,
        backgroundClass: "bg-formation",
        difficulty: "veryHard"
    },

    // MISSÕES APOLLO (5 perguntas)
    {
        question: "Em que ano o ser humano pisou na Lua pela primeira vez?",
        answers: ["1969", "1959", "1979", "1989"],
        correctIndex: 0,
        backgroundClass: "bg-apollo"
    },
    {
        question: "Qual foi a primeira missão a pousar na Lua com astronautas?",
        answers: ["Apollo 11", "Apollo 13", "Apollo 1", "Apollo 17"],
        correctIndex: 0,
        backgroundClass: "bg-apollo"
    },
    {
        question: "Quem foi o primeiro ser humano a pisar na Lua?",
        answers: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
        correctIndex: 0,
        backgroundClass: "bg-apollo"
    },
    {
        question: "Quantas missões Apollo pousaram na Lua com sucesso?",
        answers: ["6 missões (Apollo 11, 12, 14, 15, 16 e 17)", "3 missões", "10 missões", "Apenas 1 missão"],
        correctIndex: 0,
        backgroundClass: "bg-apollo",
        difficulty: "veryHard"
    },
    {
        question: "O que os astronautas da Apollo trouxeram da Lua?",
        answers: ["Rochas e amostras do solo lunar", "Água congelada", "Plantas lunares", "Meteoritos"],
        correctIndex: 0,
        backgroundClass: "bg-apollo"
    },

    // ECLIPSES (5 perguntas)
    {
        question: "O que é um eclipse lunar?",
        answers: ["Quando a Terra fica entre o Sol e a Lua, projetando sombra na Lua", "Quando a Lua fica entre o Sol e a Terra", "Quando o Sol some", "Quando há Lua Nova"],
        correctIndex: 0,
        backgroundClass: "bg-eclipses"
    },
    {
        question: "O que é um eclipse solar?",
        answers: ["Quando a Lua passa entre o Sol e a Terra, bloqueando a luz solar", "Quando a Terra bloqueia o Sol", "Quando o Sol some atrás da Lua", "Quando há tempestade solar"],
        correctIndex: 0,
        backgroundClass: "bg-eclipses"
    },
    {
        question: "Por que a Lua fica avermelhada durante um eclipse lunar total?",
        answers: ["A atmosfera da Terra filtra a luz solar deixando passar tons avermelhados", "A Lua muda de cor naturalmente", "É reflexo do fogo da Terra", "Poeira lunar reflete vermelho"],
        correctIndex: 0,
        backgroundClass: "bg-eclipses",
        difficulty: "veryHard"
    },
    {
        question: "Qual fase da Lua é necessária para ocorrer um eclipse solar?",
        answers: ["Lua Nova", "Lua Cheia", "Quarto Crescente", "Quarto Minguante"],
        correctIndex: 0,
        backgroundClass: "bg-eclipses",
        difficulty: "hard"
    },
    {
        question: "Com que frequência ocorrem eclipses lunares?",
        answers: ["Aproximadamente 2 a 4 vezes por ano", "Todo mês", "Uma vez a cada 10 anos", "Uma vez por semana"],
        correctIndex: 0,
        backgroundClass: "bg-eclipses",
        difficulty: "hard"
    },

    // INFLUÊNCIA DA LUA NA TERRA (5 perguntas)
    {
        question: "Qual é o principal efeito da Lua sobre a Terra?",
        answers: ["Causa as marés nos oceanos", "Controla o clima", "Cria terremotos", "Produz chuva"],
        correctIndex: 0,
        backgroundClass: "bg-influence"
    },
    {
        question: "Quantas marés altas ocorrem por dia devido à influência da Lua?",
        answers: ["Duas marés altas", "Uma maré alta", "Quatro marés altas", "Nenhuma"],
        correctIndex: 0,
        backgroundClass: "bg-influence",
        difficulty: "hard"
    },
    {
        question: "Como a Lua afeta a rotação da Terra?",
        answers: ["A Lua desacelera a rotação da Terra gradualmente", "Acelera a rotação", "Não afeta a rotação", "Para a rotação periodicamente"],
        correctIndex: 0,
        backgroundClass: "bg-influence",
        difficulty: "veryHard"
    },
    {
        question: "O que aconteceria com as marés se não existisse a Lua?",
        answers: ["As marés seriam muito menores e causadas apenas pelo Sol", "Não haveria oceanos", "As marés seriam maiores", "Nada mudaria"],
        correctIndex: 0,
        backgroundClass: "bg-influence",
        difficulty: "hard"
    },
    {
        question: "A Lua influencia o comportamento de alguns animais?",
        answers: ["Sim, especialmente animais marinhos e noturnos", "Não, isso é um mito", "Apenas insetos", "Apenas plantas"],
        correctIndex: 0,
        backgroundClass: "bg-influence"
    },

    // SUPERFÍCIE LUNAR (5 perguntas)
    {
        question: "Como é chamada a fina camada de poeira que cobre a superfície lunar?",
        answers: ["Regolito", "Poeira estelar", "Areia lunar", "Cinza espacial"],
        correctIndex: 0,
        backgroundClass: "bg-surface",
        difficulty: "veryHard"
    },
    {
        question: "Existem vulcões ativos na Lua atualmente?",
        answers: ["Não, a Lua não tem atividade vulcânica atual", "Sim, muitos vulcões ativos", "Apenas um vulcão ativo", "Vulcões de gelo"],
        correctIndex: 0,
        backgroundClass: "bg-surface",
        difficulty: "hard"
    },
    {
        question: "Por que a Lua tem tantas crateras?",
        answers: ["Impactos de meteoritos e asteroides ao longo de bilhões de anos", "Explosões nucleares antigas", "Erosão pelo vento", "Terremotos lunares"],
        correctIndex: 0,
        backgroundClass: "bg-surface"
    },
    {
        question: "Existe água na Lua?",
        answers: ["Sim, há gelo de água em crateras nos polos lunares", "Não, a Lua é completamente seca", "Sim, há oceanos subterrâneos", "Apenas água no estado gasoso"],
        correctIndex: 0,
        backgroundClass: "bg-surface",
        difficulty: "hard"
    },
    {
        question: "Como são chamadas as áreas escuras planas visíveis na Lua?",
        answers: ["Mares lunares (maria)", "Oceanos", "Desertos", "Vales"],
        correctIndex: 0,
        backgroundClass: "bg-surface"
    },

    // ÓRBITA E MOVIMENTO (5 perguntas)
    {
        question: "Quanto tempo a Lua leva para dar uma volta completa ao redor da Terra?",
        answers: ["Aproximadamente 27,3 dias", "24 horas", "1 ano", "30 dias"],
        correctIndex: 0,
        backgroundClass: "bg-orbit",
        difficulty: "hard"
    },
    {
        question: "Por que vemos sempre o mesmo lado da Lua da Terra?",
        answers: ["A Lua gira sobre si mesma no mesmo tempo que orbita a Terra", "A Lua não gira", "Apenas coincidência", "A gravidade impede o giro"],
        correctIndex: 0,
        backgroundClass: "bg-orbit",
        difficulty: "hard"
    },
    {
        question: "Como é chamado o lado da Lua que nunca vemos da Terra?",
        answers: ["Lado oculto da Lua", "Lado escuro da Lua", "Lado inferior", "Lado morto"],
        correctIndex: 0,
        backgroundClass: "bg-orbit"
    },
    {
        question: "Qual é a distância média entre a Terra e a Lua?",
        answers: ["Cerca de 384.400 km", "100.000 km", "1 milhão de km", "10.000 km"],
        correctIndex: 0,
        backgroundClass: "bg-orbit",
        difficulty: "hard"
    },
    {
        question: "A órbita da Lua ao redor da Terra é perfeitamente circular?",
        answers: ["Não, é ligeiramente elíptica", "Sim, é perfeitamente circular", "É uma espiral", "É quadrada"],
        correctIndex: 0,
        backgroundClass: "bg-orbit",
        difficulty: "veryHard"
    },

    // CRATERAS E MARES LUNARES (5 perguntas)
    {
        question: "Qual é a maior cratera visível da Terra na Lua?",
        answers: ["Cratera Tycho", "Cratera Armstrong", "Cratera Apollo", "Cratera Brasil"],
        correctIndex: 0,
        backgroundClass: "bg-craters",
        difficulty: "veryHard"
    },
    {
        question: "Os mares lunares realmente contêm água?",
        answers: ["Não, são planícies de lava solidificada", "Sim, são cheios de água", "Contêm gelo", "São feitos de areia"],
        correctIndex: 0,
        backgroundClass: "bg-craters",
        difficulty: "hard"
    },
    {
        question: "Como é chamado o maior mar lunar?",
        answers: ["Mare Imbrium (Mar das Chuvas)", "Mare Tranquillitatis", "Mare Serenitatis", "Mare Nubium"],
        correctIndex: 0,
        backgroundClass: "bg-craters",
        difficulty: "veryHard"
    },
    {
        question: "Onde a Apollo 11 pousou na Lua?",
        answers: ["Mare Tranquillitatis (Mar da Tranquilidade)", "Mare Imbrium", "Cratera Tycho", "Pólo Sul Lunar"],
        correctIndex: 0,
        backgroundClass: "bg-craters",
        difficulty: "hard"
    },
    {
        question: "As crateras lunares foram formadas principalmente por:",
        answers: ["Impactos de asteroides e meteoritos", "Atividade vulcânica", "Erosão pelo vento", "Ação da água"],
        correctIndex: 0,
        backgroundClass: "bg-craters"
    },

    // EXPLORAÇÃO LUNAR MODERNA (5 perguntas)
    {
        question: "Qual foi a última missão tripulada à Lua até hoje?",
        answers: ["Apollo 17 em 1972", "Apollo 11 em 1969", "Apollo 20 em 1980", "Artemis em 2020"],
        correctIndex: 0,
        backgroundClass: "bg-exploration",
        difficulty: "hard"
    },
    {
        question: "Qual país foi o primeiro a pousar uma sonda no lado oculto da Lua?",
        answers: ["China", "Estados Unidos", "Rússia", "Brasil"],
        correctIndex: 0,
        backgroundClass: "bg-exploration",
        difficulty: "hard"
    },
    {
        question: "Qual é o nome do programa da NASA para retornar humanos à Lua?",
        answers: ["Programa Artemis", "Programa Apollo 2", "Programa Luna", "Programa Discovery"],
        correctIndex: 0,
        backgroundClass: "bg-exploration",
        difficulty: "hard"
    },
    {
        question: "Qual país pousou a sonda Chandrayaan-3 na Lua em 2023?",
        answers: ["Índia", "China", "Japão", "Brasil"],
        correctIndex: 0,
        backgroundClass: "bg-exploration",
        difficulty: "veryHard"
    },
    {
        question: "Por que há interesse em construir bases permanentes na Lua?",
        answers: ["Para pesquisa científica e possível base para missões a Marte", "Para turismo espacial", "Para minerar ouro", "Para fugir da Terra"],
        correctIndex: 0,
        backgroundClass: "bg-exploration"
    },

    // MITOLOGIA E CULTURA LUNAR (5 perguntas)
    {
        question: "Como os gregos antigos chamavam a deusa da Lua?",
        answers: ["Selene", "Artemis", "Luna", "Diana"],
        correctIndex: 0,
        backgroundClass: "bg-mythology",
        difficulty: "hard"
    },
    {
        question: "Na mitologia romana, qual era o nome da deusa da Lua?",
        answers: ["Luna", "Selene", "Diana", "Artemis"],
        correctIndex: 0,
        backgroundClass: "bg-mythology",
        difficulty: "hard"
    },
    {
        question: "O que significa a palavra 'lunar'?",
        answers: ["Relativo à Lua", "Que brilha", "Que é redondo", "Que está no céu"],
        correctIndex: 0,
        backgroundClass: "bg-mythology"
    },
    {
        question: "Por que a Lua cheia tem significado em muitas culturas?",
        answers: ["Estava associada a rituais, colheitas e festividades", "Porque produz mais luz", "Porque causa terremotos", "Porque atrai alienígenas"],
        correctIndex: 0,
        backgroundClass: "bg-mythology"
    },
    {
        question: "O que é o 'coelho na Lua' que algumas culturas enxergam?",
        answers: ["Um padrão formado pelos mares e crateras lunares", "Um animal real na Lua", "Uma constelação", "Um mito sobre alienígenas"],
        correctIndex: 0,
        backgroundClass: "bg-mythology",
        difficulty: "hard"
    },

    // ASTRONOMIA LUNAR (5 perguntas)
    {
        question: "A Lua é considerada um planeta?",
        answers: ["Não, é um satélite natural", "Sim, é um planeta anão", "Sim, é um planeta", "É uma estrela"],
        correctIndex: 0,
        backgroundClass: "bg-astronomy"
    },
    {
        question: "Quantas luas (satélites naturais) a Terra possui?",
        answers: ["Apenas uma, a Lua", "Duas luas", "Três luas pequenas", "Nenhuma"],
        correctIndex: 0,
        backgroundClass: "bg-astronomy"
    },
    {
        question: "A Lua produz sua própria luz?",
        answers: ["Não, reflete a luz do Sol", "Sim, brilha como uma estrela", "Sim, tem vulcões de fogo", "Tem lava brilhante"],
        correctIndex: 0,
        backgroundClass: "bg-astronomy"
    },
    {
        question: "Em relação ao seu planeta, a Lua é considerada:",
        answers: ["Uma das maiores luas do Sistema Solar proporcionalmente", "A menor lua conhecida", "Uma lua média", "Uma lua irregular"],
        correctIndex: 0,
        backgroundClass: "bg-astronomy",
        difficulty: "hard"
    },
    {
        question: "Por que conseguimos ver a Lua durante o dia às vezes?",
        answers: ["A Lua está no céu tanto de dia quanto de noite, só é mais visível quando iluminada", "É uma ilusão de ótica", "É outra lua", "São nuvens em forma de lua"],
        correctIndex: 0,
        backgroundClass: "bg-astronomy",
        difficulty: "hard"
    }
];
