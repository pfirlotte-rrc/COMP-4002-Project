import prisma from "../../../../prisma/client";

export const HiddenArticleService = {
  hideArticle: async (articleName: string, userId: string) => {
    try {
      // Verify article exists.
      const article = await prisma.article.findFirst({
        where: { name: articleName }
      });

      if (!article) {
        throw new Error(`Article "${articleName}" not found`);
      }

      // Create a hidden article record with the logged in User ID.
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

  showArticle: async (articleName: string, userId: string) => {
    try {
      const article = await prisma.article.findFirst({
        where: { name: articleName }
      });
    
      if (!article) {
        throw new Error(`Article "${articleName}" was not found`);
      }

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

  getHiddenArticles: async (userId: string) => {
    try {

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

  isArticleHidden: async (articleName: string, userId: string) => {
    try {
      const article = await prisma.article.findFirst({
        where: { name: articleName }
      });

      if (!article) {
        return false;
      }
      
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