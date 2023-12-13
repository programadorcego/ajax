document.querySelector(".button").addEventListener("click", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "https://pokeapi.co/api/v2/pokemon", true);

    request.onload = () => {
        document.querySelector("tbody").innerHTML = "";

        if(request.status === 200) {
            const response = JSON.parse(request.response);
            
            response.results.forEach((pokemon, index) => {
                const tr = document.createElement("tr");
                const tdId = document.createElement("td");
                const tdName = document.createElement("td");

                tdId.textContent = index + 1;
                tdName.textContent = pokemon.name;

                tr.append(tdId, tdName);
                document.querySelector("tbody").appendChild(tr);
            });
        }
    };

    request.send();
});