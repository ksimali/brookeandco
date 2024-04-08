class GestionnaireJSON {
    // Méthode pour récupérer les données JSON à partir de l'URL spécifiée
    async recupererDonneesJSON(url) {
        try {
            const reponse = await fetch(url);
            if (!reponse.ok) {
                throw new Error('Erreur lors de la récupération des données JSON');
            }
            const donneesJSON = await reponse.json();
            return donneesJSON;
        } catch (erreur) {
            console.error('Une erreur est survenue : ', erreur);
        }
    }
}