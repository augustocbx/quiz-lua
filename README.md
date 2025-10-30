# Quiz: Calendários do Mundo

Um quiz educativo e interativo sobre os 12 tipos de calendários mais famosos do mundo, voltado para crianças até a 7ª série.

## Características

- 📅 **60 perguntas** sobre calendários mundiais (15 selecionadas aleatoriamente por sessão)
- 🌍 **12 Calendários**: Gregoriano, Juliano, Chinês, Islâmico, Maia, Etíope, Judaico, Juche, Egípcio e conceitos (Solar, Lunar, Lunissolar)
- 🎨 **Animações temáticas** de comemoração e consolo
- 🎯 **Sistema de pontuação** com critério de desempate por tempo
- 🏆 **Rankings**: temporário (últimos 5 jogadores) e permanente (top 10)
- 💾 **Persistência de dados** via localStorage
- 📱 **Design responsivo** para tablets e smartphones
- 🎭 **Nomes aleatórios** com ícones temáticos de calendários

## Estrutura do Projeto

```
quiz-cal-chines/
├── index.html                 # Página principal
├── css/
│   ├── styles.css            # Estilos principais
│   ├── backgrounds.css       # Fundos temáticos das perguntas
│   └── achievements.css      # Estilos de conquistas
├── js/
│   ├── script.js             # Lógica principal do quiz
│   ├── questions.js          # Banco de 60 perguntas
│   ├── animations.js         # Animações SVG temáticas
│   ├── names.js              # Sistema de nomes aleatórios
│   ├── achievements.js       # Sistema de conquistas
│   ├── avatars.js            # Sistema de avatares
│   ├── powerups.js           # Power-ups do quiz
│   ├── sound-manager.js      # Gerenciador de sons
│   └── visual-effects.js     # Efeitos visuais
├── images/                   # Pasta para imagens (opcional)
└── README.md                 # Este arquivo
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
   - Escolha um nome e toque em **"Adicionar"**

3. **Modo Tela Cheia**:
   - Abrirá automaticamente em tela cheia

#### Método 2: Usar GitHub Pages (Gratuito e Fácil)

1. Crie um repositório público no GitHub
2. Faça upload dos arquivos do quiz
3. Ative GitHub Pages em Settings > Pages
4. Acesse em: `https://seu-usuario.github.io/nome-do-repositorio`

### Instalar em Tablet Android

1. **Hospedar o arquivo** (mesmo do iOS)
2. Abra o Chrome no tablet
3. Navegue até o endereço do quiz
4. Toque no menu (3 pontinhos) > "Adicionar à tela inicial"

## Conteúdo Educacional

### Os 12 Calendários

1. **Gregoriano** - Solar, usado no Brasil e Ocidente
2. **Juliano** - Solar, criado em 46 a.C.
3. **Chinês** - Lunissolar, 12 animais do zodíaco
4. **Islâmico** - Lunar, 354 dias
5. **Maia** - Haab (365 dias) e Tzolkin (260 dias)
6. **Etíope** - Solar, 13 meses
7. **Judaico** - Lunissolar, mais de 3 mil anos
8. **Juche** - Solar, usado na Coreia do Norte
9. **Egípcio** - Solar, um dos mais antigos
10. **Lunar** (conceito) - Baseado nas fases da Lua
11. **Solar** (conceito) - Baseado no ciclo do Sol
12. **Lunissolar** (conceito) - Combina Sol e Lua

### Tipos de Calendários

- **Solares**: Baseados no movimento da Terra ao redor do Sol (365 dias)
- **Lunares**: Baseados nas fases da Lua (354-355 dias)
- **Lunissolares**: Combinam ambos, com ajustes periódicos

## Funcionalidades Técnicas

### Sistema de Perguntas
- 15 perguntas aleatórias de um banco de 60
- Respostas embaralhadas
- 4 opções por pergunta, apenas 1 correta
- Dificuldades: normal, hard, veryHard

### Animações

**Comemoração (ao acertar)**:
- 3 animações comuns (calendário, sol/lua, relógio)
- 1 animação rara (globo cultural - 9/10)
- 1 animação lendária (mestre do tempo - 10/10)

**Consolo (ao errar)**:
- Calendário confuso: 50%
- Tempo nublado: 30%
- Relógio quebrado: 15%
- Folha caindo: 3%
- Caos temporal: 2%

### Sistema de Rankings

**Ranking Temporário**:
- Top 3 dos últimos 5 jogadores
- Reinicia automaticamente

**Ranking Permanente**:
- Top 10 de todos os tempos
- Persistente no localStorage
- Desempate por tempo

## Requisitos

- Navegador moderno com suporte a:
  - JavaScript ES6+
  - CSS3 (gradients, animations, flexbox, grid)
  - localStorage API
  - SVG

## Suporte

Testado e otimizado para:
- ✅ iPad (Safari)
- ✅ Tablets Android (Chrome)
- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Smartphones (responsivo)

## Dicas de Uso

1. **Para melhor experiência em tablet**:
   - Use orientação horizontal (landscape)
   - Adicione à tela inicial para modo tela cheia

2. **Para resetar dados**:
   - Abra o Console do Navegador (F12)
   - Execute: `localStorage.clear()`
   - Recarregue a página

3. **Para hospedar online gratuitamente**:
   - GitHub Pages (recomendado)
   - Netlify
   - Vercel

## Alinhamento Pedagógico

**Público-alvo**: 5º ano do Ensino Fundamental (10-11 anos)

**Temas educacionais**:
- História das civilizações
- Geografia mundial
- Astronomia (Sol, Lua, ciclos)
- Matemática (contagem de dias, meses)
- Diversidade cultural

## Licença

Este projeto foi criado para fins educacionais.

---

Desenvolvido com ⏰ para ensinar sobre a diversidade cultural de medição do tempo!
# quiz-lua
