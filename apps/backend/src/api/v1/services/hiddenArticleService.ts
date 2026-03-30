import prisma from "../../../../prisma/client"

export const HiddenArticleService = {
  /**
   * Hide an article by its name.
   */
  hideArticle: async (articleName: string) => {
    try {
      // Verify to see if the article first exists.
      const article = await prisma.article.findFirst({
        where: { name: articleName }
      });

      if (!article) {
        throw new Error(`Article "${articleName}" not found`);
      }

      // Transfers the article to the hidden table on the database (upsert to avoid duplicates).
      return await prisma.hiddenArticle.upsert({
        where: { articleName },
        // If the article is already hidden, the upsert function will not change anything.
        update: {}, 
        create: { articleName }
      });
    } catch (error) {
      console.error("Error in hideArticle service:", error);
      throw error;
    }
  },

  /**
   * Show article (removes from the hidden section).
   */
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

  /**
   * Get all hidden article names.
   */
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

  /**
   * Check if an article is hidden.
   */
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