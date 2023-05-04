-- AlterTable
ALTER TABLE "Goods" ADD COLUMN     "isBorrowable" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isTakeable" BOOLEAN NOT NULL DEFAULT false;
