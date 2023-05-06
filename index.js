const express = require("express");

const app = express();
const personService = require("./service/Person");

app.use(express.json());

app.post("/person", async (req, res) => {
  try {
    const id = await personService.createPerson(req.body);
    res.status(200).json(id);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      Error: "Something went wrong",
    });
  }
});

app.listen(7000, () => {
  console.log("Listening on 7000");
});
