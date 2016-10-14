$(document).ready(function() {
  $('.timeline').find('div').hover(function() {
      console.log("we hovered into this biotch")
      $(this).append("<p id='extraThang'>SUPPP</p>")
      // debugger
  }, function() {
      console.log("we hovered outta this biotch");
      $('#extraThang').remove()
  });
});
