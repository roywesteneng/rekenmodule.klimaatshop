const modellen = {
  mhi: {
  "Singlesplit - Standaard Uitvoering – [SRC20ZS-W] - 2,0 kW": [45, 42],
  "Singlesplit - Standaard Uitvoering – [SRC25ZS-W] - 2,5 kW": [46, 42],
  "Singlesplit - Standaard Uitvoering – [SRC35ZS-W] - 3,5 kW": [50, 45],
  "Singlesplit - Standaard Uitvoering – [SRC50ZS-W] - 5,0 kW": [52, 45],
  "Singlesplit - Luxe Uitvoering – [SRC20ZSX-W] - 2,0 kW": [45, 42],
  "Singlesplit - Luxe Uitvoering – [SRC25ZSX-W] - 2,5 kW": [44, 35],
  "Singlesplit - Luxe Uitvoering – [SRC35ZSX-W] - 3,5 kW": [48, 38],
  "Singlesplit - Luxe Uitvoering – [SRC50ZSX-W] - 5,0 kW": [51, 42],
  "Singlesplit - Luxe Uitvoering – [SRC60ZSX-W] - 6,0 kW": [52, 42],
  "Singlesplit - Heavy Duty Uitvoering – [SRC63ZR-W] - 6,3 kW": [54, 45],
  "Singlesplit - Heavy Duty Uitvoering – [SRC71ZR-W] - 7,1 kW": [44, 35],
  "Singlesplit - Heavy Duty Uitvoering – [SRC80ZR-W] - 8,0 kW": [56, 47],
  "Multisplit - Voor meerdere binnenunits – [SCM40ZS-W] - 4,0 kW": [49, 44],
  "Multisplit - Voor meerdere binnenunits – [SCM45ZS-W] - 4,5 kW": [50, 44],
  "Multisplit - Voor meerdere binnenunits – [SCM50ZS-W] - 5,0 kW": [49, 43],
  "Multisplit - Voor meerdere binnenunits – [SCM60ZS-W] - 6,0 kW": [50, 43],
  "Multisplit - Voor meerdere binnenunits – [SCM71ZS-W] - 7,1 kW": [50, 45],
  "Multisplit - Voor meerdere binnenunits – [SCM80ZS-W] - 8,0 kW": [54, 46],
  "Multisplit - Voor meerdere binnenunits – [SCM100ZS-W] - 10,0 kW": [54, 49]
  },
  daikin: {
  "Singlesplit - Daikin Comfora – [RXP20N9] - 2,0 kW": [47],
  "Singlesplit - Daikin Comfora – [RXP35N9] - 3,5 kW": [48],
  "Singlesplit - Daikin Comfora – [RXP50N8] - 5,0 kW": [49],
  "Singlesplit - Daikin Comfora – [2MXM50] - 5,0 kW": [50],
  "Singlesplit - Daikin Perfera – [RXM20A] - 2,0 kW": [47],
  "Singlesplit - Daikin Perfera – [RXM25A9] - 2,5 kW": [47],
  "Singlesplit - Daikin Perfera – [RXM35A9] - 3,5 kW": [49],
  "Singlesplit - Daikin Perfera – [RXM42A] - 4,2 kW": [49],
  "Singlesplit - Daikin Perfera – [RXM50A8] - 5,0 kW": [49],
  "Singlesplit - Daikin Perfera – [RXM60A] - 6,0 kW": [49],
  "Singlesplit - Daikin Perfera – [RXM71A] - 7,1 kW": [48],
  "Singlesplit - Daikin Stylish – [RXA20A8] - 2,0 kW": [47],
  "Singlesplit - Daikin Stylish – [RXA25A8] - 2,5 kW": [47],
  "Singlesplit - Daikin Stylish – [RXA35A8] - 3,5 kW": [49],
  "Singlesplit - Daikin Stylish – [RXA42B8] - 4,2 kW": [48],
  "Singlesplit - Daikin Stylish – [RXA50B8] - 5,0 kW": [48],
  "Singlesplit - Daikin Emura – [RXJ20A] - 2,0 kW": [47],
  "Singlesplit - Daikin Emura – [RXJ25A] - 2,5 kW": [47],
  "Singlesplit - Daikin Emura – [RXJ35A] - 3,5 kW": [49],
  "Singlesplit - Daikin Emura – [RXJ42A9] - 4,2 kW": [48],
  "Singlesplit - Daikin Emura – [RXJ50A9] - 5,0 kW": [49],
  "Multisplit - Voor meerdere binnenunits – [2MXM40] - 4,0 kW": [48],
  "Multisplit - Voor meerdere binnenunits – [2MXM50] - 5,0 kW": [50],
  "Multisplit - Voor meerdere binnenunits – [2MXM68] - 6,8 kW": [48],
  "Multisplit - Voor meerdere binnenunits – [3MXM40] - 4,0 kW": [47],
  "Multisplit - Voor meerdere binnenunits – [3MXM52] - 5,2 kW": [47],
  "Multisplit - Voor meerdere binnenunits – [3MXM68] - 6,8 kW": [48],
  "Multisplit - Voor meerdere binnenunits – [4MXM68] - 6,8 kW": [49],
  "Multisplit - Voor meerdere binnenunits – [4MXM80] - 8,0 kW": [49],
  "Multisplit - Voor meerdere binnenunits – [5MXM90] - 9,0 kW": [52]
  },
  sinclair: {
 "Singlesplit - Sinclair Keyon – [SOH-09BIK2] - 2,7 kW": [51],
  "Singlesplit - Sinclair Keyon – [SOH-12BIK2] - 3,2 kW": [52],
  "Singlesplit - Sinclair Keyon – [SOH-18BIK2] - 4,6 kW": [53],
  "Singlesplit - Sinclair Keyon – [SOH-24BIK2] - 6,2 kW": [58],
  "Singlesplit - Sinclair Marvin – [SOH-09BIM] - 2,7 kW": [50],
  "Singlesplit - Sinclair Marvin – [SOH-12BIM] - 3,5 kW": [52],
  "Singlesplit - Sinclair Marvin – [SOH-18BIM] - 5,3 kW": [56],
  "Singlesplit - Sinclair Marvin – [SOH-24BIM] - 7,1 kW": [59],
  "Singlesplit - Sinclair Terrel – [SOH-09BIT] - 2,7 kW": [50],
  "Singlesplit - Sinclair Terrel – [SOH-13BIT] - 3,5 kW": [52],
  "Singlesplit - Sinclair Terrel – [SOH-24BIT2] - 7,1 kW": [59],
  "Multisplit - Voor meerdere binnenunits – [MV-E18BI2] - 5,3 kW": [54],
  "Multisplit - Voor meerdere binnenunits – [MV-E21BI2] - 6,1 kW": [58],
  "Multisplit - Voor meerdere binnenunits – [MV-E24BI2] - 7,1 kW": [58],
  "Multisplit - Voor meerdere binnenunits – [MV-E28BI2] - 8,0 kW": [58],
  "Multisplit - Voor meerdere binnenunits – [MV-E36BI2] - 10,6 kW": [60],
  "Multisplit - Voor meerdere binnenunits – [MV-E42BI2] - 12,1 kW": [60]
  }
};

function toonModellen() {
  const merk = document.getElementById('merk').value;
  const modelSelect = document.getElementById('model');
  const container = document.getElementById('modelContainer');
  const customContainer = document.getElementById('customDbContainer');
  const nachtBox = document.getElementById('nachtContainer');
  modelSelect.innerHTML = "";
  nachtBox.style.display = "none";

  if (merk === "overig") {
    container.style.display = "none";
    customContainer.style.display = "block";
  } else if (modellen[merk]) {
    container.style.display = "block";
    customContainer.style.display = "none";
    for (let model in modellen[merk]) {
      let opt = document.createElement("option");
      opt.value = model;
      opt.text = model;
      modelSelect.appendChild(opt);
    }
    modelSelect.selectedIndex = 0;       // ✅ selecteer automatisch het eerste model
    toonNachtOptie();                    // ✅ activeer meteen silent modus indien nodig
  } else {
    container.style.display = "none";
    customContainer.style.display = "none";
  }
}

function toonNachtOptie() {
  const merk = document.getElementById('merk').value;
  const model = document.getElementById('model').value;
  const nachtBox = document.getElementById('nachtContainer');
  if (merk && modellen[merk][model] && modellen[merk][model].length > 1) {
    nachtBox.style.display = "block";
  } else {
    nachtBox.style.display = "none";
  }
}

function berekenAfstand() {
  const merk = document.getElementById('merk').value;
  const correctie = parseFloat(document.getElementById('plaatsing').value);
  const norm = parseFloat(document.getElementById('gebruik').value);
  let db;

  if (merk === 'overig') {
    db = parseFloat(document.getElementById('customDb').value);
  } else {
    const model = document.getElementById('model').value;
    const nacht = document.getElementById('nachtmodus').checked;
    const waarden = modellen[merk][model];
    db = nacht && waarden.length > 1 ? waarden[1] : waarden[0];
  }

  if (isNaN(db) || isNaN(correctie) || isNaN(norm)) {
    document.getElementById('resultaat').innerHTML = '❗ Vul alle velden correct in.';
    return;
  }

  const afstand = Math.pow(10, ((db + correctie - norm) / 20));
  document.getElementById('resultaat').innerHTML =
  '👉 Met dit airco-model is minstens <strong>' + afstand.toFixed(1) +
  ' meter</strong> afstand tot grens met de buren nodig om te voldoen aan de wettelijke geluidsnorm van <strong>' + norm + ' dB(A)</strong> en geluidsoverlast te voorkomen.';
}

document.addEventListener("DOMContentLoaded", function () {
  const vragen = document.querySelectorAll(".faq-question");
  vragen.forEach(vraag => {
    vraag.addEventListener("click", function () {
      const antwoord = this.nextElementSibling;
      const isOpen = antwoord.style.display === "block";

      // Sluit alle antwoorden en verwijder actieve pijltjes
      document.querySelectorAll(".faq-answer").forEach(div => div.style.display = "none");
      document.querySelectorAll(".faq-question").forEach(btn => btn.classList.remove("active"));

      // Open deze (indien hij nog niet open is)
      if (!isOpen) {
        antwoord.style.display = "block";
        this.classList.add("active");
      }
    });
  });
});
