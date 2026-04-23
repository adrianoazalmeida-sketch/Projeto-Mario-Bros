const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function MostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translate(-50%)"
    mascara.style.visibility = "visible"
}

function EsconderForm() {
    form.style.left = "-295px"
    form.style.transform = "translate(0%)"
    mascara.style.visibility = "hidden"
}