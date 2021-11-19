let jahr = document.getElementById("jahr");
let input = document.getElementById("input");
let kirchenSteuer = document.getElementById("kirchenSteuer");
let einkommensSteuer = document.getElementById("einkommensSteuer");
let kirchensteuer = document.getElementById("kirchensteuer");
let gesamtbelastung = document.getElementById("gesamtbelastung");

const berechnen = function() {
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
    if (jahr.value == 2021 && input.value >= 87919 && input.value <= 274612) {
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

}