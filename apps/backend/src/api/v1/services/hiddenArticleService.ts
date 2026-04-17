import prisma from "../../../../prisma/client";

export const HiddenArticleService = {
  hideArticle: async (articleName: string) => {
    try {
      // Verify article exists.
      const article = await prisma.article.findFirst({
        where: { name: articleName }
      });

      if (!article) {
        throw new Error(`Article "${articleName}" not found`);
      }

      // Change this when Clerk Auth is implemented.
      const userId = 6;

      // Create a hidden article record.
      return await prisma.hiddenArticle.upsert({
        where: {
          articleId_userId: {
            articleId: article.id,
            userId: userId
          }
        },
        update: {},
        create: {
          articleId: article.id,
          userId: userId
        }
      });
    } catch (error) {
      console.error("Error in hideArticle service:", error);
      throw error;
    }
  },

  showArticle: async (articleName: string) => {
    try {
      const article = await prisma.article.findFirst({
        where: { name: articleName }
      });
    
      if (!article) {
        throw new Error(`Article "${articleName}" was not found`);
      }

      // Change this when Clerk Auth is implemented.
      const userId = 6;

      const existing = await prisma.hiddenArticle.findUnique({
        where: {
          articleId_userId: {
            articleId: article.id,
            userId: userId
          }
        }
      });

      if (!existing) {
        throw new Error(`Article "${articleName}" is not hidden`);
      }
        
      return await prisma.hiddenArticle.delete({
        where: {
          articleId_userId: {
            articleId: article.id,
            userId: userId
          }
        }
      });
    } catch (error) {
      console.error("Error in showArticle service:", error);
      throw error;
    }
  },

  getHiddenArticles: async () => {
    try {
      // Change this when Clerk Auth is implemented.
      const userId = 6;

      const hiddenArticles = await prisma.hiddenArticle.findMany({
        where: {
          userId: userId
        },
        include: {
          article: true
        }
      });
      return hiddenArticles.map(h => h.article.name);
    } catch (error) {
      console.error("Error in getHiddenArticles service:", error);
      throw error;
    }
  },

  isArticleHidden: async (articleName: string) => {
    try {
      const article = await prisma.article.findFirst({
        where: { name: articleName }
      });

      if (!article) {
        return false;
      }

      // Change this when Clerk Auth is implemented.
      const userId = 6;
      
      const hidden = await prisma.hiddenArticle.findUnique({
        where: {
          articleId_userId: {
            articleId: article.id,
            userId: userId
          }
        }
      });
      return !!hidden;
    } catch (error) {
      console.error("Error in isArticleHidden service:", error);
      throw error;
    }
  }
};