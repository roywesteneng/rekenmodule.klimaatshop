const modellen = {
  mhi: {
    "Singlesplit - Standaard Uitvoering – [SRC20ZS-W] - 2,0 kW": [45, 42],
    "Singlesplit - Standaard Uitvoering – [SRC25ZS-W] - 2,5 kW": [46, 42],
    "Singlesplit - Standaard Uitvoering – [SRC35ZS-W] - 3,5 kW": [50, 45],
    "Singlesplit - Standaard Uitvoering – [SRC50ZS-W] - 5,0 kW": [52, 45],
    "Singlesplit - Luxe Uitvoering – [SRC20ZSX-W] - 2,0 kW": [45, 42],
    "Singlesplit - Luxe Uitvoering – [SRC25ZSX-W] - 2,5 kW": [44, 35],
    "Singlesplit - Luxe Uitvoering – [SRC35ZSX-W] - 3,5 kW": [48, 38],
    "Singlesplit - Luxe Uitvoering – [SRC40ZSX-W] - 4,0 kW": [50],
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
    "Singlesplit - Sinclair Terrel – [SOH-18BIT2] - 5,3 kW": [57],
    "Singlesplit - Sinclair Terrel – [SOH-24BIT2] - 7,1 kW": [59],
    "Multisplit - Voor meerdere binnenunits – [MV-E18BI2] - 5,3 kW": [54],
    "Multisplit - Voor meerdere binnenunits – [MV-E21BI2] - 6,1 kW": [58],
    "Multisplit - Voor meerdere binnenunits – [MV-E24BI2] - 7,1 kW": [58],
    "Multisplit - Voor meerdere binnenunits – [MV-E28BI2] - 8,0 kW": [58],
    "Multisplit - Voor meerdere binnenunits – [MV-E36BI2] - 10,6 kW": [60],
    "Multisplit - Voor meerdere binnenunits – [MV-E42BI2] - 12,1 kW": [60]
  }
};

const binnenunits = {
  "SRC20ZS-W": {
    "Wandmodel": [
      "SRK20ZS-W (Wit)",
      "SRK20ZS-WB (Zwart/Wit)",
      "SRK20ZS-WT (Titanium)"
    ],
    "Wandmodel (met wifi)": [
      "SRK20ZS-WF (Wit)",
      "SRK20ZS-WFB (Zwart/Wit)",
      "SRK20ZS-WFT (Titanium)",
      "SRK20ZS-WFBB (Zwart)"
    ]
  },
  "SRC25ZS-W": {
    "Wandmodel": [
      "SRK25ZS-W (Wit)",
      "SRK25ZS-WB (Zwart/Wit)",
      "SRK25ZS-WT (Titanium)"
    ],
    "Wandmodel (met wifi)": [
      "SRK25ZS-WF (Wit)",
      "SRK25ZS-WFB (Zwart/Wit)",
      "SRK25ZS-WFT (Titanium)",
      "SRK25ZS-WFBB (Zwart)"
    ],
    "Vloermodel": [
      "SRF25ZS-W (Wit)",
    ],
    "Cassettemodel (60x60cm)": [
      "FDTC25VH (Wit)",
      "FDTC25VH (Zwart)"
    ],
     "Satelietmodel (kanaal)": [
      "SRR25ZS-W",
    ]
  },
    "SRC35ZS-W": {
      "Wandmodel": [
        "SRK35ZS-W (Wit)",
        "SRK35ZS-WB (Zwart/Wit)",
        "SRK35ZS-WT (Titanium)"
    ],
    "Wandmodel (met wifi)": [
      "SRK35ZS-WF (Wit)",
      "SRK35ZS-WFB (Zwart/Wit)",
      "SRK35ZS-WFT (Titanium)",
      "SRK35ZS-WFBB (Zwart)"
    ],
    "Vloermodel": [
      "SRF35ZS-W (Wit)",
    ],
    "Cassettemodel (60x60cm)": [
      "FDTC35VH (Wit)",
      "FDTC35VH (Zwart)"
    ],
     "Satelietmodel (kanaal)": [
      "SRR35ZS-W",
    ]
  },
    "SRC50ZS-W": {
      "Wandmodel": [
        "SRK50ZS-W (Wit)",
        "SRK50ZS-WB (Zwart/Wit)",
        "SRK50ZS-WT (Titanium)"
    ],
      "Wandmodel (met wifi)": [
        "SRK50ZS-WF (Wit)",
        "SRK50ZS-WFB (Zwart/Wit)",
        "SRK50ZS-WFT (Titanium)",
        "SRK50ZS-WFBB (Zwart)"
    ]
  },
  "SRC20ZSX-W": {
    "Wandmodel": [
      "SRK20ZSX-W (Wit)",
      "SRK20ZSX-WB (Zwart/Wit)",
      "SRK20ZSX-WT (Titanium)"
    ],
    "Wandmodel (met wifi)": [
      "SRK20ZSX-WF (Wit)",
      "SRK20ZSX-WFB (Zwart/Wit)",
      "SRK20ZSX-WFT (Titanium)"
    ],
  },
  "SRC25ZSX-W": {
    "Wandmodel": [
      "SRK25ZSX-W (Wit)",
      "SRK25ZSX-WB (Zwart/Wit)",
      "SRK25ZSX-WT (Titanium)"
    ],
    "Wandmodel (met wifi)": [
      "SRK25ZSX-WF (Wit)",
      "SRK25ZSX-WFB (Zwart/Wit)",
      "SRK25ZSX-WFT (Titanium)"
    ],
  },  
  "SRC35ZSX-W": {
    "Wandmodel": [
      "SRK35ZSX-W (Wit)"
    ],
    "Wandmodel (met wifi)": [
      "SRK35ZSX-WF (Wit)",
      "SRK35ZSX-WFB (Zwart/Wit)",
      "SRK35ZSX-WFT (Titanium)"
    ],
  },
  "SRC40ZSX-W": {
    "Cassettemodel (60x60cm)": [
      "FDTC40VH (Wit)",
      "FDTC40VH (Zwart)"
    ],
    "Cassettemodel (90x90cm)": [
      "FDT40VH (Wit)",
      "FDT40VH (Zwart)"
    ]
 },   
  "SRC50ZSX-W": {
    "Wandmodel (met wifi)": [
      "SRK50ZSX-W (Wit)",
      "SRK50ZSX-WB (Zwart/Wit)"
    ],
    
    "Wandmodel (met wifi)": [
      "SRK50ZSX-WF (Wit)",
      "SRK50ZSX-WFB (Zwart/Wit)",
      "SRK50ZSX-WFT (Titanium)"
    ],
    "Vloermodel": [
      "SRF50ZSX-W (Wit)"
    ],
    "Cassettemodel (60x60cm)": [
      "FDTC50VH (Wit)",
      "FDTC50VH (Zwart)"
    ],
    "Cassettemodel (90x90cm)": [
      "FDT50VH (Wit)",
      "FDT50VH (Zwart)"
    ],
    "Satelietmodel (kanaal)": [
      "SRR50ZSX-W",
    ]
  },
  "SRC60ZSX-W": {
    "Wandmodel": [
      "SRK60ZSX-W (Wit)"
    ],
    "Wandmodel (met wifi)": [
      "SRK60ZSX-WF (Wit)",
      "SRK60ZSX-WFB (Zwart/Wit)",
      "SRK60ZSX-WFT (Titanium)"
    ],
    "Cassettemodel (60x60cm)": [
      "FDTC60VH (wit)",
      "FDTC60VH (Zwart)"
    ],
    "Cassettemodel (90x90cm)": [
      "FDT60VH (Wit)",
      "FDT60VH (Zwart)"
    ],
    "Satelietmodel (kanaal)": [
      "SRR60ZSX-W",
    ]
  },
  "SRC63ZR-W": {
    "Wandmodel": [
      "SRK63ZR-W (Wit)"
    ],
    
    "Wandmodel (met wifi)": [
      "SRK63ZR-WF (Wit)"
    ]
  },
  "SRC71ZR-W": {
    "Wandmodel": [
      "SRK71ZR-W (Wit)"
    ],
    "Wandmodel (met wifi)": [
      "SRK71ZR-WF (Wit)"
    ]
  },
  
  "SRC80ZR-W": {
     "Wandmodel": [
      "SRK80ZR-W (Wit)"
    ],
    "Wandmodel (met wifi)": [
      "SRK80ZR-WF (Wit)"
    ]
  },

  // Daikin
 "RXP20N9": {
     "Wandmodel": [
      "FTXP20M9 (Wit)"
    ],
 }, 
  "RXP25N9": {
     "Wandmodel": [
      "FTXP25N9 (Wit)"
    ],
 }, 
  "RXP35N9": {
     "Wandmodel": [
      "FTXP35N9 (Wit)"
    ],
 },
  "RXP50N8": {
     "Wandmodel": [
      "FTXP50N9 (Wit)"
    ],
 }, 
  "RXP60N9": {
     "Wandmodel": [
      "FTXP60N (Wit)"
    ],
 }, 
  "RXP71N9": {
     "Wandmodel": [
      "FTXP71 (Wit)"
    ],
 }, 
  "RXM20A": {
     "Wandmodel": [
      "FTXM20A (Wit)"
    ],
   },
    "RXM25A9": {
     "Wandmodel": [
      "FTXM25A (Wit)"
    ],
 },
  "RXM35A9": {
     "Wandmodel": [
      "FTXM35A (Wit)"
    ],
 },  
  "RXM42A": {
     "Wandmodel": [
      "FTXM42A (Wit)"
    ],
 },
  "RXM50A8": {
     "Wandmodel": [
      "FTXM50A8 (Wit)"
    ],
 },
  "RXM60A": {
     "Wandmodel": [
      "FTXM60A (Wit)"
    ],
 },
  "RXM71A": {
     "Wandmodel": [
      "FTXM71A (Wit)"
    ],
 },
  "RXA20A8": {
     "Wandmodel": [
      "FTXA20CW (Wit)",
      "FTXA20CS (Zilver)",
      "FTXA20CB (Zwart)",
      "FTXA20BT (Zwart Hout)"
    ],
 },
  "RXA25A8": {
     "Wandmodel": [
      "FTXA25CW (Wit)",
      "FTXA25CS (Zilver)",
      "FTXA25CB (Zwart)",
      "FTXA25BT (Zwart Hout)"
    ],
 },
  "RXA35A8": {
     "Wandmodel": [
      "FTXA35CW (Wit)",
      "FTXA35CS (Zilver)",
      "FTXA35CB (Zwart)",
      "FTXA35BT (Zwart Hout)"
    ],
 },
  "RXA42B8": {
     "Wandmodel": [
      "FTXA20CW (Wit)",
      "FTXA20CS (Zilver)",
      "FTXA20CB (Zwart)",
      "FTXA20BT (Zwart Hout)"
    ],
 },
  "RXA50B8": {
     "Wandmodel": [
      "FTXA50CW (Wit)",
      "FTXA50CS (Zilver)",
      "FTXA50CB (Zwart)",
      "FTXA50BT (Zwart Hout)"
    ],
 },
  "RXJ20A": {
     "Wandmodel": [
      "FTXJ20AW9 (Wit)",
      "FTXJ20AS9 (Zilver)",
      "FTXJ20AB9 (Zwart)"
    ],
 },
  "RXJ25A": {
     "Wandmodel": [
      "FTXJ25AW9 (Wit)",
      "FTXJ25AS9 (Zilver)",
      "FTXJ25AB9 (Zwart)"
    ],
 },
  "RXJ35A": {
     "Wandmodel": [
      "FTXJ35AW9 (Wit)",
      "FTXJ35AS (Zilver)",
      "FTXJ35AB9 (Zwart)"
    ],
 },
  "RXJ42A9": {
     "Wandmodel": [
      "FTXJ42AW9 (Wit)",
      "FTXJ42AS9 (Zilver)",
      "FTXJ42AB9 (Zwart)"
    ],
 },
  "RXJ50A9": {
     "Wandmodel": [
      "FTXJ50AW9 (Wit)",
      "FTXJ50AS9 (Zilver)",
      "FTXJ50AB9 (Zwart)"
    ],
 },
  "SOH-09BIK2": {
     "Wandmodel": [
      "SIH-09-BIK (Wit)",
    ],
 },
  "SOH-12BIK2": {
     "Wandmodel": [
      "SIH-12-BIK (Wit)",
    ],
 },
  "SOH-18BIK2": {
     "Wandmodel": [
      "SIH-18-BIK (Wit)",
    ],
 },
    "SOH-24BIK2": {
     "Wandmodel": [
      "SIH-24-BIK (Wit)",
    ],
 },
  "SOH-09BIM": {
     "Wandmodel": [
      "SIH-09-BIMW (Wit)",
      "SIH-09-BIMS (Zilver)",
      "SIH-09-BIMN (Donkerblauw)",
      "SIH-09-BIMC (Champagne)"
    ],
 },
  "SOH-12BIM": {
     "Wandmodel": [
      "SIH-12-BIMW (Wit)",
      "SIH-12-BIMS (Zilver)",
      "SIH-12-BIMN (Donkerblauw)",
      "SIH-12-BIMC (Champagne)"
    ],
 },
  "SOH-18BIM": {
     "Wandmodel": [
      "SIH-18-BIMW (Wit)",
      "SIH-18-BIMS (Zilver)",
      "SIH-18-BIMN (Donkerblauw)",
      "SIH-18-BIMC (Champagne)"
    ],
 },
  "SOH-24BIM": {
     "Wandmodel": [
      "SIH-24-BIMW (Wit)",
      "SIH-24-BIMS (Zilver)",
      "SIH-24-BIMN (Donkerblauw)",
      "SIH-24-BIMC (Champagne)"
    ],
 },
  "SOH-09BIT": {
     "Wandmodel": [
      "SIH-09-BITW (Wit)",
      "SIH-09-BITS (Zilver)",
      "SIH-09-BITB (Antraciet)",
      "SIH-09-BITC (Champagne)"
    ],
 },
  "SOH-13BIT": {
     "Wandmodel": [
      "SIH-13-BITW (Wit)",
      "SIH-13-BITS (Zilver)",
      "SIH-13-BITB (Antraciet)",
      "SIH-13-BITC (Champagne)"
    ],
 },
  
  "SOH-18BIT2": {
     "Wandmodel": [
      "SIH-18-BITW (Wit)",
      "SIH-18-BITS (Zilver)",
      "SIH-18-BITB (Antraciet)",
      "SIH-18-BITC (Champagne)"
    ],
 },
  
  "SOH-24BIT2": {
     "Wandmodel": [
      "SIH-24-BIT2W (Wit)",
      "SIH-24-BIT2S (Zilver)",
      "SIH-24-BIT2B (Antraciet)",
      "SIH-24-BIT2C (Champagne)"
    ],
 },
  
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
    modelSelect.selectedIndex = 0;
    toonNachtOptie();
  } else {
    container.style.display = "none";
    customContainer.style.display = "none";
  }
}

function toonNachtOptie() {
  const merk = document.getElementById('merk').value;
  const model = document.getElementById('model').value;
  const nachtBox = document.getElementById('nachtContainer');
  const binnenInfo = document.getElementById('bijpassendeBinnenunit');

  if (merk && modellen[merk][model] && modellen[merk][model].length > 1) {
    nachtBox.style.display = "block";
  } else {
    nachtBox.style.display = "none";
  }

  // Binnenunit info tonen
  const match = model.match(/\[(.*?)\]/);
  const code = match ? match[1] : null;

  const buitenCode = model.match(/\[([^\]]+)\]/)?.[1];
if (buitenCode && binnenunits[buitenCode]) {
  binnenInfo.innerHTML = getBinnenunitHTML(buitenCode);
  binnenInfo.style.display = "block";
} else {
  binnenInfo.style.display = "none";
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
      document.querySelectorAll(".faq-answer").forEach(div => div.style.display = "none");
      document.querySelectorAll(".faq-question").forEach(btn => btn.classList.remove("active"));
      if (!isOpen) {
        antwoord.style.display = "block";
        this.classList.add("active");
      }
    });
  });
});

function getBinnenunitHTML(buitenCode) {
  const binnenData = binnenunits[buitenCode];
  if (!binnenData) return '';

  let html = `
    <div style="background-color: #f6f9fc; border: 1px solid #ccc; padding: 10px; border-radius: 6px; margin-top: 1em;">
      <strong>Geschikte binnenunits voor dit model:</strong>
      <div style="display: flex; flex-wrap: wrap; gap: 2em; margin-top: 1em;">
  `;

  for (const type in binnenData) {
    html += `
      <div style="min-width: 200px;">
        <strong>${type}:</strong>
        <ul style="margin: 0.5em 0 0 1em; padding: 0;">
    `;
    binnenData[type].forEach(model => {
      html += `<li style="list-style: disc;">${model}</li>`;
    });
    html += `</ul></div>`;
  }

  html += '</div></div>';
  return html;
}
