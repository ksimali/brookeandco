// enregistre une référence pour chaque element du formulaire
const loginForm = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');


/*  Ajout d'un EventListener sur le formulaire pour empêcher 
    la soumission du formulaire avant la validation des inputs. */
    loginForm.addEventListener('submit', e => {
        e.preventDefault(); // empêche la soumisson du formulaire

        var isValid = validateInputs() // validation des inputs
        if(isValid){
            connexion();
        }
    });
 
// fonction qui recoit un element html un message d'erreur en paramètre
const setError = (element, message) =>{
    const inputControl = element.parentElement; // recupere le parent de l'element en paramètre
    const errorDisplay = inputControl.querySelector('.error') // selectionner les balises de classe error
    const myInput = inputControl.querySelector('input'); // selectionner les balises input

    errorDisplay.innerText = message;
    errorDisplay.style.fontSize = "small"; // Add small font-size when error validation
    errorDisplay.style.color = "#ff3860";   // Add red color to the error text validation
    myInput.style.borderColor= '#ff3860';
}

const setSuccess = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const myInput = inputControl.querySelector('input');

    errorDisplay.innerText = message;
    errorDisplay.style.fontSize = "small";
    errorDisplay.style.color = "#09c372";   // Add green color to the .error class
    myInput.style.borderColor= '#09c372';
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    var testValidation = false;

    // conditions de validation pour chaque value
        // validation du courriel
        if(emailValue === ''){
            setError(email, 'Courriel obligatoire');
            testValidation = true;
        }else if(!emailValue.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
            setError(email, 'format du courriel non autorisé ! ');
            testValidation = true;
        }else{
            setSuccess(email, 'C\'est parfait!');
        }

        // validation mot de passe
        if(passwordValue === ''){
            setError(password, "Mot de passe obligatoire");
            testValidation = true;
        }else if(!passwordValue.match(/^[[a-zA-Z0-9_|\-\s]{2,8}$/)){
            setError(password, 'Format a respecter: entre 2 et 8 caractères');
            testValidation = true;
        }else{
            setSuccess(password, 'C\'est parfait!');
        }
    return testValidation;
}

function connexion() {
    // Récupérer les valeurs du formulaire
    var emailValue = email.value;
    var passwordValue = password.value;

    // Faire une requête pour charger le fichier JSON
    fetch('user.json')
    .then(response => response.json())
    .then(data => {
        // Vérifier si l'email et le mot de passe existent dans le JSON chargé
        var userFound = data.users.find(function(user) {
            return user.email === emailValue && user.password === passwordValue;
        });

        // Afficher un message en fonction du résultat de la vérification
        if (userFound) {
            alert("Connexion réussie !");
            // Vous pouvez rediriger l'utilisateur vers une autre page ici
        } else {
            alert("Email ou mot de passe incorrect !");
        }
    })
    .catch(error => {
        console.error('Une erreur est survenue lors du chargement du fichier JSON :', error);
    });
}