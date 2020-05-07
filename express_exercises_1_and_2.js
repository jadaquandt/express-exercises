const express = require('express');
const app = express();
const port = 3000;

const petsData = require('./animals.json');

app.set('view engine', 'ejs');
app.set('views', 'views');

//Create a public folder in your project. Setup express to serve up all files within the public folder. 
app.use(express.static('public'))

app.get('/feedback', function(req, res){
    res.render('feedback', {
        pageTitle: 'Coca Cola',
        pageID: 'Home',
        user: {
            name: 'My Username'
        }
    });
});

//Hello World
// Make an express program that will display "Hello, world!" at the root URL: /
app.get('/', function(req, res){
    res.render('ejs_exercise', {
        sendText: 'Hello, world!'
    });
});

// Add to your program the following pages:
// "Meow" at the URL /cats
app.get('/cats', function(req, res){
    res.render('ejs_exercise', {
        sendText: 'Meow'
    });
});

// "Woof" at the URL /dogs
app.get('/dogs', function(req, res){
    res.render('ejs_exercise', {
        sendText: 'Woof'
    });
});

// "Living together" at the URL /cats_and_dogs
app.get('/cats_and_dogs', function(req, res){
    res.render('ejs_exercise', {
        sendText: 'Living together'
    });
});

// Adding to the same program, say a greeting to the user, given that the user's name is encoded inside the URL. For example, if you go to the URL
// /greet/Kennedy it should say "Hello, Kennedy!"
// etc...
app.get('/greet/:name', (req, res) => {
    res.render('greet', {
        name: req.params.name
    });
});

// Query Parameters: Tell the year you were born:

app.get('/hello1', function(req, res){
    var name = req.query.name || 'world';
    res.send('Hello ' + name + '!');
    });

// Adding to the same program, display the year you 
// were born when you report your age in a query parameter. 
//For example, when you go to the URL: /year?age=32 it will display You were born in 1985.
app.get('/year', function(req, res){
    var age = req.query.age;
    
    var yearBorn = (2020 - age);

    res.send ('You were born in ' + yearBorn);

    });

// Create a front page for your project with a new EJS layout. 
// Use the header and footer from your partials folder.  
// In the body of your front page, include all of the 
// pictures or your pets from your json string by using a for loop.

app.get('/animal-pics', function(req, res){
    res.render('pets', {
        data: petsData
    }); 
});
    
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

