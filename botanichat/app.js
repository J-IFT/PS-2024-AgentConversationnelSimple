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
        'bonjour': 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?',
        'ça va ?': 'Je suis un bot, donc toujours prêt à aider ! Et vous ?',
        'quelle est la fleur la plus populaire ?': 'La rose est généralement considérée comme la fleur la plus populaire.',
        'comment puis-je prendre soin des orchidées ?': 'Les orchidées ont besoin de lumière indirecte et d\'un arrosage régulier. Évitez de trop les arroser.',
        'quelles sont les fleurs qui poussent bien en été ?': 'Les tournesols, les lavandes et les marguerites sont de bonnes options pour l\'été.',
        'quelle est la signification symbolique des roses rouges ?': 'Les roses rouges symbolisent généralement l\'amour et la passion.',
        'quelles sont les fleurs les plus parfumées ?': 'Les fleurs parfumées incluent le jasmin, la lavande, et le gardenia.',
        'quel est le meilleur moment pour planter des tulipes ?': 'Les tulipes se plantent habituellement à l\'automne pour une floraison au printemps.',
        'comment cultiver des roses en pot ?': 'Les roses en pot nécessitent un bon drainage, un arrosage régulier et un ensoleillement adéquat.',
        'comment se débarrasser des pucerons sur les plantes ?': 'Les pucerons peuvent être éliminés avec du savon insecticide ou en attirant des prédateurs naturels comme les coccinelles.',
        'quelles sont les fleurs qui attirent les papillons ?': 'Les buddleias, les zinnias et les cosmos sont populaires pour attirer les papillons.',
        'quelles fleurs sont adaptées à l\'ombre ?': 'Des plantes comme les hostas, les fougères et les impatiens prospèrent dans des zones ombragées.',
        'que faire si mes plantes ont des feuilles jaunes ?': 'Les feuilles jaunes peuvent indiquer un arrosage excessif, un manque de nutriments ou une exposition au froid. Vérifiez les conditions spécifiques de vos plantes.',
        'comment encourager la floraison des plantes ?': 'En fournissant les conditions appropriées en termes de lumière, d\'eau et de nutriments, ainsi que de taille régulière.',
        'quelle est la durée de vie typique d\'une fleur de tulipe ?': 'En général, les tulipes fleurissent chaque printemps et peuvent durer de quelques semaines à environ un mois, selon les conditions météorologiques et les soins apportés.',
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
