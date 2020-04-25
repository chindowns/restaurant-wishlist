// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-been-there").on("click", function(event) {
      var id = $(this).data("id");
      var wish = $(this).data("wish");
       console.log("beenThere on Update Click:  "+wish+"  ID:  "+id);
      
      var beenThereState= {};

      if (wish === true) { console.log('changing beenThere to false');
        wish = false
      } else {console.log('changing beenThere to true');
        wish = true}
      beenThereState = {
        beenThere: wish
      }
    
      // Send the PUT request.
      $.ajax("/api/list/"+id, {
        type: "PUT",
        data: beenThereState
      }).then(
        function() {
          console.log("changed beenThere to", wish);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log(event);
  
      var newRestaurant = {
        name: $("#restaurant").val().trim(),
        beenThere: $("[name=wish]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/list", {
        type: "POST",
        data: newRestaurant
      }).then(
        function() {
          console.log("created new restaurant");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".forget-restaurant").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/list/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("Removed the restaurant from memory", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });