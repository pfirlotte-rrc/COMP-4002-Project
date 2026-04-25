type Rating = {
  userId: number;
  value: number;
};

export type Article = {
  id: number;
  name: string;
  newsArticle: string;
  publishDate: Date;
  description: string;
  views: number;
  ratings: Rating[];
  categories?: { categoryName: string }[];
};