-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubCategory" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "slug" TEXT NOT NULL,
    "categorySlug" TEXT NOT NULL,

    CONSTRAINT "SubCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParentProduct" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "banner" TEXT,
    "desc" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "categorySlug" TEXT NOT NULL,
    "subCategorySlug" TEXT NOT NULL,

    CONSTRAINT "ParentProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubProducts" (
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

    CONSTRAINT "SubProducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "products" JSONB[],
    "intent_id" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "SubCategory_slug_key" ON "SubCategory"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ParentProduct_slug_key" ON "ParentProduct"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "SubProducts_code_key" ON "SubProducts"("code");

-- CreateIndex
CREATE UNIQUE INDEX "SubProducts_slug_key" ON "SubProducts"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Order_intent_id_key" ON "Order"("intent_id");

-- AddForeignKey
ALTER TABLE "SubCategory" ADD CONSTRAINT "SubCategory_categorySlug_fkey" FOREIGN KEY ("categorySlug") REFERENCES "Category"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParentProduct" ADD CONSTRAINT "ParentProduct_categorySlug_fkey" FOREIGN KEY ("categorySlug") REFERENCES "Category"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParentProduct" ADD CONSTRAINT "ParentProduct_subCategorySlug_fkey" FOREIGN KEY ("subCategorySlug") REFERENCES "SubCategory"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubProducts" ADD CONSTRAINT "SubProducts_parentProductSlug_fkey" FOREIGN KEY ("parentProductSlug") REFERENCES "ParentProduct"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
