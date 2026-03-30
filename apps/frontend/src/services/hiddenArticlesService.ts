import { HiddenArticlesRepository } from "../repositories/hiddenArticlesRepository";

export const HiddenArticlesService = {
  hideArticle: (articleName: string): void => {
    const hidden = HiddenArticlesRepository.getHidden();
    if (hidden.includes(articleName)) {
      throw new Error(`Article "${articleName}" is already hidden.`);
    }
    HiddenArticlesRepository.addHidden(articleName);
  },

  showArticle: (articleName: string): void => {
    const hidden = HiddenArticlesRepository.getHidden();
    if (!hidden.includes(articleName)) {
      throw new Error(`Article "${articleName}" is not hidden.`);
    }
    HiddenArticlesRepository.removeHidden(articleName);
  },

  getHidden: (): string[] => {
    return HiddenArticlesRepository.getHidden();
  },
};