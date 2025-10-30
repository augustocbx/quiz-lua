// Sistema de Avatares

class AvatarSystem {
    constructor() {
        this.avatars = [
            { id: 'full-moon', emoji: '🌕', name: 'Lua Cheia' },
            { id: 'new-moon', emoji: '🌑', name: 'Lua Nova' },
            { id: 'crescent', emoji: '🌙', name: 'Lua Crescente' },
            { id: 'first-quarter', emoji: '🌓', name: 'Quarto Crescente' },
            { id: 'last-quarter', emoji: '🌗', name: 'Quarto Minguante' },
            { id: 'astronaut', emoji: '👨‍🚀', name: 'Astronauta' },
            { id: 'rocket', emoji: '🚀', name: 'Foguete' },
            { id: 'telescope', emoji: '🔭', name: 'Telescópio' },
            { id: 'satellite', emoji: '🛰️', name: 'Satélite' },
            { id: 'earth', emoji: '🌎', name: 'Terra' },
            { id: 'stars', emoji: '✨', name: 'Estrelas' },
            { id: 'planet', emoji: '🪐', name: 'Planeta' },
            { id: 'comet', emoji: '☄️', name: 'Cometa' },
            { id: 'galaxy', emoji: '🌌', name: 'Galáxia' },
            { id: 'alien', emoji: '👽', name: 'Alienígena' },
            { id: 'ufo', emoji: '🛸', name: 'OVNI' },
            { id: 'meteor', emoji: '💫', name: 'Meteoro' },
            { id: 'space', emoji: '🌠', name: 'Estrela Cadente' }
        ];

        this.selectedAvatar = this.loadSavedAvatar() || this.avatars[0];
    }

    loadSavedAvatar() {
        const saved = localStorage.getItem('selectedAvatar');
        if (saved) {
            const avatarId = saved;
            return this.avatars.find(a => a.id === avatarId) || null;
        }
        return null;
    }

    saveAvatar(avatarId) {
        const avatar = this.avatars.find(a => a.id === avatarId);
        if (avatar) {
            this.selectedAvatar = avatar;
            localStorage.setItem('selectedAvatar', avatarId);
            return true;
        }
        return false;
    }

    getSelectedAvatar() {
        return this.selectedAvatar;
    }

    getAllAvatars() {
        return this.avatars;
    }

    getAvatarEmoji() {
        return this.selectedAvatar.emoji;
    }

    getAvatarName() {
        return this.selectedAvatar.name;
    }

    // Criar seletor de avatar
    createAvatarSelector() {
        const container = document.createElement('div');
        container.className = 'avatar-selector-container';
        container.style.cssText = 'text-align: center; margin: 20px 0;';

        const title = document.createElement('h3');
        title.textContent = 'Escolha seu Avatar:';
        title.style.cssText = 'color: white; margin-bottom: 15px; font-size: 18px;';
        container.appendChild(title);

        const selector = document.createElement('div');
        selector.className = 'avatar-selector';
        selector.style.margin = '0 auto';

        this.avatars.forEach(avatar => {
            const option = document.createElement('div');
            option.className = 'avatar-option';
            option.title = avatar.name;
            option.textContent = avatar.emoji;
            option.dataset.avatarId = avatar.id;

            if (avatar.id === this.selectedAvatar.id) {
                option.classList.add('selected');
            }

            option.addEventListener('click', () => {
                // Remover seleção anterior
                selector.querySelectorAll('.avatar-option').forEach(opt => {
                    opt.classList.remove('selected');
                });

                // Selecionar novo
                option.classList.add('selected');
                this.saveAvatar(avatar.id);

                // Som de feedback
                if (soundManager) soundManager.playClick();
            });

            selector.appendChild(option);
        });

        container.appendChild(selector);
        return container;
    }

    // Criar elemento de avatar para display
    createAvatarDisplay() {
        const display = document.createElement('div');
        display.className = 'player-avatar';
        display.innerHTML = `
            <div class="player-avatar-icon">${this.getAvatarEmoji()}</div>
        `;
        return display;
    }
}

// Instância global
const avatarSystem = new AvatarSystem();
