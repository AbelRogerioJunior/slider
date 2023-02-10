//Metodo Abrir Menu
function abriMenu(){
    if(document.querySelector('.menu').style.display == "none")
    {
        document.querySelector('.menu').style.display = "block";
    }
    else
    {
        document.querySelector('.menu').style.display = "none";
    }
}

//Laco Para Gerar div das Categorias
for(let i = 0; i < 5;i++)
{
    document.querySelector('.container-categorias').innerHTML +=
    `
        <div id="categoria-${i}" class="categorias">
                    
        </div>
    `
}

//Laco para Gerar imagens nas divs
for(let i = 0; i < 4;i++)
{
    document.querySelector('.container-destaques').innerHTML +=
    `
        <div id="destaque-${i}" class="destaques" style="background:url(../img/img-${i+1}.jpg) no-repeat center center; background-size: cover;">
                        
        </div>

        <div id="container-prod-${i}" class="container-prod" >

        </div>
    `;

   for(let j = 0;j < 20;j++)
    {
        document.getElementById(`container-prod-${i}`).innerHTML +=
        `
                <div id="destaque-prod-${j}" class="produtos">
                    <img class="img-produtos" src="../img/img-${j+1}.jpg" alt="">
        
                    <h3 class="nome-produto">Nome do produto-${j+1}</h3>
        
                    <a href="#" class="info-produtos" >Saiba mais</a>
                </div>
        `;
    }
}

//Laco para gerar produtos
for(let i =0; i < 10;i++)
{
    document.querySelector('.container-produtos').innerHTML+=
    `
        <div id="produto-main-${i}" class="produtos">
            <img class="img-produtos" src="../img/img-${i+1}.jpg" alt="">

            <h3 class="nome-produto">Nome do produto-${i+1}</h3>

            <a href="#" class="info-produtos" >Saiba mais</a>
        </div>
    `
}