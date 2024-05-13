"use strict";
// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
const btnMenu = document.getElementById('btn-mobile');
function handleClick(event) {
    const button = event.currentTarget;
    const menuMobile = document.getElementById('nav');
    if (button instanceof HTMLElement && menuMobile) {
        const ativo = !menuMobile.classList.contains('active');
        if (ativo) {
            menuMobile.classList.add('active');
            button.ariaLabel = 'Fechar Menu';
            button.ariaExpanded = 'true';
        }
        else {
            menuMobile.classList.remove('active');
            button.ariaLabel = 'Abrir Menu';
            button.ariaExpanded = 'false';
        }
    }
}
btnMenu === null || btnMenu === void 0 ? void 0 : btnMenu.addEventListener('pointerdown', handleClick);
