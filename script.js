function logar(email) {
    var parse_email = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (email) {
        console.log('Não vazio')
        if (parse_email.test(email)) {
            window.location.href = "facts.html"
        }
    }
}


function getFacts(document) {
    var animalType = document.getElementById("animalType");
    var number = document.getElementById("number");

    if (validateAnimalType(animalType) && validadeNumber(number)){
        axios
        .get('https://cat-fact.herokuapp.com/facts/random?animalType='+animalType+'&amount='+number) 
        .then(function (res) {
            var docs = res.data;
            for (var i = 0; i < docs.length; i++) {
                console.log(docs[i].text)
                // aqui vai o código que adiciona na tela
                //para pegar os fatos, utilize: 
                //document.elemento = docs[i].text;
            }
        })
        .catch(function (error){
            console.log(error);
        });

    }
}


function validateAnimalType(animalType){
    if(animalType.value){
        return true;
    } else {
        animalType.className = "red"
        return false;
    }
}

function validadeNumber(number){
    if (number.value){
        return true;
    } else {
        number.className = "red";
        return false;
    }
}