/*
  Warnings:

  - You are about to drop the `Curso` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Material` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UserCourses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Curso";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Material";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_UserCourses";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "usuario" (
    "id_usuario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipoUser" TEXT DEFAULT 'estudiante',
    "usuario" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "fecha_registro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "curso" (
    "id_curso" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "Instructor" TEXT NOT NULL,
    "duracion" TEXT NOT NULL,
    "imagen" TEXT
);

-- CreateTable
CREATE TABLE "seccion" (
    "id_seccion" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_curso" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "fecha_inicio" DATETIME,
    "fecha_fin" DATETIME,
    CONSTRAINT "seccion_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "curso" ("id_curso") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "material" (
    "id_material" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_seccion" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "cursoId" INTEGER NOT NULL,
    CONSTRAINT "material_id_seccion_fkey" FOREIGN KEY ("id_seccion") REFERENCES "seccion" ("id_seccion") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "inscripcion" (
    "id_inscripcion" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_usuario" INTEGER NOT NULL,
    "id_curso" INTEGER NOT NULL,
    "fecha_inscripcion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "inscripcion_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario" ("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "inscripcion_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "curso" ("id_curso") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "curso_nombre_key" ON "curso"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "inscripcion_id_usuario_id_curso_key" ON "inscripcion"("id_usuario", "id_curso");
