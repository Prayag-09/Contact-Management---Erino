/*
  Warnings:

  - Made the column `phoneNumber` on table `Contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `company` on table `Contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `jobTitle` on table `Contact` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "phoneNumber" SET NOT NULL,
ALTER COLUMN "company" SET NOT NULL,
ALTER COLUMN "jobTitle" SET NOT NULL;
