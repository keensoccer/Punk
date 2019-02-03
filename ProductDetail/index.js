var regex = /[+-]?\d+(?:\.\d+)?/;
var URL = window.location;
var theQuery = URL.search;
var idX = -5;
idX = theQuery.match(regex);
var index = idX - 1;
var nextIndex = index+2;

$.getJSON("https://api.punkapi.com/v2/beers", function (data) {
    populateProductDetail(data[index]);
});


function populateProductDetail(productDetail) {
    var productName = productDetail.name;
    var imgSrc = productDetail.image_url;
    var desc = productDetail.description;
    var dateFirstBrewed = productDetail.first_brewed;
    var abv = "ABV: " + productDetail.abv;
    var ibu = "IBU: " + productDetail.ibu;
    var targetFg = "Target FG: " + productDetail.target_fg;
    var targetOg = "Target OG: " + productDetail.target_og;
    var ebc = "EBC: " + productDetail.ebc;
    var srm = "SRM: " + productDetail.srm;
    var ph = "PH: " + productDetail.ph;
    var foodPairings = "This beer goes well with: " + productDetail.food_pairing;


    var specs = [abv, ibu, targetFg, targetOg, ebc, srm, ph, foodPairings];
    var list = $("ul#specs");
    $("#name").html(productName);
    $("#img").attr("src", imgSrc);
    $("#desc").html(desc);
    $("#date").html("Date First Brewed: " + dateFirstBrewed);

    for(var i=0; i<specs.length; i++) {
        var li = $('<li/>')
            .addClass("specs")
            .appendTo(list)
            .text(specs[i]);
    }





}

$("#showSpecs").on("click", function () {
    if (document.getElementById("showSpecs").checked) {
        $("#specs").show();
    }
    else {
        $("#specs").hide();
    }
});


$("#goBack").on("click", function(){
    window.location.replace("../");
});

$("#prev").on("click", function(){
    if(index > 0) {
        window.location.replace("index.html?id=btn" + index);
    }  
});

$("#next").on("click", function(){
    if(index < 25) {
        window.location.replace("index.html?id=btn" + nextIndex);
    }
});