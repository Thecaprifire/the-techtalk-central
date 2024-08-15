const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers: require("./utils/helpers") });

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Using session middleware with session object
app.use(session(sess));

// Parsing incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// IMPORTANT FOR PUBLIC FOLDERS - serving static files such as images from public directory
app.use(express.static("public"));

// Setting up Handlebars.js as the template engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Using routes from controller
app.use(routes);

// Syncing sequelize models with database and starting server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});