import express from "express";

const app = express();

const port = 5000;

const start = async () => {
  const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  return server;
};

start();
