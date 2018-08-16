### Eat The Burger App

This application was created using MySQL, Node, Express, Handlebars and a homemade ORM.
Users will be allowed to input burgers they would like to eat, 'devour' them, and even 'purge' them, only to be eaten again if so desired.

### Operation

1) Clone repository to your local system.

2) Open terminal.

3) Navigate to the appropriate folder, and install all required packages ('mysql', 'express', 'body-parser', 'express-handlebars', 'method-override' and 'require'). Then run node server.js.

4) Or simply navigate to the deployed application on Heroku at https://burgersadness.herokuapp.com/burgers.

### Functionality

1) Read all entries from the MySQL database and display them to the DOM using Handlebars.

2) Update a selected burger by clicking "Devour It", which hits a /burger/eat/:id route in Express to change its "devoured" status in the MySQL database * re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars).

3) Create a new burger using the "Add a Burger You Would Like" form, which hits a /burger/create route in Express to insert a new burger into the MySQL database * re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars).

4) Another wrinkle is the "Purge Your Shame" button, once a burger had been "Devoured". This is achieved by simply setting the value to 'false' in the aforementioned Update function (via Handlebars).

#### Adding a Burger

![Output Sample](https://github.com/EGartland/burger/blob/master/public/assets/img/addBurger.gif)

#### Devouring and Purging a Burger

![Output Sample](https://github.com/EGartland/burger/blob/master/public/assets/img/devourPurge.gif)
