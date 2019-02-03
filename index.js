var buildURL = function (base, fileType, extension) {
    return base + "." + fileType + "?id=" + extension;
}

$(".imgBtn").click(function () {
    var URL = buildURL("ProductDetail/index", "html", $(this).attr("id"));
    window.location.replace(URL);
})

$.getJSON("https://api.punkapi.com/v2/beers", function (data) {
    for (var i = 1; i < 13; i++) {
        var imgSrc = data[i - 1].image_url;
        $("#btn" + i).html("<img src=" + imgSrc + "></img>");
    }
});


$("#searchBtn").on("click", function(){

    var replaced = false;

    $.getJSON("https://api.punkapi.com/v2/beers", function (data) {
    var searchByName = $("#search").val();
    for(var i=0; i<25; i++) {
        var nameOfBeer = data[i].name;
        if(searchByName.toLowerCase() == nameOfBeer.toLowerCase()) {
            var URL = buildURL("ProductDetail/index", "html", data[i].id);
            replaced = true;
            window.location.replace(URL);
        }
    }
    if(!replaced) {
        alert("The name you entered is not part of our database. Try another beer.");
    }
    });
});
