-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "rate" INTEGER NOT NULL DEFAULT 4,
    "category" TEXT NOT NULL,
    "image" TEXT DEFAULT '',
    "email" TEXT DEFAULT '',
    "mc" TEXT DEFAULT '',
    "us_dot" TEXT DEFAULT '',
    "location" TEXT DEFAULT '',
    "address" TEXT DEFAULT '',
    "body" TEXT NOT NULL,
    "keywords" TEXT DEFAULT 'auto transport company, car shipping company, car shipping companies, companies that ship cars, auto transport companies, car transport companies, best car shipping company, best company to ship a car, car moving companies, car hauling companies, auto shipping companies, vehicle transport company, vehicle transportation company, safeeds, safeeds transport, safeeds transport inc, vehicle shipping, new york auto shipping',
    "metaTitle" TEXT DEFAULT '',
    "metaDescription" TEXT DEFAULT '',
    "slug" TEXT DEFAULT '',

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);
