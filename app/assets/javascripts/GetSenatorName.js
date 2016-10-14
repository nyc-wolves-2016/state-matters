$(function() {
  // requires cross origin resource sharing
  var address = "48 Wall Street, Manhattan NY"
  $.ajax({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAiRgU_ysVxPfbMqVQnOEeN4-aLW4OMEw4&address=' + address
  })
  .done(function(response) {
    var lat = response.results[0].geometry.location.lat
    var lng = response.results[0].geometry.location.lng
    debugger;
  })



  // $.ajax({
  //   url: "https://www.nysenate.gov/find-my-senator?search=true&addr1=606+flatbush+ave&city=brooklyn&zip5=11225",
  //   method: 'get',
  //   dataType: 'text/html'
  // })
  // .done(function(response) {
  // }).fail(function(response) {
  //   response = response.responseText
  //   var test = $.parseHTML(response)
  //   var name = $(response).find(".c-find-my-senator--senator-link").text();
  //   var fullName = name.replace("Create an account", "").trim()
  // })

  //Assemblyman
  $.ajax({
    url: "https://www.googleapis.com/fusiontables/v1/query?sql=SELECT%20DISTRICT%2C%20REP_NAME%2C%20REP_URL%2C%20POPULATION%20%20%20FROM%2017nwTkaJDQ5AyfTtnX96SeBzRNZRekwKeonIZHvw%20%20WHERE%20geometry%20not%20equal%20to%20%27%27%20AND%20ST_INTERSECTS(geometry%2C%20CIRCLE(LATLNG(40.7065668%2C%20-74.0090422)%2C1))&callback=MapsLib.displayListass&key=AIzaSyAHOjsb-JbuJn1lC6OzUNH-jlDT_KA_FwE&callback=jQuery1710929156077118652_1476403682128&_=1476403735798",
    method: 'get'
  })
  .done(function(response) {
  }).fail(function(response) {
    var repInfo = response.responseText;
    repInfo = $.parseJSON(repInfo.slice(39, -2));
    repInfo = repInfo.rows[0];
  });

  //Congressman
  $.ajax({
    url: "https://www.googleapis.com/fusiontables/v1/query?sql=SELECT%20DISTRICT%2C%20REP_NAME%2C%20REP_URL%2C%20POPULATION%20%20%20FROM%201GFWTwdhLbQ8yprvFNe-XNkrm1Ik-vPFFynaxg3g%20%20WHERE%20geometry%20not%20equal%20to%20%27%27%20AND%20ST_INTERSECTS(geometry%2C%20CIRCLE(LATLNG(40.7065668%2C%20-74.00904220000001)%2C1))&callback=MapsLib.displayListcon&key=AIzaSyAHOjsb-JbuJn1lC6OzUNH-jlDT_KA_FwE&callback=jQuery17106865557795366708_1476457349225&_=1476457378114",
    method: 'get'
  })
  .done(function(response) {
  }).fail(function(response) {
    var repInfo = response.responseText;
    repInfo = $.parseJSON(repInfo.slice(39, -2));
    repInfo = repInfo.rows[0];
  });

  //State Senate
  $.ajax({
    url: "https://www.googleapis.com/fusiontables/v1/query?sql=SELECT%20DISTRICT%2C%20REP_NAME%2C%20REP_URL%2C%20POPULATION%20%20%20FROM%201KfhMo_HSAp3kq5Yayca22HrIhEjJLa_c_s6jd2Q%20%20WHERE%20geometry%20not%20equal%20to%20%27%27%20AND%20ST_INTERSECTS(geometry%2C%20CIRCLE(LATLNG(40.7065668%2C%20-74.00904220000001)%2C1))&callback=MapsLib.displayListnysen&key=AIzaSyAHOjsb-JbuJn1lC6OzUNH-jlDT_KA_FwE&callback=jQuery17106865557795366708_1476457349224&_=1476457378113",
    method: 'get'
  })
  .done(function(response) {
  }).fail(function(response) {
    var repInfo = response.responseText;
    repInfo = $.parseJSON(repInfo.slice(41, -2));
    repInfo = repInfo.rows[0];
    debugger;
  });
});
