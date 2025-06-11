const modellen = {
  mhi: {
    "MHI SRC20ZS-W – [2,0 kW] (voor binnenunit: SRK20ZS-W)": [45, 42],
    "MHI SRC25ZS-W – [2,5 kW] (voor binnenunit: SRK25ZS-W)": [46, 42],
    "MHI SRC35ZS-W – [3,5 kW] (voor binnenunit: SRK35ZS-W)": [50, 45],
    "MHI SRC50ZS-W – [5,0 kW] (voor binnenunit: SRK50ZS-W)": [52, 45],
    "MHI SRC20ZSX-W – [2,0 kW] (voor binnenunit: SRK20ZSX-W)": [45, 42],
    "MHI SRC25ZSX-W – [2,5 kW] (voor binnenunit: SRK25ZSX-W)": [44, 35],
    "MHI SRC35ZSX-W – [3,5 kW] (voor binnenunit: SRK35ZSX-W)": [48, 38],
    "MHI SRC50ZSX-W – [5,0 kW] (voor binnenunit: SRK50ZSX-W)": [51, 42],
    "MHI SRC60ZSX-W – [6,0 kW] (voor binnenunit: SRK60ZSX-W)": [52, 42],
    "MHI SRC63ZR-W – [6,3 kW] (voor binnenunit: SRK63ZR-W)": [54, 45],
    "MHI SRC71ZR-W – [7,1 kW] (voor binnenunit: SRK71ZR-W)": [44, 35],
    "MHI SRC80ZR-W – [8,0 kW] (voor binnenunit: SRK80ZR-W)": [56, 47],
    "MHI SCM40ZS-W – [4,0 kW] (multisplit buitenunit)": [49, 44],
    "MHI SCM45ZS-W – [4,5 kW] (multisplit buitenunit)": [50, 44],
    "MHI SCM50ZS-W – [5,0 kW] (multisplit buitenunit)": [49, 43],
    "MHI SCM60ZS-W – [6,0 kW] (multisplit buitenunit)": [50, 43],
    "MHI SCM71ZS-W – [7,1 kW] (multisplit buitenunit)": [50, 45],
    "MHI SCM80ZS-W – [8,0 kW] (multisplit buitenunit)": [54, 46],
    "MHI SCM100ZS-W – [10,0 kW] (multisplit buitenunit)": [54, 49]
  },
  daikin: {
    "Daikin Comfora RXP20N9 – [2,0 kW]": [47],
    "Daikin Comfora RXP35N9 – [3,5 kW]": [48],
    "Daikin Comfora RXP50N8 – [5,0 kW]": [49],
    "Daikin Comfora 2MXM50 – [5,0 kW]": [50],
    "Daikin Perfera RXM20A – [2,0 kW]": [47],
    "Daikin Perfera RXM25A9 – [2,5 kW]": [47],
    "Daikin Perfera RXM35A9 – [3,5 kW]": [49],
    "Daikin Perfera RXM42A – [4,2 kW]": [49],
    "Daikin Perfera RXM50A8 – [5,0 kW]": [49],
    "Daikin Perfera RXM60A – [6,0 kW]": [49],
    "Daikin Perfera RXM71A – [7,1 kW]": [48],
    "Daikin Stylish RXA20A8 – [2,0 kW]": [47],
    "Daikin Stylish RXA25A8 – [2,5 kW]": [47],
    "Daikin Stylish RXA35A8 – [3,5 kW]": [49],
    "Daikin Stylish RXA42B8 – [4,2 kW]": [48],
    "Daikin Stylish RXA50B8 – [5,0 kW]": [48],
    "Daikin Emura RXJ20A – [2,0 kW]": [47],
    "Daikin Emura RXJ25A – [2,5 kW]": [47],
    "Daikin Emura RXJ35A – [3,5 kW]": [49],
    "Daikin Emura RXJ42A9 – [4,2 kW]": [48],
    "Daikin Emura RXJ50A9 – [5,0 kW]": [49],
    "Daikin Multisplit 2MXM40 – [4,0 kW]": [48],
    "Daikin Multisplit 2MXM50 – [5,0 kW]": [50],
    "Daikin Multisplit 2MXM68 – [6,8 kW]": [48],
    "Daikin Multisplit 3MXM40 – [4,0 kW]": [47],
     "Daikin Multisplit 3MXM52 – [5,2 kW]": [47],
     "Daikin Multisplit 3MXM68 – [6,8 kW]": [48],
     "Daikin Multisplit 4MXM68 – [6,8 kW]": [49],
     "Daikin Multisplit 4MXM80 – [8,0 kW]": [49],
     "Daikin Multisplit 5MXM90 – [9,0 kW]": [52]
  },
  sinclair: {
    "Sinclair Keyon SOH-09BIK2": [51],
    "Sinclair Keyon SOH-12BIK2": [52],
    "Sinclair Keyon SOH-18BIK2": [53],
    "Sinclair Keyon SOH-24BIK2": [58],
    "Sinclair Marvin SOH-09BIM": [50],
    "Sinclair Marvin SOH-12BIM": [52],
    "Sinclair Marvin SOH-18BIM": [56],
    "Sinclair Marvin SOH-24BIM": [59],
    "Sinclair Terrel SOH-09BIT": [50],
    "Sinclair Terrel SOH-13BIT": [52],
    "Sinclair Terrel SOH-24BIT2": [59],
    "Sinclair Multisplit MV-E18BI2": [54],
    "Sinclair Multisplit MV-E21BI2": [58],
    "Sinclair Multisplit MV-E24BI2": [58],
    "Sinclair Multisplit MV-E28BI2": [58],
    "Sinclair Multisplit MV-E36BI2": [60],
    "Sinclair Multisplit MV-E42BI2": [60]
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
  '👉 Je hebt minimaal <strong>' + afstand.toFixed(1) +
  ' meter</strong> afstand nodig om binnen de norm van <strong>' + norm + ' dB(A)</strong> te blijven.';
}
