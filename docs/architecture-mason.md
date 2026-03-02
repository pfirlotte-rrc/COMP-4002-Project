# Hook
## What does this hook do?
### the useArticle Hook calls the ArticleContext file using the ArticleProvider as a reference to display the Articles that are located inside of the APIs file.

## How did you decide what logic to include in that implementation, and how does that correctly separate solution concerns?
### Although I did not make the specific hook, I did contribute to the ArticelContext file by adding the show/hide functions and also the addArticle function so users can upload news articles to rate.
### Since I wanted the hiding/showing and new articles being uploaded to be viewable within the same session I had to at first create functionality to move the articles to a different area of the site, and the uplaoded articles to be modifying the current in-state articles.

## Where is this implementation made use of in the project and how?
### In the Recent page, it is being used to present all the articles that the users can view and also shows the user the functionality of hiding articles you don't want to see and making them visible again if you want to read it.

# Service
## What does this service do?
### The hiddenArticleService file handles the business logic that allows for calls to the repository to be valid, and handles errors appropiately when something goes wrong.

## How did you decide what logic to include in that implementation, and how does that correctly separate solution concerns?
### Since the Repository relied on getting the Articles name only, I had to only focus on business rules that only affects the name of the article, like if it was already in the hidden category, if if it excists, etc.

## Where is this implementation made use of in the project and how?
### It is being used by ArticleContext to call the repository to fetch the hidden articles that are currently inside of it and show all hidden articles by calling one of the 3 functions, hideArticle, showArticle, and getHidden.

# Repository
## What does repository do?
### The hiddenArticlesRepository grabs any of the Article Data that is currently being hidden by the user, and returns the articles hidden. It can also add and remove Articles from the section when called by the Service.

## How did you decide what logic to include in that implementation, and how does that correctly separate solution concerns?
### It was simply, considering all the CRUD operations that are absolutely necessary is viewing the current amount of articles in it, adding articles to it, and removing articles from it. Update is unecessary in this iteration.

## Where is this implementation made use of in the project and how?
### The repository is being used by the hiddenArticleService by calling one of the 3 seperate functions which are getHidden. addHiden, and removeHidden.