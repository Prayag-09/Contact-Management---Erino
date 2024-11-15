/*
  Warnings:

  - You are about to drop the column `firstName` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Contact` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Contact_username_key" ON "Contact"("username");
