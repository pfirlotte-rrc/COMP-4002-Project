import prisma from "../../../../prisma/client";

export const getArticles = async () => {
  return await prisma.article.findMany({
    include: {
      ratings: {
        include: {
          user: true
        }
      },
      categories: true
    },
  });
};

export const rateArticle = async (articleId: number, userId: number, value: number) => {
  const existing = await prisma.rating.findFirst({
    where: { articleId, userId }
  });

  if (existing) throw new Error("User has already rated this article");

  return prisma.rating.create({
    data: { articleId, userId, value }
  });
};

export const incrementViewCount = async (articleId: number) => {
  return prisma.article.update({
    where: { id: articleId },
    data: { views: { increment: 1 } }
  });
};