/*
  Warnings:

  - You are about to drop the column `isAvaliable` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `isAvaliable`,
    ADD COLUMN `isAvailable` BOOLEAN NOT NULL DEFAULT true;
  