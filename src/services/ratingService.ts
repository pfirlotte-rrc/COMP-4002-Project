export const rateArticle = async (
  articleId: string,
  userId: string,
  rating: number
) => {
  const response = await fetch(`/api/articles/${articleId}/rate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, rating }),
  });

  if (!response.ok) {
    throw new Error("User has already rated this article");
  }

  return response.json();
};