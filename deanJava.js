var lightType = 0;

document.getElementById("funny2");
console.log("test");

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
