import prisma from "../../../../prisma/client";

export const getArticles = async () => {
  return await prisma.article.findMany({
    include: {
      ratings: {
        include: {
          user: true, 
        },
      },
      categories: true,
    },
  });
};

export const rateArticle = async (
  articleId: number,
  clerkUserId: string,
  value: number
) => {

  const userName = clerkUserId;

  let user = await prisma.user.findUnique({
    where: { userName },
  });

  if (!user) {
    user = await prisma.user.create({
      data: { userName },
    });
  }

  const existing = await prisma.rating.findFirst({
    where: {
      articleId,
      userId: user.userId,
    },
  });

  if (existing) {
    throw new Error("User has already rated this article");
  }

  return await prisma.rating.create({
    data: {
      articleId,
      userId: user.userId,
      value,
    },
  });
};

export const incrementViewCount = async (articleId: number) => {
  return await prisma.article.update({
    where: { id: articleId },
    data: {
      views: {
        increment: 1,
      },
    },
  });
};