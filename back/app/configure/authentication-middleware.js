const passport = require("passport");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../../db/models");

module.exports = (app) => {
  // CONECTANDO PASSPORT
  app.use(cookieParser());
  app.use(
    sessions({
      secret: "VeganLife",
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  // CONECTAR PASSPORT CON LAS SESSIONS CONFIGURADAS EN EXRESS
  passport.serializeUser((email, done) => done(null, email));
  passport.deserializeUser((email, done) =>
    User.findOne(email)
      .then((user) => done(null, user)) // req.user = user
      .catch(done)
  );

  // ESTRATEGIA DE AUTENTICACIÓN LOCAL
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, done) =>
      done(null, email)
    )
  );
};
