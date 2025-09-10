/*
  Warnings:

  - The `status` column on the `Application` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "public"."ApplicationStatus" AS ENUM ('SUBMITTED', 'UNDER_REVIEW', 'SHORTLISTED', 'INTERVIEWING', 'OFFERED', 'HIRED', 'REJECTED', 'WITHDRAWN');

-- AlterTable
ALTER TABLE "public"."Application" DROP COLUMN "status",
ADD COLUMN     "status" "public"."ApplicationStatus" NOT NULL DEFAULT 'SUBMITTED';

-- CreateIndex
CREATE INDEX "Job_deadline_idx" ON "public"."Job"("deadline");
