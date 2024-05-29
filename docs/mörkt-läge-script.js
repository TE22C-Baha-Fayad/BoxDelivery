// Hämta referensen till knappen för att växla mellan mörkt läge och ljusläge
let mörktLägeKnappen = document.querySelector("#mörkt-läge-knappen");
// Lägg till en händelselyssnare för klick på knappen
mörktLägeKnappen.addEventListener("click", OnMörktLägeClicked);

// Definiera nyckeln för lagring av mörkt läge i localStorage
let mörktLägeNyckel = "mörktLägeStatus";
// Hämta värdet för mörkt läge från localStorage
let ärMörktläge = localStorage.getItem(mörktLägeNyckel);

// Uppdatera ikonen för mörkt läge baserat på det lagrade värdet
UppdateraMörktLägesIkon();

// Funktion för att uppdatera ikonen för mörkt läge
function UppdateraMörktLägesIkon() {
  // Hämta värdet för mörkt läge från localStorage
  ärMörktläge = localStorage.getItem(mörktLägeNyckel);
  // Uppdatera ikonen beroende på om mörkt läge är aktiverat eller inte
  if (ärMörktläge === "true") {
    mörktLägeKnappen.innerHTML =
      "<span class='material-symbols-outlined'>light_mode</span>";
  } else {
    mörktLägeKnappen.innerHTML =
      "<span class='material-symbols-outlined'>dark_mode</span>";
  }
}

// Funktion som körs när användaren klickar på knappen för att växla mörkt läge
function OnMörktLägeClicked() {
  // Hämta värdet för mörkt läge från localStorage
  ärMörktläge = localStorage.getItem(mörktLägeNyckel);
  // Växla mörkt läge
  VäxlaMörktLäge();
  // Uppdatera ikonen för mörkt läge
  UppdateraMörktLägesIkon();
}

// Array som innehåller CSS-selektorer för element som ska ändra färg vid växling av mörkt läge
let elementAttÄndra = [
  ".copyright-info",
  ".copyright-referens p",
  ".kontainer main h1",
  ".kontainer nav .mörkt-läge-kontainer a",
  ".kontainer header a",
  ".kontainer footer",
  ".kontainer nav",
  ".kontainer .kontakta-oss-kontainer",
];

// Funktion för att växla mörkt läge
function VäxlaMörktLäge() {
  // Lägg till/ta bort klassen för mörkt läge på body-elementet
  document.body.classList.toggle("mörkt-läge-på");
  // Loopa igenom arrayen av element som ska ändra färg och växla deras läge
  elementAttÄndra.forEach(VäxleElementLäge);

  // Hämta värdet för mörkt läge från localStorage
  ärMörktläge = localStorage.getItem(mörktLägeNyckel);
  // Uppdatera värdet för mörkt läge i localStorage till motsatsen av det nuvarande värdet
  localStorage.setItem(mörktLägeNyckel, ärMörktläge !== "true");
}

// Funktion för att växla mörkt läge för specifika element
function VäxleElementLäge(cssSelector) {
  // Hämta alla element som matchar CSS-selektorn
  let allaElement = document.querySelectorAll(cssSelector);
  // Loopa igenom och växla läge för varje element
  allaElement.forEach((element) => {
    if (element) {
      element.classList.toggle("mörkt-läge-på");
    }
  });
}

// Funktion för att lägga till klasser för mörkt läge vid sidans laddning
function LäggTillMörktLägeKlasser() {
  // Kontrollera om mörkt läge är aktiverat baserat på lagrat värde
  ärMörktläge = localStorage.getItem(mörktLägeNyckel) === "true";

  // Om mörkt läge är aktiverat, lägg till klasser för mörkt läge på specifika element
  if (ärMörktläge) {
    document.body.classList.add("mörkt-läge-på");
    elementAttÄndra.forEach(LäggTillMörktLägeKlass);
    // Uppdatera ikonen för mörkt läge
    UppdateraMörktLägesIkon();
  }

  // Funktion för att lägga till klasser för mörkt läge på specifika element
  function LäggTillMörktLägeKlass(cssSelector) {
    // Hämta alla element som matchar CSS-selektorn
    let allaElement = document.querySelectorAll(cssSelector);
    // Loopa igenom och lägg till klass för mörkt läge för varje element
    allaElement.forEach(element => {
      if (element) {
        element.classList.add("mörkt-läge-på");
      }
    });
  }
}

// Köra funktionen för att lägga till klasser för mörkt läge vid sidans laddning
LäggTillMörktLägeKlasser();
