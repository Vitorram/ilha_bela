/*
  Warnings:

  - You are about to drop the `ItemChurrasco` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ItemChurrasco";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Churrasco" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "valor" REAL NOT NULL
);
