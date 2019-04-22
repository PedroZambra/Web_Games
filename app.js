var indice=0;

function juegos(){
    var games = ['img/apex1.jpg','img/pubg1.jpg','img/csgo1.jpg'];
    document.getElementById('imagenes').classList.remove('animacion1');
    document.getElementById('imagenes').classList.add('animacion');
    document.slide.src = games[indice];
    if(indice<2){
        indice++;
    }else{
        indice=0;
    }
}
setInterval(juegos,5000);

document.getElementById('boton_menu').addEventListener('click', menuDes);

function menuDes(){
    document.getElementById('menu2').classList.toggle('asd');
}