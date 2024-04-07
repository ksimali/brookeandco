import GestionnaireJSON from "GestionnaireJSON.js";

function toggleMenu(){
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
}

/**
 * carousel section 
 * **/

let slideIndex = 1;
showSlides(slideIndex);

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

const GestionnaireJSON = new GestionnaireJSON();
const urlpopulaires = './coursPopulaires';

GestionnaireJSON.recupererDonneesJSON(urlpopulaires)
                .then(donnees => {
                    console.log("Données JSON récupérées avec succès : ", donnees);
                    //action a faire avec les données JSON récupérées
                })
                .catch(erreur => {
                  console.error("Une erreur est survenue lors de la récupération des données JSON : ", erreur);
                });