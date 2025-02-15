const quadrantes = document.querySelectorAll("#quadrantes div");
let selected = document.querySelector("#selected"); // O primeiro quadrante selecionado

quadrantes.forEach(div => {
    div.addEventListener("click", () => {
        if (div !== selected) {

            // Removendo o id="selected" de todos os itens
            quadrantes.forEach(item => item.removeAttribute("id"));

            // O item clicado agora recebe o id="selected"
            div.id = "selected";

            // Move o item clicado para o topo da lista
            const parent = document.querySelector("#quadrantes");
            parent.insertBefore(div, parent.firstChild);

            // Atualiza o novo "selecionado"
            selected = div;
        }
    });
});