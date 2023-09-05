const prisma = require('../database/prismaService');

class StudentsRepository {
  findAll() {
    return prisma.student.findMany();
  }

  findByNM(id) {
    return prisma.student.findUnique({
      where: {
        id: parseInt(id),
      }
    })
  }

  create({ name, lastName, grade1, grade2, studentClass }) {
    return prisma.student.create({
      data: {
        name,
        lastName,
        grade1,
        grade2,
        studentClass
      }
    });
  }

  delete(id) {
    return prisma.student.delete({
      where: {
        id: parseInt(id),
      }
    })
  }
}

module.exports = new StudentsRepository();
