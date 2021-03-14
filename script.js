function logar(email) {
    var parse_email = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (email) {
        console.log('Não vazio')
        if (parse_email.test(email)) {
            window.location.href = "facts.html"
        }
    }
}

var pElements = [];

cardFacts();

function getFacts() {
    var animalType = document.getElementById("animalType");
    var valueT = animalType.options[animalType.selectedIndex].value;

    function onData(index) {
        return (result) => {
            var docs = result.data;
            console.log(index, docs.text)
            console.log(pElements, pElements[index])
            pElements[index].textContent = docs.text
        }
    }

    for(var i = 0; i < pElements.length; i++){
        if (validateAnimalType(valueT)){
            console.log('https://cat-fact.herokuapp.com/facts/random?animalType='+valueT)
            axios.get('https://cat-fact.herokuapp.com/facts/random?animalType='+valueT)
                .then(onData(i))
                .catch(function (error){
                    console.log(error);
                });
        }
    }

}

getFacts();

function cardFacts() {
    for(var i =0; i < 4; i++){
        try{
            const divConstru = document.querySelector('.construtor');
            const divCard = document.createElement('div');
            const spanDot1 = document.createElement('span');
            const spanDot2 = document.createElement('span');
            const spanDot3 = document.createElement('span');
            let pFact = document.createElement('p');
        
            divCard.className = 'board';
            spanDot1.className = 'dot';
            spanDot2.className = 'dot';
            spanDot3.className = 'dot';
            pFact.className = 'pFacts';
            pElements.push(pFact);

            divConstru.appendChild(divCard);
            divCard.appendChild(spanDot1);
            divCard.appendChild(spanDot2);
            divCard.appendChild(spanDot3);
            divCard.appendChild(pFact);
        } catch(error){
            console.log(error);
        }
    }
}


function validateAnimalType(animalType){
    return animalType ? true : false;
}
