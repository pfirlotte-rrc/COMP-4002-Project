type Rating = {
  userId: number;
  value: number;
};

export type Article = {
  id: number;
  name: string;
  description: string;
  views: number;
  ratings: Rating[];
  categories?: { categoryName: string }[];
};