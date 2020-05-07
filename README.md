# express-exercises
# Exercise 1 instructions
1. Hello World
    Make an express program that will display "Hello, world!" at the root URL: /
2. Routes
    Add to your program the following pages:
    "Meow" at the URL /cats
    "Woof" at the URL /dogs
    "Living together" at the URL /cats_and_dogs
3. Route Parameters
    Adding to the same program, say a greeting to the user, given that the user's name is encoded inside the URL. For example, if you go to the URL
    /greet/Kennedy it should say "Hello, Kennedy!"
    /greet/Jamison it should say "Hello, Jamison!"
    /greet/Manny it should say "Hello, Manny!"
    etc...
4. Query Parameters: 
    Tell the year you were born
    class query string example:
    app.get('/hello1', function(req, res){
    var name = req.query.name || 'world';
    res.send('Hello ' + name + '!');});
    Adding to the same program, display the year you were born when you report your age in a query parameter. For example, when you go to the URL:
    /year?age=32 it will display You were born in 1985.
# Exercise 2 instructions
1. The Header Partial
    Create a header.ejs file in the views folder. This will become the header for all the pages.
2. Static Files
    Create a public folder in your project. Setup express to serve up all files within the public folder. Create a style.css in it, and then link to it in your header.ejs. Using CSS to give all your pages a common theme.
3. Templates
    Go back through each page you have created previous and make an .ejs for each one, use resp.render to render them.
Extra Extra!
    Accept a query parameter on the url for one your routes.  Pass the parmeter into your ejs template and display it on your .ejs page
# Exercise 3 instructions
1. Create a JSON File
    Create an animals.json file inside of your app/data folder.  Create a json string in your file of 5 kittens and puppies with their names, description, and image path.
    Add images to your app/images
    Add the 5 images that you referenced in your json file to your app/images folder
2. Build a layout page
3. Build an EJS template layout in your views folder.  
Name the file pets.ejs. 
    Create a Header section.  Include an image in your header section.  The path to this image (src) will be set using the template literals <%=  imgURL %>.  When a user navagates to your routes, the images in the header should change based on the route. i.e., on the dogs page, you should have .a dog header.  On the cats page, you should have a cat header.  The paths of these images should come from your json file.
    Include a navigation section that links to other pages (routes) in your project.
    Create a body section that takes the template literals <%= name%>, <%= description %>  place and image of the animal next to the description section.
    Create a footer section. In your footer section, include general information about your project.
4. Partials
    Create a new Partials folder in your app/views folder.  Inside of that folder, create a folder for "content" and for "template". Create 3 files inside of your "template" folder, one for "header", one for "animal description" and one for "footer". Take the header, animal description and footer section of your pets.ejs and put them inside of the "header" file and the "footer" file.

5. Create a front page for your project
    Create a front page for your project with a new EJS layout. Use the header and footer from your partials folder.  In the body of your front page, include all of the pictures or your pets from your json string by using a for loop.