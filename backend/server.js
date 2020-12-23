//console.log("voilà le code javascript (taper node server ensuite-runtime node permet exécuter du js côté serveur)");

const http = require('http') // importer le package http de node
//créer un server grâce à la première ligne - prend comme argument la fonction appelée à chaque requête envoyer par le serveur
const server = http.createServer((req, res) => {
    res.end('Voilà votre réponse du serveur');
});

server.listen(process.env.PORT || 2100)//server écoute le port 3000 - aller sur postman - localhost:3000 - locahost : mon propre ordi  - 3000: port 3000
