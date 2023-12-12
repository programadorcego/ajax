document.querySelector(".button").addEventListener("click", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "http://localhost/api", true);

    request.onload = () => {
        if(request.status === 200){
            let dados = JSON.parse(request.response);
            console.log(dados[0].nome)
        }
    }

    request.send();

});