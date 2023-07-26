// console.log("this is a bmi calculator");

function heightConvert(height) {
    let hUnit = document.getElementById('h-units-select').value;
    if (hUnit == 'Meters') {
        return height * 100;
    }
    else if (hUnit == 'Feet') {
        return height * 30.48;
    }
    else if (hUnit == 'Inches') {
        return height * 2.54;
    }
    else {
        return height;
    }
}

function weightConvert(weight) {
    let wUnit = document.getElementById('w-units-select').value;
    if (wUnit == 'Pounds') {
        return weight / 2.2;
    }
    else {
        return weight;
    }
}

function calculateBMI(h, w) {
    let bmi = w / (h * h) * 10000;
    // console.log("BMI is:", bmi.toFixed(1));
    return bmi.toFixed(1);
}


function putBMI() {
    let height = heightConvert(hInput.value);
    let weight = weightConvert(wInput.value);
    let status = "Normal";
    let hue = "green";
    let bmiValue = calculateBMI(height, weight);
    // console.log(bmiValue);
    document.getElementById('bmi-value').innerText = bmiValue;
    if (bmiValue < 18.5) {
        status = "Under Weight";
        hue = "blue";
    }
    else if (bmiValue > 25.0) {
        status = "Over Weight";
        hue = "red";
    }
    document.getElementById('status').innerHTML = status;
    document.getElementById('status').style.color = hue;
    document.querySelector('.result').style.zIndex = "4";
}

function backtoInput() {
    document.getElementById('h-units-select').value = "Centimeters";
    document.getElementById('w-units-select').value = "Kilograms";
    hInput.value = "";
    wInput.value = "";
    document.querySelector('.result').style.zIndex = "1";
}