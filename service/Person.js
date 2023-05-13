const personDAO = require("../dao/Person");

class PersonService {
  createPerson(personDto) {
    const { firstName, lastName, email } = personDto;
    return personDAO.createPerson(firstName, lastName, email);
  }

  getPeople() {
    return personDAO.getPeople();
  }

  updatePerson(personDto) {
    // const { id } = req.params;
    const { firstName, lastName, email, id } = personDto;
    // console.log(personDto);
    return personDAO.updatePerson(firstName, lastName, email, id);
  }

  deletePerson(id) {
    return personDAO.deletePerson(id);
  }
}

module.exports = new PersonService();
