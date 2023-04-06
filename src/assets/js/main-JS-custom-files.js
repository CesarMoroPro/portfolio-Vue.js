/* ce fichier sert à importer tous mes fichiers de JS custom pour ne faire qu'un seul import dans le fichier principal 'main.js' */

import { letsGetCurrentYear } from './custom-files/copyright.js';
import { iconsHovered } from './custom-files/icons-hovered.js';
// import { windowSizeDetection } from './assets/js/window-size-detection.js';

export function customJsFiles() {

        // Pre-Header + Footer
        iconsHovered();

        // Main-div
        // windowSizeDetection();
        
        // Footer
        letsGetCurrentYear();
}