/*
  Warnings:

  - You are about to drop the `TeamUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TeamUserReview` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TeamUserReview" DROP CONSTRAINT "TeamUserReview_teamUserId_fkey";

-- DropTable
DROP TABLE "TeamUser";

-- DropTable
DROP TABLE "TeamUserReview";

-- CreateTable
CREATE TABLE "TeamUsers" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "employeeSince" TIMESTAMP(3),
    "employeeInfo" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "hobbies" TEXT NOT NULL,
    "gender" "Gender" NOT NULL DEFAULT 'MALE',

    CONSTRAINT "TeamUsers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamUserReviews" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startCount" INTEGER NOT NULL DEFAULT 4,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "teamUserId" INTEGER NOT NULL,

    CONSTRAINT "TeamUserReviews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TeamUsers_username_key" ON "TeamUsers"("username");

-- AddForeignKey
ALTER TABLE "TeamUserReviews" ADD CONSTRAINT "TeamUserReviews_teamUserId_fkey" FOREIGN KEY ("teamUserId") REFERENCES "TeamUsers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
