-- CreateTable
CREATE TABLE "Casa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "link" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "usuario" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ItemChurrasco" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "valor" REAL NOT NULL
);
