# ArticleRepository

Location:
src/repositories/articleRateRepository.ts

What does this repository do?
ArticleRepository acts as the data access layer for articles.

It:
-Stores the in-memory list of articles.
-Retrieves all articles.
-Retrieves a specific article by ID.
-Updates an article.

Public Methods:
-getArticles()
-getArticleById(articleId: string)
-updateArticle(updatedArticle: Article)

Why was this logic placed here?
This repository exists to enforce separation of concerns:
Components should not manage raw data storage and services should not know how data is stored.

By isolating data operations:
We make it easier to replace in-memory storage with an API.
We prevent business rules from leaking into UI components.
We improve testability by mocking repository methods.

It is used by:
ArticleRatingService

# ArticleRatingService

Location:
src/services/ratingService.ts

What does this service do?
ArticleRatingService handles all rating-related business logic.

It:
-Allows users to rate an article.
-Prevents duplicate ratings from the same user.
-Calculates average rating.
-Checks if a user has already rated an article.

Public Methods:
-rateArticle(articleId, userId, rating)
-calculateAverageRating(ratings)
-hasUserRated(articleId, userId)

Why was this logic placed here?
This service exists to isolate business rules from both:
UI logic (React components)
Data access logic (Repository)

If rating logic changes (e.g., weighted ratings, rating limits), only this service needs modification.

It is used inside:
ArticlesContext

# ArticlesContext (Custom Hook / Provider)

Location:
src/context/ArticlesContext.tsx (or equivalent)

What does this hook/provider do?
ArticlesContext manages UI state and state synchronization.

It provides:
-Current list of articles
-Hidden articles
-View count updates
-Rating updates
-Average rating calculation
-Article visibility controls
-Adding new articles

Why was this logic placed here?
The context is responsible only for:
Managing React state
Triggering re-renders
Connecting UI interactions to services
Synchronizing repository updates with state

# Personal Involvement

I was responsible for making the services for rating and the repository for it as it was the main component of my personal page, which is the popular page. I also helped in making the articles context which handles all the logic in how the articles can be interacted with. In the article services I wanted to verify for future use, that if a user has rated it before they wouldn't be allowed to rerate it as that would mess with the data. It is to ensure when there is different users added to the mix, they shouldn't be allowed to rate an article more than once. As for the repository, this is where I seperate the article by the specific id and then update its rating based on which one was pressed in the website. As for the context/hook there was not much I did to it, I just seperated the rating components into its own service.
