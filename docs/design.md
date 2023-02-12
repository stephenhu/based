# design

blogs typically have the following:

+ menu
+ list of articles
+ single article view
+ footer
+ search
+ images (server side persistence)
+ comment system (server side persistence)
+ routing

* menu, search, footer are typically taken care of by the designer
* articles, all and single view needs some manipulation

## views

there are 2 types of views, only 1 view can be visible at a time.  there can be additional views allowed over time.

1. home page view which lists a shortened summary of each article, ordered by date, id should be `home`
1. article view shows a single article, id should be `articles`

the home page section shows a shortened view of each article, there can be paging or just a long list of all articles.


## registration

views need to be registered with based during page startup.

```
const based = new Based();

```
