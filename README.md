# Quiz: Tudo sobre a Lua

Um quiz educativo e interativo sobre a Lua - nosso satélite natural, voltado para crianças do 5º ano (10-11 anos).

## Características

- 🌙 **60 perguntas** sobre a Lua (15 selecionadas aleatoriamente por sessão)
- 🌕 **12 Categorias**: Características Físicas, Fases da Lua, Formação, Missões Apollo, Eclipses, Influência na Terra, Superfície Lunar, Órbita e Movimento, Crateras e Mares, Exploração Moderna, Mitologia e Cultura, Astronomia Lunar
- 🎨 **Animações temáticas** de comemoração e consolo
- 🎯 **Sistema de pontuação** com critério de desempate por tempo
- 🏆 **Rankings**: temporário (últimos 5 jogadores) e permanente (top 10)
- 💾 **Persistência de dados** via localStorage
- 📱 **Design responsivo** para tablets e smartphones
- 👨‍🚀 **Avatares espaciais** e nomes temáticos sobre a Lua
- 🏅 **Sistema de conquistas** com badges lunares

## Estrutura do Projeto

```
quiz-lua/
├── index.html                 # Página principal
├── manifest.json              # Configuração PWA
├── service-worker.js          # Service Worker para PWA
├── css/
│   ├── styles.css            # Estilos principais (tema espacial)
│   ├── backgrounds.css       # Fundos temáticos das perguntas
│   └── achievements.css      # Estilos de conquistas
├── js/
│   ├── script.js             # Lógica principal do quiz
│   ├── questions.js          # Banco de 60 perguntas sobre a Lua
│   ├── animations.js         # Animações SVG temáticas
│   ├── names.js              # Sistema de nomes lunares aleatórios
│   ├── achievements.js       # Sistema de conquistas lunares
│   ├── avatares.js            # Avatares espaciais (fases da Lua, astronautas, etc.)
│   ├── powerups.js           # Power-ups do quiz
│   ├── sound-manager.js      # Gerenciador de sons
│   ├── visual-effects.js     # Efeitos visuais
│   └── quiz-enhancements.js  # Melhorias do quiz
├── images/
│   ├── icon.svg              # Ícone da Lua para PWA
│   └── backgrounds/          # Imagens de fundo (opcional)
└── docs/
    ├── README.md
    ├── CATEGORIAS.md         # Descrição das 12 categorias lunares
    ├── CONTEUDO_DIDATICO.md  # Conteúdo educativo sobre a Lua
    └── CHANGELOG.md          # Histórico de versões
```

## Como Usar

### Teste Local

1. Abra o terminal na pasta do projeto
2. Execute um servidor HTTP simples:
   ```bash
   python3 -m http.server 8000
   ```
3. Abra o navegador e acesse: `http://localhost:8000`

### Instalar em Tablet (iPad/iOS)

#### Método 1: Usar Safari (Recomendado)

1. **Hospedar o arquivo**:
   - Coloque os arquivos em um servidor web (GitHub Pages, Netlify, Vercel, etc.)

2. **Adicionar à Tela Inicial**:
   - Abra o Safari no iPad
   - Navegue até o endereço do quiz
   - Toque no ícone de **Compartilhar** (quadrado com seta)
   - Selecione **"Adicionar à Tela de Início"**
   - Confirme e o ícone aparecerá como um app

#### Método 2: Android

1. **Abra o Chrome** no tablet Android
2. Navegue até o endereço do quiz
3. Toque nos **três pontos** (menu)
4. Selecione **"Adicionar à tela inicial"**
5. O app aparecerá como ícone na tela

## PWA (Progressive Web App)

Este quiz funciona como um Progressive Web App, o que significa:

- ✅ Pode ser instalado como um app nativo
- ✅ Funciona offline após a primeira visita
- ✅ Atualizações automáticas quando disponível
- ✅ Experiência de tela cheia sem barras do navegador
- ✅ Ícone personalizado na tela inicial

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Animações, gradientes e design responsivo
- **JavaScript (ES6+)**: Lógica do quiz, módulos separados
- **LocalStorage API**: Persistência de dados
- **Service Workers**: Funcionamento offline (PWA)
- **Manifest.json**: Configuração do PWA

## Temas das Categorias

As 60 perguntas estão organizadas em 12 categorias temáticas:

1. **Características Físicas** (5): Tamanho, gravidade, temperatura, atmosfera
2. **Fases da Lua** (5): Lua Cheia, Nova, Crescente, Minguante, ciclo lunar
3. **Formação da Lua** (5): Teoria do Impacto Gigante, Theia, composição
4. **Missões Apollo** (5): Apollo 11, Neil Armstrong, amostras lunares
5. **Eclipses** (5): Eclipses lunares e solares, Lua de sangue
6. **Influência na Terra** (5): Marés, rotação da Terra, clima
7. **Superfície Lunar** (5): Regolito, crateras, mares lunares, água
8. **Órbita e Movimento** (5): Período orbital, lado oculto, distância
9. **Crateras e Mares** (5): Tycho, Mare Tranquillitatis, Mare Imbrium
10. **Exploração Moderna** (5): Artemis, Chang'e, Chandrayaan
11. **Mitologia e Cultura** (5): Selene, Luna, coelho na Lua
12. **Astronomia Lunar** (5): Satélite natural, reflexão da luz, tamanho

## Sistema de Dificuldade

- **Normal** (30 perguntas): Conceitos básicos e conhecimento geral
- **Difícil** (20 perguntas): Requer conhecimento mais específico
- **Muito Difícil** (10 perguntas): Fatos avançados e curiosidades científicas

## Recursos Educacionais

O projeto inclui material didático completo:

- **CONTEUDO_DIDATICO.md**: Explicações detalhadas sobre cada categoria
- **CATEGORIAS.md**: Breakdown das 60 perguntas por tema
- Baseado na pesquisa dos alunos sobre "Tudo sobre a Lua"

## Paleta de Cores (Tema Espacial/Lunar)

- **Primary**: `#1e3a5f` (Azul espacial escuro)
- **Secondary**: `#4a90e2` (Azul céu)
- **Accent**: `#c0c0c0` (Prata/Lua)
- **Success**: `#10b981` (Verde)
- **Danger**: `#ef4444` (Vermelho)
- **Background**: `#0a0e27` (Espaço profundo)

## Versão

**Versão 4.0.0** - Tema completamente redesenhado para "Tudo sobre a Lua"

## Licença

Este projeto é educacional e de código aberto.

## Créditos

Desenvolvido para alunos do 5º ano, baseado na pesquisa "Tudo sobre a Lua".

---

🌙 **Explore a Lua e aprenda ciência de forma divertida!** 🚀
