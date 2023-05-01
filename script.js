let currentIndex = 0;
const buttonBack = document.querySelector('.button-back');
const buttonNext = document.querySelector('.button-next');

const submitButton = document.getElementById('submit-button');
const nextButtonDisplay = document.getElementById('button-next-one');

const containerFormGroup = document.getElementsByClassName('container-form-group');

const max = containerFormGroup.length;

function nextContainerForm() {
    containerFormGroup[currentIndex].classList.remove("selected");

    currentIndex++

    if(currentIndex >= max - 1) {
        buttonNext.innerHTML = "Enviar";
        nextButtonDisplay.style.display = "none";
        submitButton.style.display = "flex";
    };

    if(currentIndex >= max) {
        currentIndex = max - 1;
        };

    containerFormGroup[currentIndex].classList.add("selected");
    
};

function backContainerForm() {
    containerFormGroup[currentIndex].classList.remove("selected");

    if(currentIndex === 0) {
        currentIndex = 0;
    };

    if(currentIndex > 0) {
    currentIndex--
    };

    if(submitButton.style.display === "flex" &&
     nextButtonDisplay.style.display === "none") {
        submitButton.style.display = "none";
        nextButtonDisplay.style.display = "flex"
        buttonNext.innerHTML = "Próximo";
    }

    containerFormGroup[currentIndex].classList.add("selected");
};

buttonNext.addEventListener('click', nextContainerForm);
buttonBack.addEventListener('click', backContainerForm);


// ---------- Form Submit ----------

const nameClient = document.getElementById('name');
const nameBusiness = document.getElementById('name-business');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const nameInstagram = document.getElementById('name-instagram');
const regionAtuation = document.getElementById('region-atuation');
const time = document.getElementById('time');
const yesNo = document.getElementById('yes-no');
const conversao = document.getElementById('conversao');
const engajamento = document.getElementById('engajamento');
const cadastro = document.getElementById('cadastro');
const alcance = document.getElementById('alcance');
const visualizacao = document.getElementById('visualizacao');
const genero = document.getElementById('genero');
const minAge = document.getElementById('min-age');
const maxAge = document.getElementById('max-age');
const orcamento = document.getElementById('orcamento');

function setChange() {
    let name_client = nameClient.value;
    let name_business = nameBusiness.value;
    let email_ = email.value;
    let phone_ = phone.value;
    let name_instagram = nameInstagram.value;
    let region_atuation = regionAtuation.options[regionAtuation.selectedIndex].value;
    let time_ = time.options[time.selectedIndex].value;
    let yes_no = yesNo.options[yesNo.selectedIndex].value;
    let conversao_ = conversao.checked;
    let engajamento_ = engajamento.checked;
    let cadastro_ = cadastro.checked;
    let alcance_ = alcance.checked;
    let visualizacao_ = visualizacao.checked;
    let genero_ = genero.options[genero.selectedIndex].value;
    let min_age = minAge.value;
    let max_age = maxAge.value;
    let orcamento_ = orcamento.options[orcamento.selectedIndex].value

    let primeiro = document.getElementById('primeiro');
    let segundo = document.getElementById('segundo');
    let terceiro = document.getElementById('terceiro');
    let quarto = document.getElementById('quarto');
    let quinto = document.getElementById('quinto');
    let sexto = document.getElementById('sexto');
    let setimo = document.getElementById('setimo');
    let oitavo = document.getElementById('oitavo');
    let nono = document.getElementById('nono');
    let decimo = document.getElementById('decimo');
    let decPrimeiro = document.getElementById('d-primeiro');
    let decSegundo = document.getElementById('d-segundo');
    let decTerceiro = document.getElementById('d-terceiro');
    let decQuarto = document.getElementById('d-quarto');
    let decQuinto = document.getElementById('d-quinto');
    let decSexto = document.getElementById('d-sexto');
    let decSetimo = document.getElementById('d-setimo');

    primeiro.value = name_client;
    segundo.value = name_business;
    terceiro.value = email_;
    quarto.value = phone_;
    quinto.value = name_instagram;
    sexto.value = region_atuation;
    setimo.value = time_;
    oitavo.value = yes_no;
    nono.value = conversao_;
    decimo.value = engajamento_;
    decPrimeiro.value = cadastro_;
    decSegundo.value = alcance_;
    decTerceiro.value = visualizacao_;
    decQuarto.value = genero_;
    decQuinto.value = min_age;
    decSexto.value = max_age;
    decSetimo.value = orcamento_;
}

nameClient.addEventListener('change', setChange);
nameBusiness.addEventListener('change', setChange);
email.addEventListener('change', setChange); 
phone.addEventListener('change', setChange);
nameInstagram.addEventListener('change', setChange) 
regionAtuation.addEventListener('change', setChange) 
time.addEventListener('change', setChange) 
yesNo.addEventListener('change', setChange) 
conversao.addEventListener('change', setChange) 
engajamento.addEventListener('change', setChange) 
cadastro.addEventListener('change', setChange) 
alcance.addEventListener('change', setChange) 
visualizacao.addEventListener('change', setChange) 
genero.addEventListener('change', setChange) 
minAge.addEventListener('change', setChange) 
maxAge.addEventListener('change', setChange) 
orcamento.addEventListener('change', setChange) 

    



    

    


