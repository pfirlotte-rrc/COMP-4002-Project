import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

import { articleSeedData } from "./seedData";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// this method will add default values to the database
// IT WILL CLEAR THE DB WHEN INVOKED
// see https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
async function main() {
    // clear table
    await prisma.rating.deleteMany();
    await prisma.article.deleteMany();
    await prisma.user.deleteMany();
    await prisma.category.deleteMany();

    // insert terms to db
    const assignArticles = [];
    for (const article of articleSeedData) {
        const created = await prisma.article.create({ data: article });
        assignArticles.push(created);
    }

    console.log(`CREATED ARTICLES: ${assignArticles}`);
};

main()
.then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
.catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
}); 