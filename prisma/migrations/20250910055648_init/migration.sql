-- CreateEnum
CREATE TYPE "public"."WorkType" AS ENUM ('REMOTE', 'HYBRID', 'ONSITE');

-- CreateEnum
CREATE TYPE "public"."EmploymentType" AS ENUM ('FULL_TIME', 'PART_TIME', 'CONTRACT', 'INTERN');

-- CreateTable
CREATE TABLE "public"."Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Tag" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Job" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "workType" "public"."WorkType" NOT NULL,
    "employmentType" "public"."EmploymentType" NOT NULL,
    "salaryMin" INTEGER,
    "salaryMax" INTEGER,
    "currency" TEXT,
    "description" TEXT NOT NULL,
    "responsibilities" TEXT,
    "qualifications" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "postedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deadline" TIMESTAMP(3),

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."JobTag" (
    "jobId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "JobTag_pkey" PRIMARY KEY ("jobId","tagId")
);

-- CreateTable
CREATE TABLE "public"."Application" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "applicantName" TEXT NOT NULL,
    "applicantEmail" TEXT NOT NULL,
    "resumeUrl" TEXT,
    "status" TEXT NOT NULL DEFAULT 'submitted',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Company_name_idx" ON "public"."Company"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_slug_key" ON "public"."Tag"("slug");

-- CreateIndex
CREATE INDEX "Job_companyId_idx" ON "public"."Job"("companyId");

-- CreateIndex
CREATE INDEX "Job_postedAt_idx" ON "public"."Job"("postedAt");

-- CreateIndex
CREATE INDEX "Job_workType_employmentType_idx" ON "public"."Job"("workType", "employmentType");

-- CreateIndex
CREATE INDEX "Application_jobId_createdAt_idx" ON "public"."Application"("jobId", "createdAt");

-- AddForeignKey
ALTER TABLE "public"."Job" ADD CONSTRAINT "Job_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "public"."Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."JobTag" ADD CONSTRAINT "JobTag_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "public"."Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."JobTag" ADD CONSTRAINT "JobTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "public"."Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Application" ADD CONSTRAINT "Application_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "public"."Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;
