async function minhaFuncao() {
    return "Olá mundo!";
}

async function funcao2() {
    let promessa = new Promise(resolve => {
        resolve("Olá, mundo!");
    });

    document.querySelector("#text").textContent = await promessa;
}

document.querySelector(".button").addEventListener("click", () => {
    //minhaFuncao().then(resultado => console.log(resultado));
    funcao2();
});