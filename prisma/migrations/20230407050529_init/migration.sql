-- CreateEnum
CREATE TYPE "UserLevel" AS ENUM ('APPROVER', 'ADMIN');

-- CreateEnum
CREATE TYPE "RequestType" AS ENUM ('BORROW', 'TAKE');

-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('PENDING', 'REJECT', 'APPROVE');

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "level" "UserLevel" NOT NULL DEFAULT 'APPROVER',
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActiveContact" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ActiveContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Goods" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Goods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Requester" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "numberRequest" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Requester_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Request" (
    "id" TEXT NOT NULL,
    "idRequester" INTEGER NOT NULL,
    "takeDate" TIMESTAMP(3) NOT NULL,
    "returnDate" TIMESTAMP(3),
    "type" "RequestType" NOT NULL,
    "status" "RequestStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GoodsHistory" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "idRequest" TEXT,
    "idGoods" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "assignBy" INTEGER,

    CONSTRAINT "GoodsHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_uuid_key" ON "Users"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Users_phone_key" ON "Users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Goods_uuid_key" ON "Goods"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Requester_uuid_key" ON "Requester"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Requester_phone_key" ON "Requester"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "GoodsHistory_uuid_key" ON "GoodsHistory"("uuid");

-- AddForeignKey
ALTER TABLE "ActiveContact" ADD CONSTRAINT "ActiveContact_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_idRequester_fkey" FOREIGN KEY ("idRequester") REFERENCES "Requester"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GoodsHistory" ADD CONSTRAINT "GoodsHistory_idRequest_fkey" FOREIGN KEY ("idRequest") REFERENCES "Request"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GoodsHistory" ADD CONSTRAINT "GoodsHistory_idGoods_fkey" FOREIGN KEY ("idGoods") REFERENCES "Goods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GoodsHistory" ADD CONSTRAINT "GoodsHistory_assignBy_fkey" FOREIGN KEY ("assignBy") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
