/*
  Warnings:

  - Added the required column `colors` to the `Shoe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Shoe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shoe" ADD COLUMN     "colors" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL;
