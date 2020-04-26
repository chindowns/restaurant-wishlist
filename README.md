# Restaurant Wishlist
![Site](https://img.shields.io/github/manifest-json/v/chindowns/restaurant-wishlist)  
App creates a restaurant wish list checking off the restaurants that you have eaten at. Checking the restaurants that you would go to again and removing the restaurants you don't want to visit while keeping them in the database as an unliked restaurant.  This is fully deployed Full Stack application utilizing JavaScript generated DOM with Handlebars.

## Image and Use
Add restaurants you want to visit.  Add restaurants you have visited.
![Site](public/assets/images/Dining-Wishlist.gif)

## Technologies
- HTML5
- CSS / Bootstrap
- JavaScript & jQuery
- API Routes
- MySql
- Nodejs
- Express
- Express Handlebars
- Sequelize

## Code Snippet
This is a simple True/False switch

```
    $(".change-been-there").on("click", function(event) {
      var id = $(this).data("id");
      var wish = $(this).data("wish");
      
      var beenThereState= {};

      if (wish === true) { 
        wish = false
      } else {
        wish = true
      }
      beenThereState = {
        beenThere: wish
      }
    
      // Send the PUT request.
      $.ajax("/api/list/"+id, {
        type: "PUT",
        data: beenThereState
      }).then(
        function() {
          location.reload();
```

## Author
#### Michael Downs
[LinkedIn](http://www.linkedin.com/in/michaeldownssj)
[GitHub](https://chindowns.github.io/)
