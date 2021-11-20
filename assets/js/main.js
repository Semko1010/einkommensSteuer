let jahr = document.getElementById("jahr");
let input = document.getElementById("input");
let kirchenSteuer = document.getElementById("kirchenSteuer");
let einkommensSteuer = document.getElementById("einkommensSteuer");
let kirchensteuer = document.getElementById("kirchensteuer");
let gesamtbelastung = document.getElementById("gesamtbelastung");

const berechnen = function() {
    //##############################2020##################################
    if (jahr.value == 2021 && input.value <= 9744) {
        einkommensSteuer.innerHTML = 0 + " €";
        kirchensteuer.innerHTML = 0 + " €";
        gesamtbelastung.innerHTML = 0 + " €";
    }
    if (jahr.value == 2021 && input.value >= 9745 && input.value <= 14753) {
        let case1 = (input.value - 9744) / 10000
        let case2 = (995.21 * case1 + 1400) * case1;
        einkommensSteuer.innerHTML = case2.toFixed(2) + " €";
        gesamtbelastung.innerHTML = case2.toFixed(2) + " €";
        if (kirchenSteuer.value == 8) {
            let kirch = case2 * 1.08;
            kirchensteuer.innerHTML = (kirch - case2).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case2.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case2 * 1.08).toFixed(2) + " €";
        }
        if (kirchenSteuer.value == 9) {
            let kirch = case2 * 1.09;
            kirchensteuer.innerHTML = (kirch - case2).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case2.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case2 * 1.09).toFixed(2) + " €";
        }
    }
    if (jahr.value == 2021 && input.value >= 14754 && input.value <= 57918) {
        let case1 = (input.value - 14753) / 10000
        let case2 = (208.85 * case1 + 2397) * case1 + 950.96;
        einkommensSteuer.innerHTML = case2.toFixed(2) + " €";
        gesamtbelastung.innerHTML = case2.toFixed(2) + " €";
        if (kirchenSteuer.value == 8) {
            let kirch = case2 * 1.08;
            kirchensteuer.innerHTML = (kirch - case2).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case2.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case2 * 1.08).toFixed(2) + " €";
        }
        if (kirchenSteuer.value == 9) {
            let kirch = case2 * 1.09;
            kirchensteuer.innerHTML = (kirch - case2).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case2.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case2 * 1.09).toFixed(2) + " €";
        }
    }
    if (jahr.value == 2021 && input.value >= 57919 && input.value <= 274612) {
        let case1 = 0.42 * input.value - 9136.63
        einkommensSteuer.innerHTML = case1.toFixed(2) + " €";
        gesamtbelastung.innerHTML = case1.toFixed(2) + " €";
        if (kirchenSteuer.value == 8) {
            let kirch = case1 * 1.08;
            kirchensteuer.innerHTML = (kirch - case1).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case1.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case1 * 1.08).toFixed(2) + " €";
        }
        if (kirchenSteuer.value == 9) {
            let kirch = case1 * 1.09;
            kirchensteuer.innerHTML = (kirch - case1).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case1.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case1 * 1.09).toFixed(2) + " €";
        }
    }
    if (jahr.value == 2021 && input.value >= 274612) {
        let case1 = 0.45 * input.value - 17374.99
        einkommensSteuer.innerHTML = case1.toFixed(2) + " €";
        gesamtbelastung.innerHTML = case1.toFixed(2) + " €";
        if (kirchenSteuer.value == 8) {
            let kirch = case1 * 1.08;
            kirchensteuer.innerHTML = (kirch - case1).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case1.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case1 * 1.08).toFixed(2) + " €";
        }
        if (kirchenSteuer.value == 9) {
            let kirch = case1 * 1.09;
            kirchensteuer.innerHTML = (kirch - case1).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case1.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case1 * 1.09).toFixed(2) + " €";
        }
    }
    //##############################2020##################################

    if (jahr.value == 2020 && input.value <= 9408) {
        einkommensSteuer.innerHTML = 0 + " €";
        kirchensteuer.innerHTML = 0 + " €";
        gesamtbelastung.innerHTML = 0 + " €";
    }
    if (jahr.value == 2020 && input.value >= 9409 && input.value <= 14532) {
        let case1 = (input.value - 9408) / 10000
        let case2 = (972.87 * case1 + 1400) * case1;
        einkommensSteuer.innerHTML = case2.toFixed(2) + " €";
        gesamtbelastung.innerHTML = case2.toFixed(2) + " €";
        if (kirchenSteuer.value == 8) {
            let kirch = case2 * 1.08;
            kirchensteuer.innerHTML = (kirch - case2).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case2.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case2 * 1.08).toFixed(2) + " €";
        }
        if (kirchenSteuer.value == 9) {
            let kirch = case2 * 1.09;
            kirchensteuer.innerHTML = (kirch - case2).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case2.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case2 * 1.09).toFixed(2) + " €";
        }
    }
    if (jahr.value == 2020 && input.value >= 14533 && input.value <= 57051) {
        let case1 = (input.value - 14532) / 10000
        let case2 = (212.02 * case1 + 2397) * case1 + 972.79;
        einkommensSteuer.innerHTML = case2.toFixed(2) + " €";
        gesamtbelastung.innerHTML = case2.toFixed(2) + " €";
        if (kirchenSteuer.value == 8) {
            let kirch = case2 * 1.08;
            kirchensteuer.innerHTML = (kirch - case2).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case2.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case2 * 1.08).toFixed(2) + " €";
        }
        if (kirchenSteuer.value == 9) {
            let kirch = case2 * 1.09;
            kirchensteuer.innerHTML = (kirch - case2).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case2.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case2 * 1.09).toFixed(2) + " €";
        }
    }
    if (jahr.value == 2020 && input.value >= 57052 && input.value <= 270500) {
        let case1 = 0.42 * input.value - 8963.74
        einkommensSteuer.innerHTML = case1.toFixed(2) + " €";
        gesamtbelastung.innerHTML = case1.toFixed(2) + " €";
        if (kirchenSteuer.value == 8) {
            let kirch = case1 * 1.08;
            kirchensteuer.innerHTML = (kirch - case1).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case1.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case1 * 1.08).toFixed(2) + " €";
        }
        if (kirchenSteuer.value == 9) {
            let kirch = case1 * 1.09;
            kirchensteuer.innerHTML = (kirch - case1).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case1.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case1 * 1.09).toFixed(2) + " €";
        }
    }
    if (jahr.value == 2020 && input.value >= 270501) {
        let case1 = 0.45 * input.value - 17078.74
        einkommensSteuer.innerHTML = case1.toFixed(2) + " €";
        gesamtbelastung.innerHTML = case1.toFixed(2) + " €";
        if (kirchenSteuer.value == 8) {
            let kirch = case1 * 1.08;
            kirchensteuer.innerHTML = (kirch - case1).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case1.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case1 * 1.08).toFixed(2) + " €";
        }
        if (kirchenSteuer.value == 9) {
            let kirch = case1 * 1.09;
            kirchensteuer.innerHTML = (kirch - case1).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case1.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case1 * 1.09).toFixed(2) + " €";
        }
    }
    //##############################2019##################################
    if (jahr.value == 2019 && input.value <= 9168) {
        einkommensSteuer.innerHTML = 0 + " €";
        kirchensteuer.innerHTML = 0 + " €";
        gesamtbelastung.innerHTML = 0 + " €";
    }
    if (jahr.value == 2019 && input.value >= 9169 && input.value <= 14254) {
        let case1 = (input.value - 9168) / 10000
        let case2 = (980.14 * case1 + 1400) * case1;
        einkommensSteuer.innerHTML = case2.toFixed(2) + " €";
        gesamtbelastung.innerHTML = case2.toFixed(2) + " €";
        if (kirchenSteuer.value == 8) {
            let kirch = case2 * 1.08;
            kirchensteuer.innerHTML = (kirch - case2).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case2.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case2 * 1.08).toFixed(2) + " €";
        }
        if (kirchenSteuer.value == 9) {
            let kirch = case2 * 1.09;
            kirchensteuer.innerHTML = (kirch - case2).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case2.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case2 * 1.09).toFixed(2) + " €";
        }
    }
    if (jahr.value == 2019 && input.value >= 14255 && input.value <= 55960) {
        let case1 = (input.value - 14254) / 10000
        let case2 = (216.16 * case1 + 2397) * case1 + 965.58;
        einkommensSteuer.innerHTML = case2.toFixed(2) + " €";
        gesamtbelastung.innerHTML = case2.toFixed(2) + " €";
        if (kirchenSteuer.value == 8) {
            let kirch = case2 * 1.08;
            kirchensteuer.innerHTML = (kirch - case2).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case2.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case2 * 1.08).toFixed(2) + " €";
        }
        if (kirchenSteuer.value == 9) {
            let kirch = case2 * 1.09;
            kirchensteuer.innerHTML = (kirch - case2).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case2.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case2 * 1.09).toFixed(2) + " €";
        }
    }
    if (jahr.value == 2019 && input.value >= 55961 && input.value <= 265326) {
        let case1 = 0.42 * input.value - 8780.90
        einkommensSteuer.innerHTML = case1.toFixed(2) + " €";
        gesamtbelastung.innerHTML = case1.toFixed(2) + " €";
        if (kirchenSteuer.value == 8) {
            let kirch = case1 * 1.08;
            kirchensteuer.innerHTML = (kirch - case1).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case1.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case1 * 1.08).toFixed(2) + " €";
        }
        if (kirchenSteuer.value == 9) {
            let kirch = case1 * 1.09;
            kirchensteuer.innerHTML = (kirch - case1).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case1.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case1 * 1.09).toFixed(2) + " €";
        }
    }
    if (jahr.value == 2019 && input.value >= 2265327) {
        let case1 = 0.45 * input.value - 16740.68
        einkommensSteuer.innerHTML = case1.toFixed(2) + " €";
        gesamtbelastung.innerHTML = case1.toFixed(2) + " €";
        if (kirchenSteuer.value == 8) {
            let kirch = case1 * 1.08;
            kirchensteuer.innerHTML = (kirch - case1).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case1.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case1 * 1.08).toFixed(2) + " €";
        }
        if (kirchenSteuer.value == 9) {
            let kirch = case1 * 1.09;
            kirchensteuer.innerHTML = (kirch - case1).toFixed(2) + " €";
            einkommensSteuer.innerHTML = case1.toFixed(2) + " €";
            gesamtbelastung.innerHTML = (case1 * 1.09).toFixed(2) + " €";
        }
    }
}