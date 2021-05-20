function isValidValues(animal, fact) {
  let isValidValues = true;
  if (!animal.value) {
    animal.focus();
    animal.className;
    isValidValues = false;
  }

  if (!fact.value) {
    fact.focus();
    fact.className;
    isValidValues = false;
  }
  return isValidValues;
}

function addFact() {
  let animal = document.getElementById("animal");
  let fact = document.getElementById("fact");

  if (isValidValues(animal, fact)) {
    $.post(
      "http://localhost:3000/facts/newFact",
      {
        animal: animal.value,
        fact: fact.value,
      },
      (res) => {
        window.localStorage.setItem("token", res.token);
        window.location = "facts.html";
      }
    );
  }
}

function logout() {
  (res) => {
    delete window.sessionStorage.setItem("token", res.token);
    delete window.sessionStorage.setItem("user", res.user);
    redirect("fato");
  };
}

var pElements = [];

cardFacts();

function getFacts() {
  var animalType = document.getElementById("animalType");

  function onData(index) {
    return (result) => {
      var docs = result.data;
      console.log(index, docs.text + "1");
      console.log(pElements, pElements[index]);
      pElements[index].textContent = docs.text;
    };
  }

  for (var i = 0; i < pElements.length; i++) {
    console.log("/facts/");
    axios
      .get("/facts/")
      .then(onData(i))
      .catch(function (error) {
        console.log(error);
      });
  }

  $("#myModa").on("shown.bs.modal", function () {
    console.log("listener");
    //$("#myInput").trigger("focus");
  });
}

getFacts();
console.log(getFacts());

function cardFacts() {
  for (var i = 0; i < 4; i++) {
    try {
      const divConstru = document.querySelector(".construtor");
      // console.log(divConstru);
      const divCard = document.createElement("div");
      const spanDot1 = document.createElement("span");
      const spanDot2 = document.createElement("span");
      const spanDot3 = document.createElement("span");
      let pFact = document.createElement("p");

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
      console.log(pFact);
    } catch (error) {
      console.log(error);
    }
  }
}
function validateAnimalType(animalType) {
  return animalType ? true : false;
}

function validadeNumber(number) {
  if (number.value) {
    return true;
  } else {
    number.className = "red";
    return false;
  }
}

(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      var forms = document.getElementsByClassName("needs-validation");
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
