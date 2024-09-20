/*
  Warnings:

  - You are about to drop the column `Instructor` on the `curso` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "profesor" (
    "id_profesor" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "linkedin" TEXT,
    "telefono" TEXT,
    "descripcion" TEXT
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_curso" (
    "id_curso" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duracion" TEXT NOT NULL,
    "imagen" TEXT,
    "id_profesor" INTEGER,
    CONSTRAINT "curso_id_profesor_fkey" FOREIGN KEY ("id_profesor") REFERENCES "profesor" ("id_profesor") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_curso" ("description", "duracion", "id_curso", "imagen", "nombre") SELECT "description", "duracion", "id_curso", "imagen", "nombre" FROM "curso";
DROP TABLE "curso";
ALTER TABLE "new_curso" RENAME TO "curso";
CREATE UNIQUE INDEX "curso_nombre_key" ON "curso"("nombre");
CREATE UNIQUE INDEX "curso_id_profesor_key" ON "curso"("id_profesor");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "profesor_email_key" ON "profesor"("email");
