import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// this method will add default values to the database
// IT WILL CLEAR THE DB WHEN INVOKED
// see https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
async function main() {
    // clear table
    await prisma.term.deleteMany();

    // insert terms to db
    const assignArticles = await prisma.post.create({
    data: {
        name: "TypeScript Date Tutorials", 
        newsArticle: "https://pythonguides.com/typescript-date/", 
        publishDate: new Date(2026, 0, 27), 
        description: "This article is a comprehensive tutorial explaining how to create, format, and manipulate dates using TypeScript's native Date object. It covers practical topics like time zones, custom formatting, and performing common operations, and also suggests libraries like date-fns for complex tasks.", 
        views: 37,
        ratings: {
        create: [
            {
            rating: {
                value: 2,
                user: {
                create: {
                    name: "User1",
                },
                },
            },
            },
            {
            rating: {
                value: 4,
                user: {
                create: {
                    name: "User2",
                },
                },
            },
            },
            {
            rating: {
                value: 4,
                user: {
                create: {
                    name: "User3",
                },
                },
            },
            },
            {
            rating: {
                value: 5,
                user: {
                create: {
                    name: "User5",
                },
                },
            },
            },
        ],
        },
        categories: {
        create: [
            {
            category: {
                create: [
                {
                    name: "Programming", "Typescript"
                }
                ],
            },
            },
        ],
        },
    }
});

    console.log(`CREATED TERMS: ${assignArticles}`);
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