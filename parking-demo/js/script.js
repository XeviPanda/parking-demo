const translations = {
  ca: {
    info: "L'informem que l'Hotel no disposa d'aparcament propi. No obstant això, comptem amb un acord amb el Pàrquing Plaça - Constitució, que se situa a dos minuts a peu aproximadament. El pàrquing és subterrani i amb vigilància les 24 hores. No és necessari reservar amb antelació.",
    locationTitle: "Ubicació:",
    address: "Carrer de Cristòfol Grober, 12Acc, 17001 Girona",
    coords: "41.984470, 2.820612",
    mapLink: "https://goo.gl/maps/mKXgDYwqoabjS6HZ7",
    ratesTitle: "Tarifes especials per a clients de l'Hotel:",
    rates: [
      "De 21.00 h - 09.00 h: 8 €.",
      "Tot el dia (24 hores): 18 €."
    ],
    important: "IMPORTANT: Preguem retiri el seu dispositiu de telepeatge (Via-T o similar) abans d'accedir a l'aparcament. No s'efectuen devolucions en cas de telepagament."
  },
  es: {
    info: "Le informamos que el Hotel no dispone de aparcamiento propio. Sin embargo, contamos con un acuerdo con el Parking Plaza - Constitución, que se encuentra a aproximadamente dos minutos a pie. El parking es subterráneo y con vigilancia las 24 horas. No es necesario reservar con antelación.",
    locationTitle: "Ubicación:",
    address: "Carrer de Cristòfol Grober, 12Acc, 17001 Girona",
    coords: "41.984470, 2.820612",
    mapLink: "https://goo.gl/maps/mKXgDYwqoabjS6HZ7",
    ratesTitle: "Tarifas especiales para clientes del Hotel:",
    rates: [
      "De 21:00 h a 09:00 h: 8 €.",
      "Todo el día (24 horas): 18 €."
    ],
    important: "IMPORTANTE: Por favor, retire su dispositivo de telepeaje (Via-T o similar) antes de acceder al parking. No se efectúan devoluciones en caso de telepago."
  },
  en: {
    info: "We inform you that the Hotel does not have its own parking. However, we have an agreement with the Plaza - Constitución Parking, which is located approximately a two-minute walk away. The parking is underground and under 24-hour surveillance. No advance reservation is required.",
    locationTitle: "Location:",
    address: "Carrer de Cristòfol Grober, 12Acc, 17001 Girona",
    coords: "41.984470, 2.820612",
    mapLink: "https://goo.gl/maps/mKXgDYwqoabjS6HZ7",
    ratesTitle: "Special rates for Hotel guests:",
    rates: [
      "From 21:00 to 09:00: €8.",
      "All day (24 hours): €18."
    ],
    important: "IMPORTANT: Please remove your telepeage device (Via-T or similar) before entering the parking. Refunds are not provided in case of telepayment."
  },
  fr: {
    info: "Nous vous informons que l'Hôtel ne dispose pas de parking privé. Cependant, nous avons un accord avec le Parking Plaza - Constitución, situé à environ deux minutes à pied. Le parking est souterrain et surveillé 24h/24. Aucune réservation préalable n'est nécessaire.",
    locationTitle: "Emplacement :",
    address: "Carrer de Cristòfol Grober, 12Acc, 17001 Girona",
    coords: "41.984470, 2.820612",
    mapLink: "https://goo.gl/maps/mKXgDYwqoabjS6HZ7",
    ratesTitle: "Tarifs spéciaux pour les clients de l'Hôtel :",
    rates: [
      "De 21h00 à 09h00 : 8 €.",
      "Toute la journée (24 heures) : 18 €."
    ],
    important: "IMPORTANT : Veuillez retirer votre appareil de télépéage (Via-T ou similaire) avant d'accéder au parking. Aucun remboursement n'est effectué en cas de télépaiement."
  }
};

function renderContent(lang) {
  const t = translations[lang];
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = `
    <p>${t.info}</p>
    <h2>${t.locationTitle}</h2>
    <p>${t.address}</p>
    <p>${t.coords}</p>
    <a href="${t.mapLink}" target="_blank">${t.mapLink}</a>
    <h2>${t.ratesTitle}</h2>
    <ul>
      ${t.rates.map(rate => `<li>${rate}</li>`).join('')}
    </ul>
    <p><strong>${t.important}</strong></p>
  `;
}

document.getElementById('language-selector').addEventListener('change', (e) => {
  const lang = e.target.value;
  document.documentElement.lang = lang;
  renderContent(lang);
});

// Inicia en català por defecto
renderContent('ca');
