# ArticleRepository

Location:
src/repositories/articleRateRepository.ts

What does this repository do?
This repository seperates the data from the original list, allowing the service to update the rates of the specific article without messing with the original data.

It:
-Retrieves list of articles.
-Retrieves article by specific ID.
-Update retrieved article.

Public Methods:
-getArticles()
-getArticleById(articleId: string)
-updateArticle(updatedArticle: Article)

It is used by:
ArticleRatingService

# ArticleRatingService

Location:
src/services/ratingService.ts

What does this service do?
This service handles the rating logic, allowing users to rate an article, calculate it and update the information.

It:
-Allows users to rate an article.
-Prevents duplicate ratings from the same user.
-Calculates average rating.
-Checks if a user has already rated an article.

Public Methods:
-rateArticle(articleId, userId, rating)
-calculateAverageRating(ratings)
-hasUserRated(articleId, userId)

It is used inside:
ArticlesContext

# ArticlesContext

Location:
src/context/ArticlesContext.tsx

What does this hook/provider do?
This handles all the article context, which is connected to the popular page and recent page, allowing for the pages to be connected and can use the components attached to this if so desired by the person.

It provides:
-Current list of articles
-Hidden articles
-View count updates
-Rating updates
-Average rating calculation
-Article visibility controls
-Adding new articles

# Personal Involvement

I was responsible for making the services for rating and the repository for it as it was the main component of my personal page, which is the popular page. I also helped in making the articles context which handles all the logic in how the articles can be interacted with. In the article services I wanted to verify for future use, that if a user has rated it before they wouldn't be allowed to rerate it as that would mess with the data. It is to ensure when there is different users added to the mix, they shouldn't be allowed to rate an article more than once. As for the repository, this is where I seperate the article by the specific id and then update its rating based on which one was pressed in the website. As for the context/hook there was not much I did to it, I just seperated the rating components into its own service.
