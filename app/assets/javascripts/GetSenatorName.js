// $(function() {
//   // requires cross origin resource sharing
//   var address = "48 Wall Street, Manhattan NY"
//   $.ajax({
//     url: 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAiRgU_ysVxPfbMqVQnOEeN4-aLW4OMEw4&address=' + address
//   })
//   .done(function(response) {
//     var lat = response.results[0].geometry.location.lat
//     var lng = response.results[0].geometry.location.lng
//   })
//
//   //Assemblyman
//   $.ajax({
//     url: "https://www.googleapis.com/fusiontables/v1/query?sql=SELECT%20DISTRICT%2C%20REP_NAME%2C%20REP_URL%2C%20POPULATION%20%20%20FROM%2017nwTkaJDQ5AyfTtnX96SeBzRNZRekwKeonIZHvw%20%20WHERE%20geometry%20not%20equal%20to%20%27%27%20AND%20ST_INTERSECTS(geometry%2C%20CIRCLE(LATLNG(40.7065668%2C%20-74.0090422)%2C1))&callback=MapsLib.displayListass&key=AIzaSyAHOjsb-JbuJn1lC6OzUNH-jlDT_KA_FwE&callback=jQuery1710929156077118652_1476403682128&_=1476403735798",
//     method: 'get'
//   })
//   .done(function(response) {
//   }).fail(function(response) {
//     var repInfo = response.responseText;
//     repInfo = $.parseJSON(repInfo.slice(39, -2));
//     repInfo = repInfo.rows[0];
//   });
//
//   //Congressman
//   $.ajax({
//     url: "https://www.googleapis.com/fusiontables/v1/query?sql=SELECT%20DISTRICT%2C%20REP_NAME%2C%20REP_URL%2C%20POPULATION%20%20%20FROM%201GFWTwdhLbQ8yprvFNe-XNkrm1Ik-vPFFynaxg3g%20%20WHERE%20geometry%20not%20equal%20to%20%27%27%20AND%20ST_INTERSECTS(geometry%2C%20CIRCLE(LATLNG(40.7065668%2C%20-74.00904220000001)%2C1))&callback=MapsLib.displayListcon&key=AIzaSyAHOjsb-JbuJn1lC6OzUNH-jlDT_KA_FwE&callback=jQuery17106865557795366708_1476457349225&_=1476457378114",
//     method: 'get'
//   })
//   .done(function(response) {
//   }).fail(function(response) {
//     var repInfo = response.responseText;
//     repInfo = $.parseJSON(repInfo.slice(39, -2));
//     repInfo = repInfo.rows[0];
//   });
//
//   //State Senate
//   $.ajax({
//     url: "https://www.googleapis.com/fusiontables/v1/query?sql=SELECT%20DISTRICT%2C%20REP_NAME%2C%20REP_URL%2C%20POPULATION%20%20%20FROM%201KfhMo_HSAp3kq5Yayca22HrIhEjJLa_c_s6jd2Q%20%20WHERE%20geometry%20not%20equal%20to%20%27%27%20AND%20ST_INTERSECTS(geometry%2C%20CIRCLE(LATLNG(40.7065668%2C%20-74.00904220000001)%2C1))&callback=MapsLib.displayListnysen&key=AIzaSyAHOjsb-JbuJn1lC6OzUNH-jlDT_KA_FwE&callback=jQuery17106865557795366708_1476457349224&_=1476457378113",
//     method: 'get'
//   })
//   .done(function(response) {
//   }).fail(function(response) {
//     var repInfo = response.responseText;
//     repInfo = $.parseJSON(repInfo.slice(41, -2));
//     repInfo = repInfo.rows[0];
//   });
//   //
//   // //-------------------------------------------------------------------------------------------------------------------
//   //
//   //
//   //
//   // //practice database calls
//   // //search by name and sponsored bills
//   $.ajax({
//     url: "http://legislation.nysenate.gov/api/3/bills/search?term=sponsor.member.fullName:%22Frank%20Skartados%22&key=042A2V22xkhJDsvE22rtOmKKpznUpl9Y&sort=year:DESC&limit=1000&full=true",
//     method: "GET"
//   })
//   .done(function(response) {
//     var summary = response.result.items[0].result.summary;
//     var sponsoredBillsIds = []
//     // for (i = 0; i < )
//   })
//
//   //search for a bill (by session year and ID)
//   $.ajax({
//     url: "http://legislation.nysenate.gov/api/3/bills/2015/J1567/?key=042A2V22xkhJDsvE22rtOmKKpznUpl9Y",
//     method: "GET"
//   })
//   .done(function(response) {
//
//     // var nayVotesCount = 0
//     // if (response.result.votes.items[0].memberVotes.items.NAY) {
//     //   nayVotesCount = response.result.votes.items[0].memberVotes.items.NAY.size
//     // }
//     // var ayeVotesCount = 0
//     // if (response.result.votes.items[0].memberVotes.items.AYE) {
//     //   ayeVotesCount = response.result.votes.items[0].memberVotes.items.AYE.size
//     // }
//   })
//
//   //find every bill they've voted on, then find whether they voted AYE or NAY
//
//   // find every bill in a given session with zero votes
//   $.ajax({
//     url: "http://legislation.nysenate.gov/api/3/bills/2013/search?term=votes.size:0&key=042A2V22xkhJDsvE22rtOmKKpznUpl9Y&limit=25&full=true",
//     method: "GET"
//   })
//   .done(function(response) {
//   })
//
//   // find every bill in a given year that's been voted on
//   $.ajax({
//     url: "http://legislation.nysenate.gov/api/3/bills/2015/search?term=votes.size:>0%20AND%20year:2016&key=042A2V22xkhJDsvE22rtOmKKpznUpl9Y&offset=1&limit=1000&full=true",
//     method: "GET"
//   })
//   .done(function(response) {
//     // bills w/ floor votes
//     var floorVotes = response.result.items.filter(bill => bill.result.votes.items.length === 2);
//     var closeFloorVotes = floorVotes.filter(bill => bill.result.votes.items[1].memberVotes.items.AYE && bill.result.votes.items[1].memberVotes.items.NAY);
//     var closerFloorVotes = closeFloorVotes.filter(bill => Math.abs((bill.result.votes.items[1].memberVotes.items.AYE.size) - (bill.result.votes.items[1].memberVotes.items.NAY.size)) < 20 )
//
//     var decision = "";
//     var senatorVotes = closerFloorVotes.map(bill => {
//       if (bill.result.votes.items[1].memberVotes.items.AYE.items.filter(senator => senator.fullName === "Kevin S. Parker").length > 0) {
//         return decision = "AYE"
//       } else {
//         return decision = "NAY"
//       };
//     })
//   })
//
//
//   //search for assembly votes
//   $.ajax({
//     url: "http://legislation.nysenate.gov/api/3/bills/search?term=sponsor.member.fullName:%22Frank%20Skartados%22&key=042A2V22xkhJDsvE22rtOmKKpznUpl9Y&sort=year:DESC",
//     method: "GET"
//   })
//   .done(function(response) {
//     var summary = response.result.items[0].result.summary;
//     var sponsoredBillsIds = []
//     // for (i = 0; i < )
//   })
// });
