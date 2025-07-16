const express = require("express");
const server = express();
server.use(express.json());
let customers = [
  { id: 1, name: "user1" },
  { id: 2, name: "user2" },
  { id: 3, name: "user3" },
];

server.get("/customers", (req, res) => {
  return res.json(customers);
});

server.get("/customers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const customer = customers.find((item) => item.id === id);
  const status = customer ? 200 : 404;
  return res.status(status).json(customer);
});

server.post("/customers", (req, res) => {
  const {name} = req.body;
  const id = customers[customers.length - 1].id + 1;
  const newCostumer = { id, name };
  customers.push(newCostumer);
  return res.status(201).json(newCostumer);
});
server.listen(3000);
