/*
  Warnings:

  - You are about to drop the column `apellido` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `fecha_registro` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `telefono` on the `usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "usuario" DROP COLUMN "apellido",
DROP COLUMN "fecha_registro",
DROP COLUMN "nombre",
DROP COLUMN "telefono";
