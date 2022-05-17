// =======================================
// KONSTANTEN UND VARIABLEN
// =======================================

// VARIABLEN
// =======================================

let year = document.getElementById('year');
let incomeInput = document.getElementById('input-income');
let single = document.getElementById('single');
let double = document.getElementById('double');
let zveOutput = document.getElementById('zve-output');
let taxOutput = document.getElementById('tax-output');


// KONSTANTEN FÜR BEMESSUNGSGRENZEN
// =====================================

const min2021 = 9744;
const med2021 = 14753;
const high2021 = 57918;
const max2021 = 274612;

const min2020 = 9408;
const med2020 = 14532;
const high2020 = 57051;
const max2020 = 270501;

const min2019 = 9168;
const med2019 = 14254;
const high2019 = 55960;
const max2019 = 265327;

// FESTLEGEN OB EINZEL ODER DOPPELVERANLAGUNG
// ===========================================


// Kläglicher Versuch, die beiden folgenden functions über ein Array zusammen zu fassen
// let arrayTest = () => {
//     if (single.checked == true) {
//         return [incomeInput.value, 1]
//     }

//     else if (double.checked == true) {
//         return [incomeInput.value * 0.5, 2];
//     }
// }


let calcZve = () => {
    if (single.checked == true) {
        return incomeInput.value;
    }

    else if (double.checked == true) {
        return incomeInput.value * 0.5;
    }
}

let factor = () => {
    if (single.checked == true) {
        return 1;
    }

    else if (double.checked == true) {
        return 2;
    }
}


// AUSWERTUNG WELCHES JAHR UND WELCHER VERANLAGUNGSTYP
// ====================================================
let calcYear = () => {
    if (year.value == 2019) {
        calc2019();
    }
    else if (year.value == 2020) {
        calc2020();
    }
    else if (year.value == 2021) {
        calc2021();
    }
    else {
        console.log('Kein Wert - FEHLERMELDUNG');
    }
}

// BERECHNUNG DER EINKOMMENSSTEUER
// ====================================================
let calc2019 = () => {
    console.log('Calculation for 2019');
    console.log('zVE: ' + calcZve());
    if (calcZve() <= min2019) {
        console.log('Einkommensteuer = 0 €');
        taxOutput.innerHTML = "Keine Einkommensteuer";
    }
    else if (calcZve() > min2019 && calcZve() <= med2019) {
        let y = ((calcZve() - 9168) / 10000);
        console.log((980.14 * y + 1400) * y);
        taxOutput.innerHTML = (factor() * ((980.14 * y + 1400) * y)).toFixed(2) + " €";
    }
    else if (calcZve() > med2019 && calcZve() <= high2019) {
        let z = ((calcZve() - 14254) / 10000);
        console.log((216.16 * z + 2397) * z + 965.58);
        taxOutput.innerHTML = (factor() * ((216.16 * z + 2397) * z + 965.58)).toFixed(2) + ' €';
    }
    else if (calcZve() > high2019 && calcZve() <= max2019) {
        console.log(0.42 * calcZve() - 8780.90);
        taxOutput.innerHTML = (factor() * (0.42 * calcZve() - 8780.90)).toFixed(2) + ' €';
    }
    else if (calcZve() > max2019) {
        console.log(0.45 * calcZve() - 16740.68);
        taxOutput.innerHTML = (factor() * (0.45 * calcZve() - 16740.68)).toFixed(2) + ' €';
    }
}

let calc2020 = () => {
    console.log('Calculation for 2020');
    console.log('zVE: ' + calcZve());
    if (calcZve() <= min2020) {
        console.log('Einkommensteuer = 0 €');
        taxOutput.innerHTML = "Keine Einkommensteuer";
    }
    else if (calcZve() > min2020 && calcZve() <= med2020) {
        let y = ((calcZve() - 9744) / 10000);
        console.log((995.21 * y + 1400) * y);
        taxOutput.innerHTML = (factor() * ((995.21 * y + 1400) * y)).toFixed(2) + ' €';
    }
    else if (calcZve() > med2020 && calcZve() <= high2020) {
        let z = ((calcZve() - 14753) / 10000);
        console.log((208.85 * z + 2397) * z + 950.96);
        taxOutput.innerHTML = (factor() * ((208.85 * z + 2397) * z + 950.96)).toFixed(2) + ' €';
    }
    else if (calcZve() > high2020 && calcZve() <= max2020) {
        console.log(0.42 * calcZve() - 9136.63);
        taxOutput.innerHTML = (factor() * (0.42 * calcZve() - 9136.63)).toFixed(2) + ' €';
    }
    else if (calcZve() > max2020) {
        console.log(0.45 * calcZve() - 17374.99);
        taxOutput.innerHTML = (factor() * (0.45 * calcZve() - 17374.99)).toFixed(2) + ' €';
    }
}

let calc2021 = () => {
    console.log('Calculation for 2021');
    console.log('zVE: ' + calcZve());
    if (calcZve() <= min2021) {
        taxOutput.innerHTML = "Keine Einkommensteuer";
    }
    else if (calcZve() > min2021 && calcZve() <= med2021) {
        let y = ((calcZve() - 9744) / 10000);
        taxOutput.innerHTML = (factor() * ((995.21 * y + 1400) * y)).toFixed(2) + ' €';
    }
    else if (calcZve() > med2021 && calcZve() <= high2021) {
        let z = ((calcZve() - 14753) / 10000);
        taxOutput.innerHTML = (factor() * ((208.85 * z + 2397) * z + 950.96)).toFixed(2) + ' €';
    }
    else if (calcZve() > high2021 && calcZve() <= max2021) {
        taxOutput.innerHTML = (factor() * (0.42 * calcZve() - 9136.63)).toFixed(2) + ' €';
    }
    else if (calcZve() > max2021) {
        taxOutput.innerHTML = (factor() * (0.45 * calcZve() - 17374.99)).toFixed(2) + ' €';
    }
}

// Funktion die vom Button aufgerufen wird
// ====================================================
let calculate = () => {
    console.log('Funktion calculate aufgerufen');
    calcYear();
    zveOutput.innerHTML = incomeInput.value + ' €';
}