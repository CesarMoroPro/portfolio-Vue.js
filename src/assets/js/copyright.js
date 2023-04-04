/* Ce fichier est destiné à injecter dans le footer l'année du copyright de manière automatisée */

export function letsGetCurrentYear() {
        // Je définis une constante qui stocke l'année en cours
        const date = new Date;
        const currentYear = date.getFullYear();
        // console.log(currentYear);

        // Je récupère l'élément 
        const copyYear = document.querySelector('#copy-year');

        // Je remplace le contenu de cet élément par l'année stockée dans la variable
        copyYear.textContent = currentYear;
}