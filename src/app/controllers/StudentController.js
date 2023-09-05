const StudentsRepository = require('../repositories/StudentsRepository');

class StudentController {
  async index(request, response) {
    const students = await StudentsRepository.findAll();
    response.json(students);
  }

  async show(request, response) {
    const { id } = request.params;
    const student = await StudentsRepository.findByNM(id);
    response.json(student);
  }

  async store(request, response) {
    const { name, lastName, grade1, grade2, studentClass } = request.body;

    const student = await StudentsRepository.create({
      name,
      lastName,
      grade1,
      grade2,
      studentClass
    });

    response.json(student);
  }

  async delete(request, response) {
    const { id } = request.params;

    await StudentsRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new StudentController();
