// Interface that enforces data integrity for any Articles being listed on the site.
export interface Article {
Name: string,
NewsArticle: string,
PublishDate: Date,
Description: string,
Rating: number,
Category: string,
Views: number
}

// Example data that will be used for demonstrating the Recent page functionality.
export const listOfArticles: Article[] = [
  {Name: "TypeScript Date Tutorials", 
    NewsArticle: "https://pythonguides.com/typescript-date/", 
    PublishDate: new Date(2026, 0, 27), 
    Description: "This article is a comprehensive tutorial explaining how to create, format, and manipulate dates using TypeScript's native Date object. It covers practical topics like time zones, custom formatting, and performing common operations, and also suggests libraries like date-fns for complex tasks.", 
    Rating: 4, 
    Category: "Programming",
    Views: 37},
  {Name: "I Switched From Windows 11 to Linux Mint. Here Are 7 Things It Does Way Better", 
    NewsArticle: "https://www.pcmag.com/opinions/i-switched-from-windows-11-to-linux-mint-7-things-it-does-way-better?test_uuid=04IpBmWGZleS0I0J3epvMrC&test_variant=B", 
    PublishDate: new Date(2026, 0, 28), 
    Description: "This article details a user's experience switching from Windows 11 to Linux Mint, highlighting seven key areas where Mint excels. It also frankly addresses the trade-offs, including a lack of mainstream software like Adobe Creative Cloud and Microsoft Office.", 
    Rating: 3, 
    Category: "Operating System",
    Views: 26},
  {Name: "Nationwide is deepening its use of cloud services with AWS", 
    NewsArticle: "https://www.cloudcomputing-news.net/news/nationwide-is-deepening-its-use-of-cloud-services-with-aws/", 
    PublishDate: new Date(2026, 0, 24), 
    Description: "Nationwide Building Society, a large UK financial institution, is expanding its existing cloud partnership with AWS. This move is part of a gradual, long-term strategy to consolidate more of its operational workloads on AWS to achieve greater flexibility, resilience, and improved customer and employee experiences.", 
    Rating: 4.5, 
    Category: "Cloud Computing",
    Views: 73}
]