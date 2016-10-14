$(document).ready(function() {
  $('.timeline').find('div').hover(function() {
      console.log("we hovered into this yeee")
      $(this).append("<p id='extraThang'>SUPPP</p>")
      // debugger
  }, function() {
      console.log("we hovered outta this yo");
      $('#extraThang').remove()
  });
});
