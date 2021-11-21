let jahr = document.getElementById("jahr");
let incomeText = document.getElementById("input");
let kirchenSteuer = document.getElementById("kirchenSteuer");
let einkommensSteuer = document.getElementById("einkommensSteuer");
let kirchensteuer = document.getElementById("kirchensteuer");
let gesamtbelastung = document.getElementById("gesamtbelastung");
let zusammendenVeranlagung = document.getElementById("zusammendenVeranlagung");
let section4 = document.querySelector(".section4");
let est;

const berechnen = function() {

    section4.style.height = "35vh";
    section4.style.opacity = 1;
    let incomeValue = incomeText.value;
    if (zusammendenVeranlagung.checked) {
        incomeValue = incomeValue / 2;
    }
    if (jahr.value == 2021) {

        if (incomeValue <= 9744) {
            est = 0;
        }
        if (incomeValue >= 9745 && incomeValue <= 14753) {
            let case1 = (incomeValue - 9744) / 10000
            est = (995.21 * case1 + 1400) * case1;
        }
        if (incomeValue >= 14754 && incomeValue <= 57918) {
            let case1 = (incomeValue - 14753) / 10000
            est = (208.85 * case1 + 2397) * case1 + 950.96;
        }
        if (incomeValue >= 57919 && incomeValue <= 274612) {
            est = 0.42 * incomeValue - 9136.63
        }
        if (incomeValue >= 274612) {
            est = 0.45 * incomeValue - 17374.99
        }
    }
    //###########################2020#######################
    if (jahr.value == 2020) {
        if (incomeValue <= 9408) {
            est = 0;
        }
        if (incomeValue >= 9409 && incomeValue <= 14532) {
            let case1 = (incomeValue - 9408) / 10000
            est = (972.87 * case1 + 1400) * case1;
        }
        if (incomeValue >= 14533 && incomeValue <= 57051) {
            let case1 = (incomeValue - 14532) / 10000
            est = (212.02 * case1 + 2397) * case1 + 972.79;
        }
        if (incomeValue >= 57052 && incomeValue <= 270500) {
            est = 0.42 * incomeValue - 8963.74
        }
        if (incomeValue >= 270501) {
            est = 0.45 * incomeValue - 17078.74
        }
    }
    //###########################2019#######################
    if (jahr.value == 2019) {
        if (incomeValue <= 9168) {
            est = 0;
        }
        if (jahr.value == 2019 && incomeValue >= 9169 && incomeValue <= 14254) {
            let case1 = (incomeValue - 9168) / 10000
            est = (980.14 * case1 + 1400) * case1;
        }
        if (incomeValue >= 14255 && incomeValue <= 55960) {
            let case1 = (incomeValue - 14254) / 10000
            est = (216.16 * case1 + 2397) * case1 + 965.58;
        }
        if (incomeValue >= 55961 && incomeValue <= 265326) {
            est = 0.42 * incomeValue - 8780.90
        }
        if (incomeValue >= 2265327) {
            est = 0.45 * incomeValue - 16740.68
        }
    }
    if (zusammendenVeranlagung.checked) {
        est = est * 2;
        einkommensSteuer.innerHTML = est.toFixed(2) + " €";
        kirchensteuer.innerHTML = est.toFixed(2) + " €";
        gesamtbelastung.innerHTML = est.toFixed(2) + " €";
    }
    if (kirchenSteuer.value == 0) {
        einkommensSteuer.innerHTML = Math.floor(est).toFixed(2) + " €";
        kirchensteuer.innerHTML = (0).toFixed(2) + " €";
        gesamtbelastung.innerHTML = Math.floor(est).toFixed(2) + " €";
    }
    if (kirchenSteuer.value == 8) {
        let kirch = est * 1.08;
        kirchensteuer.innerHTML = Math.floor(kirch - est).toFixed(2) + " €";
        einkommensSteuer.innerHTML = Math.floor(est).toFixed(2) + " €";
        gesamtbelastung.innerHTML = Math.floor(est * 1.08).toFixed(2) + " €";
    }
    if (kirchenSteuer.value == 9) {
        let kirch = est * 1.09;
        kirchensteuer.innerHTML = Math.floor(kirch - est).toFixed(2) + " €";
        einkommensSteuer.innerHTML = Math.floor(est).toFixed(2) + " €";
        gesamtbelastung.innerHTML = Math.floor(est * 1.09).toFixed(2) + " €";
    }
}