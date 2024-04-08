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

// Ajoutez cet événement pour démarrer automatiquement le slideshow
var slideInterval = setInterval(function() {
  plusSlides(1);
}, 5000); // Changez le temps en millisecondes selon vos préférences

function loadData() {

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




