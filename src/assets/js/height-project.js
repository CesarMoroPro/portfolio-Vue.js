/**
 * STEP 1 : Ici, le but est de récupérer la hauteur de la carte de projet la plus grande, pour la réinjecter dans le css de toutes les cartes de projets.
 * STEP 2 : À voir s'il est possible de récupérer la plus grande carte de projet mais de chaque ligne, afin d'adapter les cartes  uniquement de la même ligne
 */

export function initHeightProjectCard() {
        // Je récupère toutes les cartes de projets, soit '.one-project'
        const projectCardsArray = document.querySelectorAll('.one-project');
        // Je crée un tableau destiné à stocker toutes les hauteurs récupérées
        const heightArray = [];

        // Je boucle sur chaque carte de projet pour récupérer sa hauteur que je stocke dans une variable
        projectCardsArray.forEach(projectCard => {
                const height = projectCard.offsetHeight;
                
                // Je stocke chaque nouvelle hauteur dans le tableau
                heightArray.push(height);
        });
        

        // Parmi toutes les valeurs du tableau, je trie dans l'ordre décroissant avec la méthode '.sort()'
        // MAIS ! Elle renvoie des chaînes de caractères. Il faut une fonction que l'on incluera dans 'sort()'
        function compare(x, y) {
                return y - x;
        }
        heightArray.sort(compare);

        /* Maintenant que le tableau est rangé par ordre décroissant avec des Numbers et non des Strings,
        je récupère le premier élément du tableau qui est donc la hauteur la plus haute */
        const higherHeight = heightArray[0];
        
        // Je peux maintenant injecter cette nouvelle valeur dans tous les éléments qui ont la classe '.one-project', dans la propriété 'height'
        projectCardsArray.forEach(element => {
                element.style.height = higherHeight + "px";
        });
        
        console.log(higherHeight)
}
