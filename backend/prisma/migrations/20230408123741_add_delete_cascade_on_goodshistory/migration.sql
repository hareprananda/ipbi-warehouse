-- DropForeignKey
ALTER TABLE "GoodsHistory" DROP CONSTRAINT "GoodsHistory_idGoods_fkey";

-- AddForeignKey
ALTER TABLE "GoodsHistory" ADD CONSTRAINT "GoodsHistory_idGoods_fkey" FOREIGN KEY ("idGoods") REFERENCES "Goods"("id") ON DELETE CASCADE ON UPDATE CASCADE;
