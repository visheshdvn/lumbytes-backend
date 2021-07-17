module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: 'https://admin.lumbytes.com',
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "f23231c2c32fa42a5e136f93ad873fef"),
    },
  },
});
