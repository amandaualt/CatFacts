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
  } else {
    // alert("Campos marcados com * são obrigatórios");
  }
}
