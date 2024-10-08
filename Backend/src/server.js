const { json, urlencoded } = require("body-parser");
const openRoutes = require("./routes/openRoute");
const connect = require("./database/index");
const logger = require("./common/logger");
const routes = require("./routes/index");
const express = require("express");
const cors = require("cors");

const createServer = () => {
    const app = express();
    connect();
    app
        .use(logger)
        .use(json({ limit: '20mb' }))
        .use(urlencoded({ extended: true, limit: '20mb' }))
        .use(cors())
        .use("/api", routes)
        .use("/", openRoutes);

    return app;
};

module.exports = createServer;