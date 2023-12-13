document.querySelector(".button").addEventListener("click", () => {
    let promessa = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Olá, mundo!"), 10000);
    });

    console.log(promessa);
});