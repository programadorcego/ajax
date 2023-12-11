document.querySelector(".button").addEventListener("click", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "http://localhost/programadorcego/javascript/ajax/arquivo.txt", true);
    request.onload = () => {
        if(request.status === 200){
            document.querySelector("#text").textContent = request.response;
        }
    };

    request.send();
});