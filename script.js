document.querySelector(".button").addEventListener("click", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "http://localhost/programadorcego/javascript/ajax/dados.json", true);

    request.onload = () => {
        if(request.status === 200) {
            let dados = JSON.parse(request.response);
            document.querySelector("tbody").innerHTML = "";

            dados.forEach(dado => {
            const tr = document.createElement("tr")    ;
            const tdId = document.createElement("td");
            const tdName = document.createElement("td");
            const tdEmail = document.createElement("td");

            tdId.textContent = dado.id;
            tdName.textContent = dado.name;
            tdEmail.textContent = dado.email;

            tr.append(tdId, tdName, tdEmail);
            document.querySelector("tbody").appendChild(tr);
            });
        }
    };

    request.send();
});