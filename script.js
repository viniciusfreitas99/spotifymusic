let musicas = [
    {titulo: 'musica 1', artista: 'Desconhecido', src:'musicas/Tinker Time - Nathan Moore.mp3', img: 'imagens/joshua-coleman-LboV5Qpqm1E-unsplash.jpg'},
    {titulo: 'musica 2', artista: 'Desconhecido', src:'musicas/The Goons Loose - Nathan Moore.mp3', img: 'imagens/gift-habeshaw-Etxf65FaTrs-unsplash.jpg'},
    {titulo: 'musica 3', artista: 'Desconhecido', src:'musicas/Look Both Ways - Nathan Moore.mp3', img: 'imagens/giancarlo-duarte-cTj8vbZeX44-unsplash.jpg'}

];

let musica = document.querySelector('audio');
let indexMusica = 0;

//eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);


document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica-- ;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++ ;
    if (indexMusica > 2) {
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

//funções

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index.titulo];
        nomeArtista.textContent = musicas[index.artista];
        imagem.src = musicas[index].img; 
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

   });
};

function tocarMusica() {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';

}

function pausarMusica() {
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+ '' + campoSegundos;
}

