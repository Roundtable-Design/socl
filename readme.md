## website
---

This repository holds the source code for SCL's (website)(https://schoolofcontemplativelife.com). We wrote it with React.



### Copy

1. `git clone https://bitbucket.org/socl/website.git`
2. `cd website`
3. `npm run build`
4. `npx serve -s build`
```



### Deploy

We've configured netlify to deploy after pushes to `final`.



### src/

* assets - media such as images and videos.
* components - React components used in multiple pages on the site.
* content - JSON files holding static content on the site. Prismic is used for dynamic content.
* helpers - helper functions.
* pages - components for individual pages.
* App.js - top level component for React.
* index.js - connects the App component to the DOM.
* theme.js - contains style preferences.

### public/

Public files such as index.html that are given to a user's browser.



### Authors

* James Brooks
* Kale Champagnie
* Gil Virgo
