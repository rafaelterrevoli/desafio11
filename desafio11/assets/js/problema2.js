const verificar = () => {
    const numStickersGo = document.querySelector("#go").value;
    const numStickersRust = document.querySelector("#rust").value;
    const numStickersZig = document.querySelector("#zig").value;
    const totalStickers = Number(numStickersGo) + Number(numStickersRust) + Number(numStickersZig)
    const mensaje = document.querySelector(".stickers-h2");

    if (totalStickers <= 10){
        mensaje.innerHTML = "Llevas "+ totalStickers +" stickers"
    }else{
        mensaje.innerHTML = "Llevas demasiados stickers"
    }
}