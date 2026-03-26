// Finder formular og beskedfelt
const form = document.getElementById("volunteerForm");
const formMessage = document.getElementById("formMessage");

// Array til at gemme tilmeldinger
let signUps = [];

// Lyt efter submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Variabler og typer
  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let age = Number(document.getElementById("age").value);
  let city = document.getElementById("city").value;
  let role = document.getElementById("role").value;

  // Array med felter til validering
  let fields = [firstName, lastName, city, role];

  // Tæller tomme felter med loop
  let emptyFields = 0;

  for (let i = 0; i < fields.length; i++) {
    if (fields[i] === "") {
      emptyFields++;
    }
  }

  // If-else kontrolstruktur
  if (emptyFields > 0) {
    formMessage.textContent = "Du skal udfylde alle felter.";
    formMessage.style.color = "red";
  } else if (age < 16) {
    formMessage.textContent = "Du skal være mindst 16 år for at blive frivillig.";
    formMessage.style.color = "red";
  } else {
    // Opretter objekt med data
    let signUp = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      city: city,
      role: role
    };

    // Gemmer i array
    signUps.push(signUp);

    // Operatorer bruges fx her til at samle tekst
    formMessage.textContent =
      "Tak for din tilmelding, " + firstName + " " + lastName + "! Du har valgt " + role + " i " + city + ".";
    formMessage.style.color = "green";

    // Console output så man kan se alle tilmeldinger
    console.log("Alle tilmeldinger:");
    for (let i = 0; i < signUps.length; i++) {
      console.log(
        "Tilmelding " +
          (i + 1) +
          ": " +
          signUps[i].firstName +
          " " +
          signUps[i].lastName +
          ", " +
          signUps[i].age +
          " år, " +
          signUps[i].city +
          ", " +
          signUps[i].role
      );
    }

    // Nulstil formular
    form.reset();
  }
});
