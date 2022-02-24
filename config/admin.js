module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9f2735423bc6afbf603f4506076a4b1a'),
  },
});
