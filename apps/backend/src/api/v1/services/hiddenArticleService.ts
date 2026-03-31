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

      // Create a hidden article record.
      return await prisma.hiddenArticle.upsert({
        where: { articleName },
        update: {},
        create: { articleName }
      });
    } catch (error) {
      console.error("Error in hideArticle service:", error);
      throw error;
    }
  },

  showArticle: async (articleName: string) => {
    try {
      const existing = await prisma.hiddenArticle.findUnique({
        where: { articleName }
      });
    
      if (!existing) {
        throw new Error(`Article "${articleName}" is not hidden`);
      }
        
      return await prisma.hiddenArticle.delete({
        where: { articleName }
      });
    } catch (error) {
      console.error("Error in showArticle service:", error);
      throw error;
    }
  },

  getHiddenArticles: async () => {
    try {
      const hiddenArticles = await prisma.hiddenArticle.findMany({
        select: { articleName: true }
      });
      return hiddenArticles.map(h => h.articleName);
    } catch (error) {
      console.error("Error in getHiddenArticles service:", error);
      throw error;
    }
  },

  isArticleHidden: async (articleName: string) => {
    try {
      const hidden = await prisma.hiddenArticle.findUnique({
        where: { articleName }
      });
      return !!hidden;
    } catch (error) {
      console.error("Error in isArticleHidden service:", error);
      throw error;
    }
  }
};