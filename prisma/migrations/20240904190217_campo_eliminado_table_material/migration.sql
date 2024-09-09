/*
  Warnings:

  - You are about to drop the column `cursoId` on the `material` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_material" (
    "id_material" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_seccion" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    CONSTRAINT "material_id_seccion_fkey" FOREIGN KEY ("id_seccion") REFERENCES "seccion" ("id_seccion") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_material" ("id_material", "id_seccion", "nombre", "tipo", "url") SELECT "id_material", "id_seccion", "nombre", "tipo", "url" FROM "material";
DROP TABLE "material";
ALTER TABLE "new_material" RENAME TO "material";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
