$(function() {
  // requires cross origin resource sharing
  $.ajax({
    url: "https://www.nysenate.gov/find-my-senator?search=true&addr1=606+flatbush+ave&city=brooklyn&zip5=11225",
    method: 'get',
    dataType: 'text/html'
  })
  .done(function(response) {
  }).fail(function(response) {
    response = response.responseText
    var test = $.parseHTML(response)
    var name = $(response).find(".c-find-my-senator--senator-link").text();
    var fullName = name.replace("Create an account", "").trim()
    debugger;
  })

  $.ajax({
    url: "https://www.googleapis.com/fusiontables/v1/query?sql=SELECT%20DISTRICT%2C%20REP_NAME%2C%20REP_URL%2C%20POPULATION%20%20%20FROM%2017nwTkaJDQ5AyfTtnX96SeBzRNZRekwKeonIZHvw%20%20WHERE%20geometry%20not%20equal%20to%20%27%27%20AND%20ST_INTERSECTS(geometry%2C%20CIRCLE(LATLNG(41.513132%2C%20-73.972102)%2C1))&callback=MapsLib.displayListass&key=AIzaSyAHOjsb-JbuJn1lC6OzUNH-jlDT_KA_FwE&callback=jQuery1710929156077118652_1476403682128&_=1476403735798",
    method: 'get'
  })
  .done(function(response) {
  }).fail(function(response) {
    var repInfo = response.responseText;
    repInfo = $.parseJSON(repInfo.slice(39, -2));
    repInfo = repInfo.rows[0];
    debugger;
  });
});
