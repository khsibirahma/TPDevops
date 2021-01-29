let taille1 = window.innerWidth;
let taille2 = document.body.clientWidth;
let taille3 = document.documentElement.clientWidth;

//Si l'ecran > 800px
if (taille1 > 800 || taille2 > 800 || taille3 > 800)
{
    window.onscroll = function () 
    {
        let el = document.querySelector("#header");
        let logo = document.querySelector("#logo");

        if (document.documentElement.scrollTop > el.offsetHeight || document.body.scrollTop > el.offsetHeight)
        {
            el.style.position = "fixed";
            el.style.height = "6vh";
            el.style.padding = "0% 5%";
            logo.style.paddingTop = "1vh" ;
        }
        else
        {
            el.style.position = "relative";
            el.style.height = "14vh";
            el.style.padding = "1% 5%";
            logo.style.paddingTop = "0vh";
        }
    };
}
else
{

}


