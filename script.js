function funcao1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Fim da função 1`);
            return resolve("Resultado da função 1");
        }, 5000);
    });
}

function funcao2(param) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Fim da função 2 com parâmetro: ${param}`);
            return resolve("Resultado da função 2");
        }, 5000);
    });
}

function funcao3(param) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Fim da função 3 com parâmetro: ${param}`);
            return resolve("Resultado da função 3");
        }, 5000);
    });
}

document.querySelector(".button").addEventListener("click", () => {
funcao1()
.then(resultado1 => funcao2(resultado1))
.then(resultado2 => funcao3(resultado2))
.then(resultado3 => console.log(resultado3));
});