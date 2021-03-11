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
    axios
        .get('https://cat-fact.herokuapp.com/facts')
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