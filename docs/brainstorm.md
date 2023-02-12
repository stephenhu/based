* use meta.json to define site structure, but meta.json is automatically generated, maybe use a config file in the source repository to generate the initial page structure?
* routing:
1. site.com/slash#hash


## workflow

* user defines a config file which describes the site and stores this to the repository
* static-action creates meta.json, index.html, and css file
* user can modify html/css, and add md files for content
* page is built entirely, but depending on the url, certain aspects are hidden

1.  index downloaded, placeholders added to page
1.  articles downloaded async
1.  as each article completes, callback to update the page contents
1.  


### options

1. based on url, load screen dynamically, for already loaded screens, there needs to be some deletion of nodes
1. other option is to have everything set, but hide views based on url

* index first downloaded, contains the order of the articles, 
* md files are downloaded asynchronously, when they're updated, the page data is loaded

`news` id contains a list of all the articles and brief summaries.  `articles` contains the full article as a single page

