/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    /* "RSS Feeds" test suite*/
    describe('RSS Feeds', function() {

        /* Test if the allFeeds variable has been defined
         * and if it is not empty.
         */
        it('are defined', function() {
          // The passing condition is the allFeeds array to be defined
          expect(allFeeds).toBeDefined();
          // The passing condition is the allFeeds array's length
          // not to be equal 0
          expect(allFeeds.length).not.toBe(0);
        });

        /* Test if each feed in the allFeeds object has a URL defined
         * and that the URL is not empty.
         */
         it('url defined', function() {
           // Looping through each feed in the allFeeds object
           for (feed of allFeeds) {
             // The passing condition is the url of each feed
             // to be defined
             expect(feed.url).toBeDefined();
             // The passing condition is the url's length of
             // each feed to be greater than 0.
             expect(feed.url.length).toBeGreaterThan(0);
           }
         });

        /* Test if each feed in the allFeeds object has a name
         * defined and that the name is not empty.
         */
         it('name defined', function() {
           // Looping through each feed in the allFeeds object
           for (feed of allFeeds) {
             // The passing condition is the name of each feed
             // to be defined
             expect(feed.name).toBeDefined();
             // The passing condition is the name's length of
             // each feed to be greater than 0.
             expect(feed.name.length).toBeGreaterThan(0);
           }
         });
    });

    /* "The menu" test suite */
    describe('The menu', function() {

        /* Test if the menu element is hidden by default. */
         it('menu hidden', function() {
           // The passing condition is the body to have a class
           // named "menu-hidden"
           expect(document.querySelector('body')).toHaveClass('menu-hidden');
         });

         /* Test if the menu changes visibility when the menu icon is
          * clicked, the first test to check the menu display when clicked
          * and the second test to check if it hide when clicked again.
          */
          it('menu toggle', function() {

            // Selecting the menu icon (the hamburger button)
            let menu = document.querySelector('.menu-icon-link');
            // simulate click event
            menu.click();
            // The passing condition is the body not to have a class
            // named "menu-hidden"
            expect(document.querySelector('body')).not.toHaveClass('menu-hidden');
            // simulate another click event
            menu.click();
            // The passing condition is the body to have a class
            // named "menu-hidden"
            expect(document.querySelector('body')).toHaveClass('menu-hidden');

          });
        });

    /* "Initial Entries" test suite */
    describe('Initial Entries', function() {

         beforeEach(function(done) {
           // load the first feed with its content and callback function
           // which is done() function
           loadFeed(0, done);
         });

        /* Test to check if there is a single .entry element
         * within the .feed container after calling
         * loadFeed function and completing its work.
         */
         it('feed entries has more than a single entry', function() {
           // Selecting all the entries of the first feed
           let feedItems = $('.feed .entry');
           // The passing condition is the feed entries to have
           // a length greater than 0
           expect(feedItems.length).toBeGreaterThan(0);
         });
       });

    /* "New Feed Selection" test suite */
    describe('New Feed Selection', function() {

        let firstFeed;
        let firstTitle;
        let lastFeed;
        let lastTitle;
        let feedFlag;

        beforeEach(function(done) {
          // load the first feed with its content and callback function
          // to load another feed which is the third feed and callback
          // function which is done() function
          loadFeed(0, function() {
            // save the feed title and content of the first feed
            firstFeed = document.querySelector('.feed').innerHTML;
            firstTitle = document.querySelector('.header-title').innerHTML;
            loadFeed(2, function() {
              // save the feed title and content of the third feed
              lastFeed = document.querySelector('.feed').innerHTML;
              lastTitle = document.querySelector('.header-title').innerHTML;
              done();
            });
          });
        });

        /* Test to check if the content of the feed changes after calling
         * loadFeed function with another feed id.
         */
         it('content changed after loading a new feed', function() {
           // check if any of the feed title and content of the first feed
           // is the same as the feed title and content of the third feed
           // and flag this situation to be true or false
           if(firstTitle === lastTitle || firstFeed === lastFeed){
             feedFlag = true;
           }
           else{
             feedFlag = false;
           }
           // The passing condition is the flag to be false
           expect(feedFlag).toBe(false);
         });
       });
}());
