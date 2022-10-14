const { CartItem } = require("../models");
const User = require("../models/User");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const accountTransport = require("../config/account_transport.json");

const oauth2Client = new OAuth2(
  accountTransport.auth.clientId,
  accountTransport.auth.clientSecret,
  "https://developers.google.com/oauthplayground"
);
oauth2Client.setCredentials({
  refresh_token: accountTransport.auth.refreshToken,
});

async function sendMail(id) {
  try {
    const user2 = await User.findOne({ where: { id: id } }); //ver como buscar el usuario
    const accessToken = await oauth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "olympicsportsp5@gmail.com",
        clientId: accountTransport.auth.clientId,
        clientSecret: accountTransport.auth.clientSecret,
        refreshToken: accountTransport.auth.refreshToken,
        accessToken: accessToken,
      },
    });
    const mailOptions = {
      from: "olympicsportsp5@gmail.com",
      to: `${user2.dataValues.email}`,
      subject: "Compra OlympicSports",
      text: "Muchas gracias por tu compra! Esperamos que vuelvas",
      html: "<h1>Muchas gracias por tu compra! Esperamos que vuelvas<h1>",
    };
    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

exports.getCheckout = (req, res) => {
  const { userId } = req.body;
  User.findOne({
    where: {
      id: userId,
    },
  }).then((user) => res.status(204).send(user));
};

exports.deleteCheckout = (req, res) => {
  const { id } = req.user;
  CartItem.destroy({
    where: {
      userId: id,
    },
  })
    .then(() =>
      sendMail(id).then((result) => console.log("Email sent....", result))
    )
    .then(() => res.sendStatus(204))
    .catch((error) => {
      console.log("Error to delete item", error);
    });
};
