/*
  Warnings:

  - You are about to drop the column `isNew` on the `SubProduct` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ParentProduct" ADD COLUMN     "isNew" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "SubProduct" DROP COLUMN "isNew";
