-- DropForeignKey
ALTER TABLE "GoodsHistory" DROP CONSTRAINT "GoodsHistory_assignBy_fkey";

-- AlterTable
ALTER TABLE "GoodsHistory" ALTER COLUMN "assignBy" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "GoodsHistory" ADD CONSTRAINT "GoodsHistory_assignBy_fkey" FOREIGN KEY ("assignBy") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
