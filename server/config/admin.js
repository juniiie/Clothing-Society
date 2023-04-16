module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "random-ass-string"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "random-ass-string"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT", "random-ass-string"),
    },
  },
});
