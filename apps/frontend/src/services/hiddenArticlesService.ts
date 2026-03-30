const API_BASE_URL = "http://localhost:3000/api/v1";

export const HiddenArticlesService = {
  /**
   * Hides the article.
   */
  hideArticle: async (articleName: string): Promise<void> => {
    try {
      const response = await fetch(`${API_BASE_URL}/hidden/hide`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ articleName }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to hide article");
      }

    } catch (error) {
      console.error("Error hiding article:", error);
      throw error;
    }
  },

  /**
   * Show an article (remove from hidden).
   */
  showArticle: async (articleName: string): Promise<void> => {
    try {
      const response = await fetch(`${API_BASE_URL}/hidden/show`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ articleName }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to show article");
      }

    } catch (error) {
      console.error("Error showing article:", error);
      throw error;
    }
  },

  /**
   * Sends client request off to retrieve all hidden articles.
   */
  getHidden: async (): Promise<string[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/hidden`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch hidden articles");
      }
      
      const data = await response.json();
      return data.data || [];

    } catch (error) {
      console.error("Error fetching hidden articles:", error);
      return [];
    }
  },

  /**
   * Checks to see if the article is hidden.
   */
  checkHiddenStatus: async (articleName: string): Promise<boolean> => {
    try {
      const response = await fetch(`${API_BASE_URL}/hidden/check/${encodeURIComponent(articleName)}`);
      
      if (!response.ok) {
        throw new Error("Failed to check hidden status");
      }
      
      const data = await response.json();
      return data.data.isHidden;
    } catch (error) {
      console.error("Error checking hidden status:", error);
      return false;
    }
  }
};