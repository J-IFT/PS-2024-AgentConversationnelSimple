// Import des modules nécessaires pour la lecture de la console
const readline = require('readline');

// Configuration de l'interface de lecture et d'écriture
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fonction pour répondre aux questions sur les fleurs
function respondToUserInput(input) {
    // Convertir l'entrée en minuscules pour la comparaison insensible à la casse
    const userInput = input.toLowerCase().trim();

    // Base de connaissances des réponses sur les fleurs (exemples)
    const responses = {
        'quelle est la fleur la plus populaire ?': 'La rose est généralement considérée comme la fleur la plus populaire.',
        'comment puis-je prendre soin des orchidées ?': 'Les orchidées ont besoin de lumière indirecte et d\'un arrosage régulier. Évitez de trop les arroser.',
        'quelles sont les fleurs qui poussent bien en été ?': 'Les tournesols, les lavandes et les marguerites sont de bonnes options pour l\'été.',
        'exit': 'Au revoir !' // Pour quitter la conversation
    };

    // Vérifier si l'utilisateur veut quitter
    if (userInput === 'exit') {
        console.log(responses['exit']);
        rl.close(); // Fermer l'interface de lecture
        return;
    }

    // Vérifier si une réponse correspond à l'entrée de l'utilisateur
    for (let question in responses) {
        if (userInput.includes(question)) {
            console.log(responses[question]);
            return;
        }
    }

    // Si aucune réponse prédéfinie n'est trouvée
    console.log('Désolé, je ne comprends pas votre question.');
}

// Fonction pour démarrer la conversation avec Botanichat
function startBotanichat() {
    console.log('Bienvenue à Botanichat ! Posez-moi des questions sur les fleurs.');

    rl.question('Vous: ', (input) => {
        respondToUserInput(input); // Appel de la fonction pour répondre à l'entrée de l'utilisateur
        startBotanichat(); // Demander une nouvelle entrée après avoir répondu
    });
}

// Démarrer la conversation
startBotanichat();
