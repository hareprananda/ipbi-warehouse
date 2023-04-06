/*
  Warnings:

  - You are about to drop the column `receiveDate` on the `Request` table. All the data in the column will be lost.
  - Added the required column `takeDate` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Request" DROP COLUMN "receiveDate",
ADD COLUMN     "takeDate" TIMESTAMP(3) NOT NULL;
