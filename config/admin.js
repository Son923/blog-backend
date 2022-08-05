module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '394cc5ae4ac19bc46a132ca4281acba6'),
  },
});
