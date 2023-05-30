

    //loading
    function loading() {
    
        document.getElementsByClassName("loading-box")[0].style.display = "none";
        document.getElementsByClassName("content-box")[0].style.display = "block";
    
}

    const girlHover = document.querySelector('.girl-hover');
    const manHover = document.querySelector('.man-hover');
    const desktopImage = document.querySelector('.desktop');

    girlHover.addEventListener('mouseover', () => {
        desktopImage.setAttribute('src', 'rapaz_e_Menina_so_menina.png');
        desktopImage.style.zIndex = '-500';

    });

    girlHover.addEventListener('mouseleave', () => {
        desktopImage.setAttribute('src', 'rapaz_e_Menina2.png');
        desktopImage.style.zIndex = '0';

    });

    manHover.addEventListener('mouseover', () => {
        desktopImage.setAttribute('src', 'rapaz_e_Menina_so_rapaz.png');
        desktopImage.style.zIndex = '-200';

    });

    manHover.addEventListener('mouseleave', () => {
        desktopImage.setAttribute('src', 'rapaz_e_Menina2.png');
        desktopImage.style.zIndex = '0';

    });

    // mudança de troca de imagens - main (after/before)
    const botaoAnterior = document.getElementById('before');
    const botaoProximo = document.getElementById('after');
    const imagem = document.getElementById('people');
    const imagens = ['./assets/seq_butons_mobile_desktop/sequencia_de_fotos_01.png', './assets/seq_butons_mobile_desktop/sequencia_de_fotos_03.png', './assets/seq_butons_mobile_desktop/sequencia_de_fotos_04.png', './assets/seq_butons_mobile_desktop/sequencia_de_fotos_05.png', './assets/seq_butons_mobile_desktop/sequencia_de_fotos_02.png'];
    const paragrafos = document.querySelectorAll('.texts-arrows p')
    let indice = 0;
    paragrafos[indice].classList.add('active');

    imagem.src = imagens[indice]; // definir a imagem inicial

    function atualizarImagem() {
        imagem.src = imagens[indice];
    }

    botaoAnterior.addEventListener('click', function () {
        indice = (indice - 1 + imagens.length) % imagens.length;
        atualizarParagrafo(indice);
        atualizarImagem();
    });

    botaoProximo.addEventListener('click', function () {
        indice = (indice + 1) % imagens.length;
        atualizarParagrafo(indice);
        atualizarImagem();
    });

    function atualizarParagrafo(indice) {
        for (let i = 0; i < paragrafos.length; i++) {
            paragrafos[i].classList.remove('active');
        }
        paragrafos[indice].classList.add('active');
    }


    //troca de imagens after-before (mobile)
    const botaoAnteriorMobile = document.getElementById('before-mobile');
    const botaoProximoMobile = document.getElementById('after-mobile');
    const image = document.getElementById('people-mobile');
    const images = ['sequencia_de_fotos_02_mobile.png', 'sequencia_de_fotos_03_mobile.png', 'sequencia_de_fotos_04_mobile.png', 'sequencia_de_fotos_05_mobile.png', 'sequencia_de_fotos_01_mobile.png'];
    let indi = 0;

    botaoAnteriorMobile.addEventListener('click', function () {
        indi = (indi - 1 + images.length) % images.length;
        image.src = images[indi];
    });

    botaoProximoMobile.addEventListener('click', function () {
        indi = (indi + 1) % images.length;
        image.src = images[indi];
    });



    // Slider Botões (Planos)

    const btnAnterior = document.getElementById('anterior-botao');
    const btnProximo = document.getElementById('proximo-botao');
    const img = document.getElementById('dupla');
    const imgs = ['./../assets/scroll/imagem_dupla_002.png', './../assets/scroll/imagem_dupla_003.png', './../assets/scroll/imagem_dupla_001.png'];
    let indic = 0;


