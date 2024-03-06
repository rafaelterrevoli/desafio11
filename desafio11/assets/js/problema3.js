const ingresar = () => {
    const selectUno = document.querySelector("#select1").value; 
    const selectDos = document.querySelector("#select2").value; 
    const selectTres = document.querySelector("#select3").value; 
    const mensaje = document.querySelector(".stickers-h2");
    const password = selectUno + selectDos + selectTres
    
    if (password == "911"){
        mensaje.innerHTML = "password 1 correcto"
    }else if (password == "714") {
        mensaje.innerHTML = "password 2 correcto"
    }else{
        mensaje.innerHTML = "password incorrecto"
    }
    
}