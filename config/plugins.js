module.exports = ({ env }) => ({
    "vercel-deploy": {
        enabled: true,
        config: {
            deployHook:
              "https://api.vercel.com/v1/integrations/deploy/prj_mPaYsrezmNSxX4l8xUT4ozZL42p2/BuD7V2jdQs",
            apiToken: "w4181D2naDqfUV7VaaTEUptJ",
            appFilter: "latte-blog",
            teamFilter: "son923",
            roles: ["strapi-super-admin"],
          },
    },
});