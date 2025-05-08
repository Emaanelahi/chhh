
const branchSelect = document.getElementById("branchSelect");
const indiaJetSelect = document.getElementById("indiaJetSelect");
const pakJetSelect = document.getElementById("pakJetSelect");
const comparisonResult = document.getElementById("comparisonResult");

branchSelect.addEventListener("change", function () {
    const isAirforce = this.value === "airforce";
    indiaJetSelect.classList.toggle("d-none", !isAirforce);
    pakJetSelect.classList.toggle("d-none", !isAirforce);
    comparisonResult.innerHTML = "";

    if (this.value === "army") {
        showArmyComparison();
    } else if (this.value === "navy") {
        showNavyComparison();
    }
});

function showJetComparison(indianJet, pakJet) {
    const data = {
        rafale: {
            name: "Rafale",
            speed: "1.8 Mach",
            range: "3,700 km",
            origin: "France",
        },
        su30: {
            name: "Sukhoi Su-30MKI",
            speed: "2.0 Mach",
            range: "3,000 km",
            origin: "India/Russia",
        },
        jf17: {
            name: "JF-17 Thunder",
            speed: "1.6 Mach",
            range: "2,000 km",
            origin: "Pakistan/China",
            note: "Used by Pakistan Air Force to successfully shoot down an Indian Rafale using the PL-15E long-range air-to-air missile recently.",
        },
        f16: {
            name: "F-16",
            speed: "2.0 Mach",
            range: "4,220 km",
            origin: "USA",
        },
        mirage3: {
            name: "Mirage III",
            speed: "2.2 Mach",
            range: "2,400 km",
            origin: "France",
        },
        mirage5: {
            name: "Mirage V",
            speed: "2.2 Mach",
            range: "2,100 km",
            origin: "France",
        },
        f7: {
            name: "F-7PG",
            speed: "2.0 Mach",
            range: "1,500 km",
            origin: "China",
        },
        tejas: {
            name: "HAL Tejas",
            speed: "1.6 Mach",
            range: "3,000 km",
            origin: "India",
        },
        mig29: {
            name: "MiG-29",
            speed: "2.25 Mach",
            range: "2,100 km",
            origin: "Russia",
        },
        mirage2000: {
            name: "Mirage 2000",
            speed: "2.2 Mach",
            range: "1,550 km",
            origin: "France",
        },
    };

    const india = data[indianJet];
    const pak = data[pakJet];

    if (!india || !pak) {
        comparisonResult.innerHTML = `<p class="text-danger">Comparison data not available for one or both selected jets.</p>`;
        return;
    }

    comparisonResult.innerHTML = `
      <div class="row text-center">
        <div class="col-md-6 border-end">
          <h3>${pak.name}</h3>
          <p><strong>Speed:</strong> ${pak.speed}</p>
          <p><strong>Range:</strong> ${pak.range}</p>
          <p><strong>Origin:</strong> ${pak.origin}</p>
          ${pak.note ? `<p class="text-success fw-semibold">${pak.note}</p>` : ""}
        </div>
        <div class="col-md-6">
          <h3>${india.name}</h3>
          <p><strong>Speed:</strong> ${india.speed}</p>
          <p><strong>Range:</strong> ${india.range}</p>
          <p><strong>Origin:</strong> ${india.origin}</p>
        </div>
      </div>
    `;
}

function showArmyComparison() {
    comparisonResult.innerHTML = `
        <div class="row text-center">
          <div class="col-md-6 mb-3">
            <div class="card shadow-sm border-success">
              <div class="card-header bg-success text-white">
                <h5 class="mb-0">Pakistan Army (🇵🇰)</h5>
              </div>
              <div class="card-body">
                <p><strong>Active Personnel:</strong> 560,000</p>
                <p><strong>Reserve Personnel:</strong> 550,000</p>
                <p><strong>Main Battle Tanks:</strong> 2,537</p>
                <p><strong>Artillery Units:</strong> 4,619</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="card shadow-sm border-primary">
              <div class="card-header bg-primary text-white">
                <h5 class="mb-0">Indian Army (🇮🇳)</h5>
              </div>
              <div class="card-body">
                <p><strong>Active Personnel:</strong> 1,237,000</p>
                <p><strong>Reserve Personnel:</strong> 960,000</p>
                <p><strong>Main Battle Tanks:</strong> 3,740</p>
                <p><strong>Artillery Units:</strong> 9,743</p>
              </div>
            </div>
          </div>
        </div>
      `;
}

function showNavyComparison() {
    comparisonResult.innerHTML = `
        <div class="row text-center">
          <div class="col-md-6 mb-3">
            <div class="card shadow-sm border-success">
              <div class="card-header bg-success text-white">
                <h5 class="mb-0">Pakistan Navy (🇵🇰)</h5>
              </div>
              <div class="card-body">
                <p><strong>Submarines:</strong> 8</p>
                <p><strong>Frigates:</strong> 10</p>
                <p><strong>Corvettes:</strong> 3</p>
                <p><strong>Patrol Boats:</strong> 17</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="card shadow-sm border-primary">
              <div class="card-header bg-primary text-white">
                <h5 class="mb-0">Indian Navy (🇮🇳)</h5>
              </div>
              <div class="card-body">
                <p><strong>Submarines:</strong> 16</p>
                <p><strong>Frigates:</strong> 16</p>
                <p><strong>Destroyers:</strong> 11</p>
                <p><strong>Aircraft Carriers:</strong> 2</p>
              </div>
            </div>
          </div>
        </div>
      `;
}


indiaJetSelect.addEventListener("change", () => {
    const iJet = indiaJetSelect.value;
    const pJet = pakJetSelect.value;
    if (iJet && pJet) {
        showJetComparison(iJet, pJet);
    }
});

pakJetSelect.addEventListener("change", () => {
    const iJet = indiaJetSelect.value;
    const pJet = pakJetSelect.value;
    if (iJet && pJet) {
        showJetComparison(iJet, pJet);
    }
});
