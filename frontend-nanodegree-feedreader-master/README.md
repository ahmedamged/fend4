# RSS feed reader
It uses the Google Feed Reader API to grab RSS feeds as JSON object we can make use of. It also uses the Handlebars templating library and jQuery

# Application Functionality

1. Creating feeds array which has multiple entries, each of them has a name and URL.

2. Initializing a function to start application and to be called just after The Google Feed Reader API is loaded asynchronously.

3. Creating a function that load feeds from JSON object which has been grabbed from the Google Feed Reader API. It takes two arguments, the first is the id of the feed that will be loaded, and the second is the call back function that ensures completing the asynchronous function correctly.

4. Calling the Initializing function from step 2, after The Google Feed Reader API is done loading.

5. Appending all feeds to the DOM after assigning an id to each feed.

6. Loading feed content based on which feed name or link has been clicked on.

7. Finally, changing the menu behavior to allow hiding and showing it after clicking on the menu icon (the hamburger button).

# Tests Suites

## RSS Feeds Test Suite

#### First Test
Checking if the `allFeeds` variable has been defined and if it is not empty.

* The passing condition is that the `allFeeds` array's length has not to be equal 0.

#### Second Test
Checking if each feed in the `allFeeds` object has a URL defined and that the URL is not empty.

* The passing condition is that the url of each feed has to be defined

#### Third Test
Test if each feed in the `allFeeds` object has a name defined and that the name is not empty.

* The passing condition is that the name of each feed has to be defined

## The menu Test Suite

#### First Test
Checking if the menu element is hidden by default.

* The passing condition is that the `body` element having a class named `menu-hidden`.

#### Second Test
Checking if the menu changes visibility when the menu icon is clicked, the first test to check the menu display when clicked and the second test to check if it hide when clicked again.

* The first passing condition is that the `body` element not having a class named `menu-hidden` after simulating a click to show the menu.
* The second passing condition is that the `body` element having a class named `menu-hidden` after simulating a click to hide the menu.

## Initial Entries Test Suite

#### First Test
Checking if there is a single `.entry` element within the `.feed` container after calling `loadFeed` function and completing its work.

* The passing condition is that the entries of any feed having a length greater than 0.

## New Feed Selection Test Suite

#### First Test
Checking if the content of the feed changes after calling `loadFeed` function with another feed id.

* The passing condition is that the comparison between the title and content of the different feeds must be different.


When you're all finished, write a `README` file detailing all steps required to successfully run the application. If you have added additional tests, provide documentation for what these future features are and what the tests are checking for.
