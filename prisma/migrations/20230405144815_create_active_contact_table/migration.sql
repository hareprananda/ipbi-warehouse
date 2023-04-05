/*
  Warnings:

  - You are about to drop the column `isContact` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "isContact";

-- CreateTable
CREATE TABLE "ActiveContact" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ActiveContact_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ActiveContact" ADD CONSTRAINT "ActiveContact_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
