-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuario" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "telefono" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Curso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "Instructor" TEXT NOT NULL,
    "duracion" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_UserCourses" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_UserCourses_A_fkey" FOREIGN KEY ("A") REFERENCES "Curso" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_UserCourses_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Curso_nombre_key" ON "Curso"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "_UserCourses_AB_unique" ON "_UserCourses"("A", "B");

-- CreateIndex
CREATE INDEX "_UserCourses_B_index" ON "_UserCourses"("B");
