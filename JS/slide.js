let index = 1;
afficher(index); // afficher la premiere image

function incrementer(n) // incrementer l'index de n et afficher l'image correspondante
{
    afficher(index += n);
}

function positionActuelle(n) // afficher l'image a l'index n
{
    afficher(index = n);
}

function afficher(n) 
{
    let i;
    let slides = document.getElementsByClassName("project-box");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) 
    { 
        index = 1; // Remettre au debut
    }
    if (n < 1)
    { 
        index = slides.length; // Mettre a la fin
    }

    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none"; // cacher toutes les images 
    }

    for (i = 0; i < dots.length; i++) 
    {
        // remettre les dots en non-active
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[index - 1].style.display = "block"; // mettre a jour l'affichage
    dots[index - 1].className += " active"; // mettre a jour l'affichage des dots
}

