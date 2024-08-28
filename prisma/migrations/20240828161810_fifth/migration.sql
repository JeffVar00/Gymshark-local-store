/*
  Warnings:

  - You are about to drop the `ParentProduct` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ParentProduct" DROP CONSTRAINT "ParentProduct_categorySlug_fkey";

-- DropForeignKey
ALTER TABLE "ParentProduct" DROP CONSTRAINT "ParentProduct_subCategorySlug_fkey";

-- DropForeignKey
ALTER TABLE "SubProduct" DROP CONSTRAINT "SubProduct_parentProductSlug_fkey";

-- DropTable
DROP TABLE "ParentProduct";

-- DropTable
DROP TABLE "SubProduct";

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isNew" BOOLEAN NOT NULL DEFAULT false,
    "genre" TEXT,
    "appareance" TEXT NOT NULL,
    "imgs" TEXT[],
    "price" DECIMAL(65,30) NOT NULL,
    "sizesAvailable" TEXT[],
    "slug" TEXT NOT NULL,
    "categorySlug" TEXT NOT NULL,
    "subCategorySlug" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_code_key" ON "Product"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categorySlug_fkey" FOREIGN KEY ("categorySlug") REFERENCES "Category"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_subCategorySlug_fkey" FOREIGN KEY ("subCategorySlug") REFERENCES "SubCategory"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
