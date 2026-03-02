import { listOfArticles } from "../apis/ArticleData";

export type HiddenArticle = string;
let hiddenArticles: HiddenArticle[] = [listOfArticles[0].Name];

export const HiddenArticlesRepository = {
  getHidden: (): HiddenArticle[] => [...hiddenArticles],

  addHidden: (articleName: HiddenArticle): void => {
    if (!hiddenArticles.includes(articleName)) {
      hiddenArticles.push(articleName);
    }
  },

  removeHidden: (articleName: HiddenArticle): void => {
    hiddenArticles = hiddenArticles.filter(name => name !== articleName);
  },
};