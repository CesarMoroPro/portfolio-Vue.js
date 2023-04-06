/**
 * Fichier destiné à ajouter une animation au survol d'une icone
 * Je vais utiliser une animation déjà prête dans FontAwesome
 * Je vais simplement ajouter l'attribut de l'animation plutôt que d'en créer une
 */

export function iconsHovered() {

        //* Icônes du pre-header et footer
        const iconsArray = document.querySelectorAll('.pre-header .icons, footer .icons');
        // SQA (Query Selector All) : renvoie une NodeList, il faut donc boucler avec un "for of"
        // "forEach" boucle sur une HTML Collection, renvoie une erreur sur une NodeList
        for (const icon of iconsArray) {
                icon.addEventListener('mouseover', () => {
                        icon.classList.add('fa-flip');
                });
                icon.addEventListener('mouseout', () => {
                        icon.classList.remove('fa-flip');
                })
        }     
}
