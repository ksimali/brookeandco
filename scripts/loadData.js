function loadCoursAsyncData(){
    var cours = JSON.parse(localStorage.getItem("selectedCoursAsync"));
    console.log("cours", cours);

    document.getElementById("mainTitle").innerHTML = cours[0].titre;
    document.getElementById("mainDescription").innerHTML = cours[0].description;
    document.getElementById("rating").innerHTML = cours[0].notation + " (05 ratings)";
    document.getElementById("mainPrice").innerHTML = cours[0].cout + "€";
    document.getElementById("nbSection").innerHTML = cours[0].sections.length;
    document.getElementById("heureTotal").innerHTML = cours[0].durée;
    document.getElementById("enseignantName").innerHTML = cours[0].enseignant;

    const addButton = document.getElementById("addPanierButton");
    addButton.addEventListener('click', function(){
        addPanier(cours);
    })
    
    const parentElementTable = document.getElementById('tableSection');

    // Création des données à afficher dans la table
    var data = [];

    cours[0].sections.forEach(section => {
        section.videos.forEach(v=>{
            data.push(v.description);
        })
    })

    // Boucle à travers les données et crée une ligne pour chaque élément
    data.forEach(item => {
        // Création de l'élément de ligne
        const rowElement = document.createElement('tr');

        // Création de l'élément de cellule pour chaque élément de données
        const cellElement = document.createElement('td');
        cellElement.classList.add('p-3');

        // Création de l'élément de span avec l'icône et le texte
        const spanElement = document.createElement('span');
        const iconElement = document.createElement('i');
        iconElement.classList.add('bi', 'bi-check-lg');
        spanElement.appendChild(iconElement);
        spanElement.innerHTML += `&nbsp;&nbsp;${item}`;

        // Ajout du span à la cellule
        cellElement.appendChild(spanElement);

        // Ajout de la cellule à la ligne
        rowElement.appendChild(cellElement);

        // Ajout de la table au parentElement
        parentElementTable.appendChild(rowElement);
    });



    const parentElementAccordion = document.getElementById('accordionSection');
    cours[0].sections.forEach(section => {
        // Création de l'élément accordion-item
        const accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');
        
        // Création de l'élément accordion-header
        const accordionHeader = document.createElement('h2');
        accordionHeader.classList.add('accordion-header');
        
        // Création de l'élément button à l'intérieur de l'accordion-header
        const accordionHeaderButton = document.createElement('button');
        accordionHeaderButton.classList.add('accordion-button');
        accordionHeaderButton.type = 'button';
        accordionHeaderButton.dataset.bsToggle = 'collapse';
        accordionHeaderButton.dataset.bsTarget = '#collapseOne';
        accordionHeaderButton.setAttribute('aria-expanded', 'true');
        accordionHeaderButton.setAttribute('aria-controls', 'collapseOne');
        accordionHeaderButton.innerHTML = '<strong>' + section.titre +  '</strong>';
        
        // Ajout du button à l'accordion-header
        accordionHeader.appendChild(accordionHeaderButton);
        
        // Création de l'élément div pour le contenu de l'accordéon
        const accordionCollapse = document.createElement('div');
        accordionCollapse.id = 'collapseOne';
        accordionCollapse.classList.add('accordion-collapse', 'collapse', 'show');
        accordionCollapse.dataset.bsParent = '#accordionSection';
        
        // Création de l'élément div pour le corps du contenu de l'accordéon
        const accordionBody = document.createElement('div');
        accordionBody.classList.add('accordion-body');
        
        section.videos.forEach(v => {
            // Création de l'élément div pour la card-title
            const cardTitle = document.createElement('div');
            cardTitle.classList.add('card-title');
            cardTitle.style.display = 'flex';
            cardTitle.style.flexDirection = 'row';
            cardTitle.style.margin = '5px 15px -8px 15px';

            // Création de l'élément i pour l'icône
            const icon = document.createElement('i');
            icon.classList.add('bi', 'bi-play-btn');
            icon.style.marginRight = '15px';
            
            // Création de l'élément a pour le titre
            const titleLink = document.createElement('a');
            titleLink.textContent = v.titre;
            titleLink.href = v.url;
            titleLink.style.flex = '1';
            
            // Création de l'élément p pour la durée
            const durationParagraph = document.createElement('p');
            durationParagraph.textContent = v.durée + ':00';
            
            // Ajout des éléments à card-title
            cardTitle.appendChild(icon);
            cardTitle.appendChild(titleLink);
            cardTitle.appendChild(durationParagraph);

            // Ajout de card-title à accordion-body
            accordionBody.appendChild(cardTitle);
        })
        
        // Ajout de accordion-body à accordion-collapse
        accordionCollapse.appendChild(accordionBody);
        
        // Ajout de accordion-collapse à accordion-item
        accordionItem.appendChild(accordionHeader);
        accordionItem.appendChild(accordionCollapse);
        
        // Ajout de accordion-item à parentElement
        parentElementAccordion.appendChild(accordionItem);
    });

    var panier = JSON.parse(localStorage.getItem('panier'));
    if(panier){
        document.getElementById('countItemCart').innerHTML = panier.quantite;
    }
}

function addPanier(cours) {
    var panier = JSON.parse(localStorage.getItem("panier"));
    if (panier) {
        panier.subtotal += cours[0].cout;
        panier.quantite += 1;

        panier.panierItem.push({
            'id': cours[0].id,
            'image': cours[0].image,
            'nom': cours[0].titre,
            'prix': cours[0].cout
        });
    } else {
        panier = {
            'subtotal': cours[0].cout,
            'quantite': 1,
            'panierItem': [{
                'id': cours[0].id,
                'image': cours[0].image,
                'nom': cours[0].titre,
                'prix': cours[0].cout
            }]
        };
    }
    document.getElementById('countItemCart').innerHTML = panier.quantite;
    localStorage.setItem('panier', JSON.stringify(panier));
}
