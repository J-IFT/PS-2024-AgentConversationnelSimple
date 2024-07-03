const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

// API endpoint pour gérer les interactions avec Botanichat
app.get('/api/chat', (req, res) => {
    const userInput = req.query.userInput.toLowerCase().trim();
    const responses = {
        'quelle est la fleur la plus populaire ?': 'La rose est généralement considérée comme la fleur la plus populaire.',
        'comment puis-je prendre soin des orchidées ?': 'Les orchidées ont besoin de lumière indirecte et d\'un arrosage régulier. Évitez de trop les arroser.',
        'quelles sont les fleurs qui poussent bien en été ?': 'Les tournesols, les lavandes et les marguerites sont de bonnes options pour l\'été.',
        'exit': 'Au revoir !'
    };

    let botResponse = 'Désolé, je ne comprends pas votre question.';
    for (let question in responses) {
        if (userInput.includes(question)) {
            botResponse = responses[question];
            break;
        }
    }

    res.send(botResponse);
});

app.listen(port, () => {
    console.log(`Botanichat est disponible sur http://localhost:${port}`);
});
