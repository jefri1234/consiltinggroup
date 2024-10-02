-- CreateTable
CREATE TABLE "UserRegistrados" (
    "id_user" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "UserRegistrados_pkey" PRIMARY KEY ("id_user")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserRegistrados_email_key" ON "UserRegistrados"("email");
