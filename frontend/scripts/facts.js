
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
  let user = window.localStorage.getItem("user");

  if (isValidValues(animal, fact)) {
    axios.post("https://animalfacts-1.herokuapp.com/facts/newFact", {
      animal: animal.value,
      fact: fact.value,
      user: user,
    }).
      then((response) => {

      })
      .catch((err) => {

      })

  }
}

function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  redirect("index.html");
}


function getFacts() {
  document.querySelector(".construtor").innerHTML = '';
  const busca = document.getElementById("search").value
  axios.get("https://animalfacts-1.herokuapp.com/facts/?busca=" + busca)
    .then((res) => {

      for (var i = 0; i < res.data.length; i++) {
        cardFacts(res.data[i].fact);
      }
    })
    .catch(function (error) {
      console.log('erro')
      console.log(error);
    });

  $("#myModa").on("shown.bs.modal", function () {
    //$("#myInput").trigger("focus");
  });
}


function cardFacts(value) {
  try {
    const divConstru = document.querySelector(".construtor");
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
    pFact.innerHTML = value;

    divConstru.appendChild(divCard);
    divCard.appendChild(spanDot1);
    divCard.appendChild(spanDot2);
    divCard.appendChild(spanDot3);
    divCard.appendChild(pFact);
  } catch (error) {
    console.log(error);
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
