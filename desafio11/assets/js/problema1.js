
const img = document.querySelector(".imagen");

img.style.border = "0px";

const cambiarBorde = () => {
    valorBorde = img.style.border;
    if (img.style.border == "0px"){
        img.style.border = "2px solid red";
    }else{
        img.style.border = "0px";
    }
}
