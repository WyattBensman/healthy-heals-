const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Setup session middleware
const setupSession = (sequelize, SequelizeStore) => {
  const sess = {
    secret: "Super secret secret",
    cookie: {
      maxAge: 300000,
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

  return session(sess);
};

module.exports = setupSession;
