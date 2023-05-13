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

app.post("/updatePerson/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    const parameters = { firstName, lastName, email, id };
    const result = await personService.updatePerson(parameters);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      Error: "Something went wrong",
    });
  }
});

app.delete("/person/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await personService.deletePerson(id);

    res.status(200).send("Student Deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send({
      Error: "Something went wrong",
    });
  }
});

app.get("/people", async (req, res) => {
  try {
    const results = await personService.getPeople();
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
  }
});

app.listen(7000, () => {
  console.log("Listening on 7000");
});
