// make celcius to fahrenheit as the default conversion
let input = true
window.addEventListener("DOMContentLoaded", (event) => {
    const celsiusTextarea = document.getElementById("celsius")
    const fahrenheitTextarea = document.getElementById("fahrenheit")
    if (input) {
        fahrenheitTextarea.setAttribute('disabled', '')
    } else {
        celsiusTextarea.setAttribute('disabled', '')
    }
})

// convert button function
function convert() {
    if (input) {
        const celsiusTextarea = document.getElementById("celsius")
        const fahrenheitTextarea = document.getElementById("fahrenheit")
        let celsius = parseFloat(celsiusTextarea.value);
        let fahrenheit = (celsius * 9 / 5) + 32;
        fahrenheitTextarea.value = fahrenheit.toFixed(2);
        document.getElementById("calculation").value = celsius + " * (9/5) + 32 = " + fahrenheit.toFixed(2)
    } else {
        const celsiusTextarea = document.getElementById("celsius");
        const fahrenheitTextarea = document.getElementById("fahrenheit");
        let fahrenheit = parseFloat(fahrenheitTextarea.value);
        let celsius = (fahrenheit - 32) * 5 / 9;
        celsiusTextarea.value = celsius.toFixed(2);
        document.getElementById("calculation").value = "( " + fahrenheit + " - 32 ) * (9/5) = " + celsius.toFixed(2)
    }
}

//reset button function
function reset() {
    document.getElementById("celsius").value = ''
    document.getElementById("fahrenheit").value = ''
    document.getElementById("calculation").value = ''
}

//reverse button function
function reverse() {
    const celsiusTextarea = document.getElementById("celsius")
    const fahrenheitTextarea = document.getElementById("fahrenheit")
    input =! input
    if (input) {
        fahrenheitTextarea.setAttribute('disabled', '')
        celsiusTextarea.removeAttribute('disabled')
    } else {
        celsiusTextarea.setAttribute('disabled', '')
        fahrenheitTextarea.removeAttribute('disabled')
    }
}