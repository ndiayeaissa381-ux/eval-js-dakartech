let taches = [
    { texte: "Faire les courses", terminee: false },
    { texte: "Réviser JavaScript", terminee: false },
    { texte: "Appeler maman", terminee: false }
];

let listeTaches = document.querySelector("#liste_taches");
let messageErreur = document.querySelector("#message_erreur");
let compteur = document.querySelector("#compteur");
function afficherListe() {
    listeTaches.innerHTML = "";

    for (let i = 0; i < taches.length; i++) {
        let tache = taches[i];

        let li = document.createElement("li");
        li.className = "tache";

        if (tache.terminee === true) {
            li.className = "tache terminee";
        }

        let span = document.createElement("span");
        span.textContent = tache.texte;

        let btnTerminer = document.createElement("button");
        btnTerminer.className = "btn_terminer";
        btnTerminer.textContent = "Terminé";

        li.appendChild(span);
        li.appendChild(btnTerminer);
        listeTaches.appendChild(li);
    }
}

afficherListe();

function terminerTache(index) {
    if (taches[index].terminee === false) {
        taches[index].terminee = true;
    } else {
        taches[index].terminee = false;
    }
    afficherListe();
}