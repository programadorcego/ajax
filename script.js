document.querySelector(".button").addEventListener("click", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "http://localhost/programadorcego/javascript/ajax/dados.json", true);
    request.onload = () => {
        if(request.status === 200){
            const dados = JSON.parse(request.response);
            console.log(dados.name);
        }

        //console.log(request.readyState);
    };

    request.send();
});