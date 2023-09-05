-- CreateEnum
CREATE TYPE "studentClass" AS ENUM ('TURMA_A', 'TURMA_B', 'TURMA_C', 'TURMA_D');

-- CreateTable
CREATE TABLE "students" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "grade1" DOUBLE PRECISION NOT NULL,
    "grade2" DOUBLE PRECISION NOT NULL,
    "studentClass" "studentClass" NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);
