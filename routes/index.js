const routeTest = require("./route");

const setupRoutes = (app) => {
  app.use("/route", routeTest);
};

module.exports = {
  setupRoutes,
};
