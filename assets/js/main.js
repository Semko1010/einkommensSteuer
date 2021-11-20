let jahr = document.getElementById("jahr");
let input = document.getElementById("input");
let kirchenSteuer = document.getElementById("kirchenSteuer");
let einkommensSteuer = document.getElementById("einkommensSteuer");
let kirchensteuer = document.getElementById("kirchensteuer");
let gesamtbelastung = document.getElementById("gesamtbelastung");
let zusammendenVeranlagung = document.getElementById("zusammendenVeranlagung");
let est;

const berechnen = function() {
    //##############################2021##################################
    if (jahr.value == 2021) {
        if (input.value <= 9744) {
            einkommensSteuer.innerHTML = 0 + " €";
            kirchensteuer.innerHTML = 0 + " €";
            gesamtbelastung.innerHTML = 0 + " €";
        }
        if (input.value >= 9745 && input.value <= 14753) {
            let case1 = (input.value - 9744) / 10000
            est = (995.21 * case1 + 1400) * case1;
            einkommensSteuer.innerHTML = est.toFixed(2) + " €";
            gesamtbelastung.innerHTML = est.toFixed(2) + " €";
        }
        if (input.value >= 14754 && input.value <= 57918) {
            let case1 = (input.value - 14753) / 10000
            est = (208.85 * case1 + 2397) * case1 + 950.96;
            einkommensSteuer.innerHTML = est.toFixed(2) + " €";
            gesamtbelastung.innerHTML = est.toFixed(2) + " €";
        }
        if (input.value >= 57919 && input.value <= 274612) {
            est = 0.42 * input.value - 9136.63
            einkommensSteuer.innerHTML = est.toFixed(2) + " €";
            gesamtbelastung.innerHTML = est.toFixed(2) + " €";
        }
        if (input.value >= 274612) {
            est = 0.45 * input.value - 17374.99
            einkommensSteuer.innerHTML = est.toFixed(2) + " €";
            gesamtbelastung.innerHTML = est.toFixed(2) + " €";
        }
    }
    //##############################2020##################################
    if (jahr.value == 2020) {
        if (input.value <= 9408) {
            einkommensSteuer.innerHTML = 0 + " €";
            kirchensteuer.innerHTML = 0 + " €";
            gesamtbelastung.innerHTML = 0 + " €";
        }
        if (input.value >= 9409 && input.value <= 14532) {
            let case1 = (input.value - 9408) / 10000
            est = (972.87 * case1 + 1400) * case1;
            einkommensSteuer.innerHTML = est.toFixed(2) + " €";
            gesamtbelastung.innerHTML = est.toFixed(2) + " €";
        }
        if (input.value >= 14533 && input.value <= 57051) {
            let case1 = (input.value - 14532) / 10000
            est = (212.02 * case1 + 2397) * case1 + 972.79;
            einkommensSteuer.innerHTML = est.toFixed(2) + " €";
            gesamtbelastung.innerHTML = est.toFixed(2) + " €";
        }
        if (input.value >= 57052 && input.value <= 270500) {
            est = 0.42 * input.value - 8963.74
            einkommensSteuer.innerHTML = est.toFixed(2) + " €";
            gesamtbelastung.innerHTML = est.toFixed(2) + " €";
        }
        if (input.value >= 270501) {
            est = 0.45 * input.value - 17078.74
            einkommensSteuer.innerHTML = est.toFixed(2) + " €";
            gesamtbelastung.innerHTML = est.toFixed(2) + " €";
        }
    }
    //##############################2019##################################
    if (jahr.value == 2019) {
        if (input.value <= 9168) {
            einkommensSteuer.innerHTML = 0 + " €";
            kirchensteuer.innerHTML = 0 + " €";
            gesamtbelastung.innerHTML = 0 + " €";
        }
        if (jahr.value == 2019 && input.value >= 9169 && input.value <= 14254) {
            let case1 = (input.value - 9168) / 10000
            est = (980.14 * case1 + 1400) * case1;
            einkommensSteuer.innerHTML = est.toFixed(2) + " €";
            gesamtbelastung.innerHTML = est.toFixed(2) + " €";
        }
        if (input.value >= 14255 && input.value <= 55960) {
            let case1 = (input.value - 14254) / 10000
            est = (216.16 * case1 + 2397) * case1 + 965.58;
            einkommensSteuer.innerHTML = est.toFixed(2) + " €";
            gesamtbelastung.innerHTML = est.toFixed(2) + " €";
        }
        if (input.value >= 55961 && input.value <= 265326) {
            est = 0.42 * input.value - 8780.90
            einkommensSteuer.innerHTML = est.toFixed(2) + " €";
            gesamtbelastung.innerHTML = est.toFixed(2) + " €";
        }
        if (input.value >= 2265327) {
            est = 0.45 * input.value - 16740.68
            einkommensSteuer.innerHTML = est.toFixed(2) + " €";
            gesamtbelastung.innerHTML = est.toFixed(2) + " €";
        }
    }
    if (kirchenSteuer.value == 8) {
        let kirch = est * 1.08;
        kirchensteuer.innerHTML = (kirch - est).toFixed(2) + " €";
        einkommensSteuer.innerHTML = est.toFixed(2) + " €";
        gesamtbelastung.innerHTML = (est * 1.08).toFixed(2) + " €";
    }
    if (kirchenSteuer.value == 9) {
        let kirch = est * 1.09;
        kirchensteuer.innerHTML = (kirch - est).toFixed(2) + " €";
        einkommensSteuer.innerHTML = est.toFixed(2) + " €";
        gesamtbelastung.innerHTML = (est * 1.09).toFixed(2) + " €";
    }
    if (zusammendenVeranlagung.checked == true) {
        einkommensSteuer.innerHTML = (est = est * 2).toFixed(2) + " €";
        gesamtbelastung.innerHTML = (est = est * 2).toFixed(2) + " €";
    }
}