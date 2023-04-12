/*
  Warnings:

  - The `idRequest` column on the `GoodsHistory` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Request` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Request` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[uuid]` on the table `Request` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uuid` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "GoodsHistory" DROP CONSTRAINT "GoodsHistory_idRequest_fkey";

-- AlterTable
ALTER TABLE "GoodsHistory" DROP COLUMN "idRequest",
ADD COLUMN     "idRequest" BIGINT;

-- AlterTable
ALTER TABLE "Request" DROP CONSTRAINT "Request_pkey",
ADD COLUMN     "uuid" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" BIGSERIAL NOT NULL,
ADD CONSTRAINT "Request_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Request_uuid_key" ON "Request"("uuid");

-- AddForeignKey
ALTER TABLE "GoodsHistory" ADD CONSTRAINT "GoodsHistory_idRequest_fkey" FOREIGN KEY ("idRequest") REFERENCES "Request"("id") ON DELETE SET NULL ON UPDATE CASCADE;
