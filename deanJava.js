var lightType = 0;

document.getElementById("funny2");

function callBorder() {
    if (lightType === 0) {
        document.getElementById("funny2").style.border = "4px dotted #f5ff2a";
        lightType = 1;
    } else {
        document.getElementById("funny2").style.border = "4px dotted #c7c8b4";
        lightType = 0;
    }
}

setInterval(callBorder, 200);

var lightType2 = 0;

document.getElementById("funny22");

function callBorder2() {
    if (lightType2 === 0) {
        document.getElementById("funny22").style.border = "4px outset #FF0000";
        lightType2 = 1;
    } else {
        document.getElementById("funny22").style.border = "4px outset #c7c8b4";
        lightType2 = 0;
    }
}

setInterval(callBorder2, 200);




