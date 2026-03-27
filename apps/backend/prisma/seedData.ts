import { article } from "@prisma/client"

export const articleSeedData = [
  {
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
                create: [{ name: "Programming" }, { name: "TypeScript" }],
                },
            },
        ],
    },
  },
]