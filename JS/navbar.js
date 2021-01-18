/*window.addEventListener('scroll', function () {
    console.log(document.documentElement.scrollTop);
});*/

let taille1 = window.innerWidth;
let taille2 = document.body.clientWidth;
let taille3 = document.documentElement.clientWidth;

/*console.log(taille1);
console.log(taille2);
console.log(taille3);*/

//Si l'ecran > 800px
if (taille1 > 800 || taille2 > 800 || taille3 > 800)
{
    window.addEventListener('scroll', function(e){
        let el = document.querySelector("#header");
        //console.log("height ="+el.offsetHeight);

        if (document.documentElement.scrollTop > el.offsetHeight || document.body.scrollTop > el.offsetHeight){
            //console.log("superieur");
            el.style.position = "fixed";
            el.style.height = "9vh";
            el.style.paddingTop = "0";
        }
        else{
            //console.log("inferieur");
            el.style.position = "";
        }
    });

}
