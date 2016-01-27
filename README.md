# Website Performance Optimization portfolio project

## Optimised PageScore for index.html

Using Gulp I was able to minify CSS, JS and images.

Required Packages:

1. css-nano - minify's CSS
2. Imagemin - minify's Images
3. Uglyfy - minify's Javascript

I also used inline styles to help improve page score.

Using Photoshop to reduce the image size of pizzeria.jpg to stop browser from changing image width and use the image natural width.

I also put the "async" keyword in specific render blocking JS script tags to help improve pagespeed.

Using font sans-serif to stop request to Google fonts

As of 27th Jan - 

[Web Page](http://engineerkunle.github.io/Udacity04/)

Mobile Score - 95/100

Desktop Score - 96/100


## Optimised Pizzza.html

Using Mamp server I was able to produce Average time to generate last 10 frame less than 1ms

1. Firstly I replaced all "querySelectors..." with more specific "getElementByID" or "getElementByClassName", this helps as it is not doing a search as more specific.

2. Removed any variables inside loops outside to enhance performance. i.e. var topScroll   = document.body.scrollTop; rather than having it inside the loop. 

3. Created phaseArray to store repeated 5 phase.

4. Reduce Number of Pizza's to 50 this really helped improve the performance of the page.

5. Also Cached the length of the items array due to the total number of pizzas on the page remains constant.





