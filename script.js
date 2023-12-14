function promessa() {
    return new Promise((resolve, reject) => {
        let numero = Math.floor(Math.random() * (11 - 1)) + 1;

        if(numero % 2 == 1) return reject(`Erro! O número ${numero} é ímpar.`);

        return resolve(`O número ${numero} é par.`);
    });
}

document.querySelector(".button").addEventListener("click", () => {
console.clear();

    promessa()
.then(resultado => console.log(resultado))
.catch(erro => console.error(erro))
.finally(() => console.log("Fim da Promise"));
});