document.querySelector(".button").addEventListener("click", () => {
    fetch("http://localhost/api/text")
    .then(resultado => resultado.text())
    .then(texto => {
        document.querySelector("#text").textContent = texto;
    });
});