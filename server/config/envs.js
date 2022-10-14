module.exports = {
  NAME: "Auth",
  PORT: 8080,
  DB_HOST: "auth",
  SECRET: process.env.SECRET || "MILANESA",
};