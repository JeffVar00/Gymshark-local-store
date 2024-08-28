/*
  Warnings:

  - You are about to drop the `SubProducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SubProducts" DROP CONSTRAINT "SubProducts_parentProductSlug_fkey";

-- DropTable
DROP TABLE "SubProducts";

-- CreateTable
CREATE TABLE "SubProduct" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "imgs" TEXT[],
    "price" DECIMAL(65,30) NOT NULL,
    "isNew" BOOLEAN NOT NULL DEFAULT false,
    "sizesAvailable" TEXT[],
    "slug" TEXT NOT NULL,
    "parentProductSlug" TEXT NOT NULL,

    CONSTRAINT "SubProduct_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SubProduct_code_key" ON "SubProduct"("code");

-- CreateIndex
CREATE UNIQUE INDEX "SubProduct_slug_key" ON "SubProduct"("slug");

-- AddForeignKey
ALTER TABLE "SubProduct" ADD CONSTRAINT "SubProduct_parentProductSlug_fkey" FOREIGN KEY ("parentProductSlug") REFERENCES "ParentProduct"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
