const { CartUser, User } = require("../models");
const { generateToken } = require("../config/tokens");
const tokens = require("../config/tokens");

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(
  "336004849748-vtovunbqsc7lt3jnel0tqvjus3406cph.apps.googleusercontent.com"
);

// register
exports.register = (req, res) => {
  const userData = req.body;
  User.findOne({ where: { email: req.body.email } }).then((user) => {
    if (!user)
      User.create(userData).then((user) => {
        CartUser.create({
          userId: user.id,
        }).then(() => res.sendStatus(201));
      });
    else {
      res.send({ message: "Usuario ya registrado" });
    }
  });
};

// login
exports.login = (req, res) => {
  const { email, password } = req.body;

  console.log(email)
  console.log(password)

  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

      const payload = {
        id: user.id,
        email: user.email,
        name: user.name,
        lastname: user.lastname,
        state: user.state,
        city: user.city,
        address: user.address,
        zip: user.zip,
        phone: user.phone,
        admin: user.admin,
      };

      const token = generateToken(payload); //

      res.cookie("token", token);

      res.send(payload); //
    });
  });
};

//valida si hay un usuario logueado, pedido de validar token
exports.validation = (req, res) => {
  console.log(req.user);
  res.send(req.user);
};

// logout
exports.logout = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};

exports.googlelogin = (req, res) => {
  const { credential } = req.body;

  client
    .verifyIdToken({
      idToken: credential,
      audience:
        "336004849748-vtovunbqsc7lt3jnel0tqvjus3406cph.apps.googleusercontent.com",
    })
    .then((userInfo) => {
      const { email, given_name, family_name, jti } = userInfo.payload;

      let password = email + email;

      User.findOne({
        where: { email: email },
      }).then((user) => {
        if (!user) {
          return User.create({
            email: email,
            password: password,
            name: given_name,
            lastname: family_name,
            state: jti,
            city: jti,
            address: jti,
            zip: 123,
            phone: 123,
            admin: false
          }).then((user) => {
            user.validatePassword(password).then((isValid) => {
              if (!isValid) return res.send(401);

              const payload = {
                id: user.id,
                email: user.email,
                name: user.name,
                lastname: user.lastname,
                admin: user.admin
              };
              const token = tokens.generateToken(payload);
              res.cookie("token", token);
              res.sendStatus(201);
            });
          });
        }

        user.validatePassword(password).then((isValid) => {
          if (!isValid) return res.send(401);

          const payload = {
            id: user.id,
            email: user.email,
            name: user.name,
            lastname: user.lastname,
            admin: user.admin
          };
          const token = tokens.generateToken(payload);
          res.cookie("token", token);
          res.sendStatus(201);
        });
      });
    });
};
