/* ce fichier sert à importer tous mes fichiers de JS custom pour ne faire qu'un seul import dans le fichier principal 'main.js' */

import { letsGetCurrentYear } from './custom-files/copyright.js';
import { iconsHovered } from './custom-files/icons-hovered.js';
import { initHeightProjectCard } from './custom-files/height-project.js';

export function customJsFiles() {

        // Pre-Header + Footer
        iconsHovered();

        // Main-div
        initHeightProjectCard(); /* Calcule la hauteur des cartes dès le chargement de la page */
        screen.addEventListener('resize', initHeightProjectCard ); /* Calcule la hauteur des cartes à chaque changement de taille de la fenêtre */
        
        // Footer
        letsGetCurrentYear();
}