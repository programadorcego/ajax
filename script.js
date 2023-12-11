document.querySelector(".button").addEventListener("click", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "http://localhost/programadorcego/javascript/ajax/arquivo.txt", true);
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            document.querySelector("#text").textContent = request.response;
        }

        //console.log(request.readyState);
    };

    request.send();
});