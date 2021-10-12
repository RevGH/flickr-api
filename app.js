var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + $("#search").val();
$.ajax({
url: flickerAPI,
dataType: "jsonp", // jsonp
jsonpCallback: 'jsonFlickrFeed', // add this property
success: function (result, status, xhr) {
$.each(result.items, function (i, item) {
$("<img>").attr("src", item.media.m).appendTo("#outputDiv");
if (i === 5) {
return false;
}
});
},
error: function (xhr, status, error) {
console.log(xhr)
$("#outputDiv").html("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
}
});

var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=";
$.getJSON(flickerAPI, {
tags: $("#search").val(),
tagmode: "any",
format: "json"
}).done(function (result, status, xhr) {
$.each(result.items, function (i, item) {
$("<img>").attr("src", item.media.m).appendTo("#outputDiv");
if (i === 5) {
return false;
}
});
}).fail(function (xhr, status, error) {
alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
});

function JavaScriptFetch() {
    var script = document.createElement('script');
    script.src = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + document.getElementById("search").value;;
    document.querySelector('head').appendChild(script);
    }
    function jsonFlickrFeed(data) {
    var image = "";
    data.items.forEach(function (element) {
    image += "<img src=\"" + element.media.m + "\"/>";
    });
    document.getElementById("outputDiv").innerHTML = image;
    }