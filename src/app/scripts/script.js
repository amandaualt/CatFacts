function logar(email) {
  var parse_email =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (email) {
    if (parse_email.test(email)) {
      window.location.href = "facts.html";
    }
  }
}

var pElements = [];

function getFacts() {
  var animalType = document().getElementById("animalType");
  var valueT = animalType.options[animalType.selectedIndex].value;

  function onData(index) {
    return (result) => {
      var docs = result.data;
      pElements[index].textContent = docs.text;
    };
  }

  for (var i = 0; i < pElements.length; i++) {
    if (validateAnimalType(valueT)) {
      console.log(
        "https://cat-fact.herokuapp.com/facts/random?animalType=" + valueT
      );
      axios
        .get("https://cat-fact.herokuapp.com/facts/random?animalType=" + valueT)
        .then(onData(i))
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  $('#myModa').on('shown.bs.modal', function () {
    console.log('listener')
    //$("#myInput").trigger("focus");
  });
}

function cardFacts() {
  for (var i = 0; i < 4; i++) {
    try {
      const divConstru = document().querySelector(".construtor");
      const divCard = document().createElement("div");
      const spanDot1 = document().createElement("span");
      const spanDot2 = document().createElement("span");
      const spanDot3 = document().createElement("span");
      let pFact = document().createElement("p");

      divCard.className = "board";
      spanDot1.className = "dot";
      spanDot2.className = "dot";
      spanDot3.className = "dot";
      pFact.className = "pFacts";
      pElements.push(pFact);

      divConstru.appendChild(divCard);
      divCard.appendChild(spanDot1);
      divCard.appendChild(spanDot2);
      divCard.appendChild(spanDot3);
      divCard.appendChild(pFact);
    } catch (error) {
      console.log(error);
    }
  }
}

function validateAnimalType(animalType) {
  if (animalType.value) {
    return true;
  } else {
    animalType.className = "red";
    return false;
  }
}

function validadeNumber(number) {
  if (number.value) {
    return true;
  } else {
    number.className = "red";
    return false;
  }
}
