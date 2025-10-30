// Sistema de Avatares

class AvatarSystem {
    constructor() {
        this.avatars = [
            { id: 'calendar', emoji: '📅', name: 'Calendário' },
            { id: 'clock', emoji: '🕐', name: 'Relógio' },
            { id: 'hourglass', emoji: '⌛', name: 'Ampulheta' },
            { id: 'sun', emoji: '☀️', name: 'Sol' },
            { id: 'moon', emoji: '🌙', name: 'Lua' },
            { id: 'dragon', emoji: '🐉', name: 'Dragão Chinês' },
            { id: 'mosque', emoji: '🕌', name: 'Mesquita' },
            { id: 'pyramid', emoji: '🏜️', name: 'Pirâmide' },
            { id: 'mayan', emoji: '🗿', name: 'Moai Maia' },
            { id: 'star-david', emoji: '✡️', name: 'Estrela de Davi' },
            { id: 'globe', emoji: '🌍', name: 'Globo' },
            { id: 'earth', emoji: '🌎', name: 'Terra' },
            { id: 'time', emoji: '⏰', name: 'Despertador' },
            { id: 'sundial', emoji: '🌅', name: 'Relógio Solar' },
            { id: 'phases', emoji: '🌗', name: 'Fases Lunares' },
            { id: 'world', emoji: '🗺️', name: 'Mapa Mundi' },
            { id: 'watch', emoji: '⌚', name: 'Relógio de Pulso' },
            { id: 'timer', emoji: '⏱️', name: 'Cronômetro' }
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
