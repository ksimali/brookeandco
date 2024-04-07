function toggleMenu(){
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
}

/**
 * carousel section 
 * **/

let slideIndex = 1;
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex); // Appeler showSlides une fois que le document est chargé
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/**
 * Récupération et affichage des données JSON pour les cours populaires
 */

const popularJSON = new GestionnaireJSON();
const urlpopulaires = './coursPopulaires.json';

popularJSON.recupererDonneesJSON(urlpopulaires)
                .then(donnees => {
                    console.log("Données JSON récupérées avec succès : ", donnees);
                    //action a faire avec les données JSON récupérées
                    const parentElement = document.getElementById('popularCourses');

                    donnees.populaires.forEach(data => {
                      const cardWrapper = document.createElement('a');
                      cardWrapper.classList.add('popular-card');
                      cardWrapper.href = data.lien;
          
                      const imgWrapper = document.createElement('div');
                      imgWrapper.classList.add('categorie-img-wrapper');
          
                      const img = document.createElement('img');
                      img.src = data.image;
                      img.alt = 'Image de cours de développement web';
          
                      imgWrapper.appendChild(img);
          
                      const cardContent = document.createElement('div');
                      cardContent.classList.add('popular-card-content');
          
                      const titleModule = document.createElement('div');
                      titleModule.classList.add('card-title-module');
                      const title = document.createElement('h3');
                      title.textContent = data.titre;
                      titleModule.appendChild(title);
          
                      const formateur = document.createElement('div');
                      formateur.classList.add('formateur');
                      formateur.textContent = data.formateur;
          
                      const rating = document.createElement('div');
                      rating.classList.add('rating');
                      const ratingSpan = document.createElement('span');
                      ratingSpan.textContent = `Note : ${data.score} sur 5`;
                      rating.appendChild(ratingSpan);
          
                      const price = document.createElement('div');
                      price.classList.add('price');
                      const priceSpan = document.createElement('span');
                      priceSpan.textContent = `${data.prix} €`;
                      price.appendChild(priceSpan);
          
                      cardContent.appendChild(titleModule);
                      cardContent.appendChild(formateur);
                      cardContent.appendChild(rating);
                      cardContent.appendChild(price);
          
                      cardWrapper.appendChild(imgWrapper);
                      cardWrapper.appendChild(cardContent);
          
                      parentElement.appendChild(cardWrapper);
                  });
                })
                .catch(erreur => {
                  console.error("Une erreur est survenue lors de la récupération des données JSON : ", erreur);
                });

/**
 * Récupération et affichage des données JSON pour les cours en promotions
 */

const promotionJSON = new GestionnaireJSON();
const urlpromotions = './promotions.json';

promotionJSON.recupererDonneesJSON(urlpromotions)
                .then(donnees => {
                    console.log("Données JSON récupérées avec succès : ", donnees);
                    //action a faire avec les données JSON récupérées
                    const parentElement = document.getElementById('promo-container');

                   donnees.promotions.forEach(promotion => {
            // Créer un élément de diapositive
            const slide = document.createElement('div');
            slide.classList.add('mySlides', 'fade');

            // Créer l'élément d'image
            const image = document.createElement('img');
            image.src = promotion.image;
            slide.appendChild(image);

            // Créer l'élément de contenu
            const content = document.createElement('div');
            content.classList.add('cta-container');

            // Créer le titre
            const title = document.createElement('h1');
            title.classList.add('cta-title');
            title.textContent = promotion.titre;
            content.appendChild(title);

            // Créer le sous-titre
            const subtitle = document.createElement('p');
            subtitle.classList.add('cta-subtitle');
            subtitle.textContent = promotion.description;
            content.appendChild(subtitle);

            // Créer le bouton
            const button = document.createElement('a');
            button.classList.add('cta-btn');
            button.href = promotion.lien;
            button.target = '_blank';
            button.textContent = 'Inscrivez-vous';
            content.appendChild(button);

            // Ajouter le contenu à la diapositive
            slide.appendChild(content);

            // Ajouter la diapositive au conteneur parent
            parentElement.appendChild(slide);
        });
                })
                .catch(erreur => {
                  console.error("Une erreur est survenue lors de la récupération des données JSON : ", erreur);
                });