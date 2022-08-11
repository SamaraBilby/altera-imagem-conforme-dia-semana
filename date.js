let trocaBannerLeilao = document.querySelector("#leilao");

    let d = new Date();
    let dia= d.getDay();
    let hora = d.getUTCHours() - 3;
    console.log(dia)
    console.log(hora)

function trocaBanner() {

    let bannerLeilao = ""; 

    if(dia == 5 && hora >= 15 || dia == 6 || dia == 0 || dia == 1 || dia == 2 && hora < 15)
    {

        bannerLeilao += `<img src="./image/como_se_chama_mickey_mouse_em_diferentes_paises_11152_600_square.jpeg" class="leilao-quinta" alt="">`;
    }
   else if(dia == 2 && hora >= 15 || dia == 3 || dia == 4 || dia == 5 && hora < 15){
        bannerLeilao += `<img src="./image/Mickey-Mouse-Disney.jpeg" class="leilao-quinta" alt="">`;
    };
    trocaBannerLeilao.innerHTML = bannerLeilao;
}

trocaBanner();

/* let trocaBannerLeilao = document.querySelector(".banner-topo-leilao");

    let d = new Date();
    let dia= d.getDay();
    let hora = d.getUTCHours() - 3;
  

function trocaBanner() {

    let bannerLeilao = ""; 

    if(dia == 5 && hora >= 15 || dia == 6 || dia == 0 || dia == 1 || dia == 2 && hora < 15) {

        bannerLeilao += '<img src="/custom/content/themes/JoiasVIP/header_footer_2020/banners/2022/05/19/segunda.gif" alt="Essse leilão encerra na segunda-feira">';
    }
   else if(dia == 2 && hora >= 15 || dia == 3 || dia == 4 || dia == 5 && hora < 15){
	   
        bannerLeilao += '<img src="/custom/content/themes/JoiasVIP/header_footer_2020/banners/2022/05/19/quinta.gif" alt="Esse leilão encerra na quinta-feira">';
    };
	
    trocaBannerLeilao.innerHTML = bannerLeilao;
}

trocaBanner(); */