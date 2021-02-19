import app from "./bin";
import mongoose from "mongoose";
import config from "./config";
import consola from "consola";

import http from "http";
let server;

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  consola.success("Connected to MongoDB");
  http.createServer(app).listen(config.port, () => {
    consola.success(`Listening to port ${config.port}`);
  });
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      consola.info("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  consola.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  consola.info("SIGTERM received");
  if (server) {
    server.close();
  }
});
