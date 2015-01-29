function getMovie(reqOMDB) {
  $.getJSON("http://www.omdbapi.com/?s=" + reqOMDB, function (data) {
    console.log(data);
    for (i = 0; i < data.Search.length; i++) {
      $(".mooviez").append("<p class='totes'>" + data.Search[i].Title + "</p>");
    }
  }); 
}

function listenForSubmit() {
  $("form").on("submit", function (event) {
    event.preventDefault();
    $(".mooviez").empty();
    var reqOMDB = event.target.movietitle.value;
    console.log("sending an API request to OMDB");
    getMovie(reqOMDB);
  });
}

$(document).ready(listenForSubmit);