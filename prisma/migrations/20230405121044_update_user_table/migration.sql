/*
  Warnings:

  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "GoodsHistory" DROP CONSTRAINT "GoodsHistory_assignBy_fkey";

-- AlterTable
ALTER TABLE "GoodsHistory" ALTER COLUMN "assignBy" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Users" DROP CONSTRAINT "Users_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Users_id_seq";

-- AddForeignKey
ALTER TABLE "GoodsHistory" ADD CONSTRAINT "GoodsHistory_assignBy_fkey" FOREIGN KEY ("assignBy") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
