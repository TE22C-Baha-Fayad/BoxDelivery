// Hämta referensen till knappen för att skicka formuläret
let submitBtn = document.querySelector("#submit");
// Lägg till en händelselyssnare för klick på knappen
submitBtn.addEventListener("click", OnSubmitClicked);

// Hämta referensen till elementet som visar sändningsmeddelandet
let sändningsmeddelande = document.getElementById("sändningsmeddelande");

// Funktion som körs när användaren klickar på knappen för att skicka formuläret
function OnSubmitClicked() {
  // Visa sändningsmeddelandet
  sändningsmeddelande.style.display = "block";

  // Hämta referensen till alla input-element i formuläret
  let inputVärden = document.querySelectorAll("form input");

  // Loopa igenom varje input-element för att kontrollera om det är ifyllt och validera e-postadressen
  for (let i = 0; i < inputVärden.length; i++) {
    // Kontrollera om det aktuella input-elementet är obligatoriskt och inte ifyllt
    if (
      inputVärden[i].hasAttribute("required") &&
      inputVärden[i].value === ""
    ) {
      // Visa meddelande om att alla obligatoriska fält måste fyllas i
      sändningsmeddelande.style.color = "red";
      sändningsmeddelande.textContent =
        "Fyll i alla rutor som krävs, alla rutor som är markerade med (*).";
      console.log(inputVärden[i].attributes);
      return;
    }
  }

  // Kontrollera om e-postadressen är korrekt ifylld
  if (!inputVärden[2].value.includes("@")) {
    // Visa meddelande om att e-postadressen är felaktig
    sändningsmeddelande.style.color = "red";
    sändningsmeddelande.textContent =
      "Skriv Korrekt mailadress. Symbolen (@) saknas i rutan.";
    return;
  } else {
    // Visa meddelande om att formuläret har skickats framgångsrikt
    sändningsmeddelande.style.color = "green";
    sändningsmeddelande.textContent = "Formuläret har nu skickats!";
    return;
  }
}
