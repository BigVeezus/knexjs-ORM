const db = require("../db/db");

class PersonDAO {
  async createPerson(firstName, lastName, email) {
    const [id] = await db("person")
      .insert({
        email,
        first_name: firstName,
        last_name: lastName,
      })
      .returning("id");

    return id;
  }

  async getPeople() {
    const result = await db("person").select("*").from("person");

    return result;
  }

  async updatePerson(firstName, lastName, email, id) {
    // console.log(id, email);
    const changedId = await db("person")
      .where({
        id: id,
      })
      .update({
        email,
        first_name: firstName,
        last_name: lastName,
      })
      .returning("id");

    return changedId;
  }

  async deletePerson(id) {
    await db("person")
      .where({
        id: id,
      })
      .del();
  }
}

module.exports = new PersonDAO();
