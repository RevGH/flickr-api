var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + $("#search").val() + '&jsoncallback=1';


// $.getJSON(flickerAPI, {
//     tags: $("#search").val(),
//     tagmode: "any",
//     format: "json"
// }).done(function (result, status, xhr) {
//     $.each(result.items, function (i, item) {
//         $("<img>").attr("src", item.media.m).appendTo("#outputDiv").addClass('image-flick');
//         if (i === 5) { 
//             return false;
//         }
//     });

// });

function JavaScriptFetch() {
    var script = document.createElement('script');
    script.src = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + document.getElementById("search").value;
    document.querySelector('head').appendChild(script);
    // $.getJSON(flickerAPI, {
    //     tags: $("#search").val(),
    //     tagmode: "any",
    //     format: "json"
    // }).done(function (result, status, xhr) {
    //     $.each(result.items, function (i, item) {
    //         $("<img>").attr("src", item.media.m).appendTo("#outputDiv").addClass('image-flick');
    //         if (i === 5) { 
    //             return false;
    //         }
    //     });
    
    // });
}
function jsonFlickrFeed(data) {
    var image = "";
    data.items.forEach(function (element) {
        image += "<img src=\"" + element.media.m + "\"/>";
    });
    document.getElementById("outputDiv").innerHTML = image;
}

// To make the search button work upon pressing enter: //

var input = document.getElementById("search");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {                     // Number 13 is the "Enter" key on the keyboard
    event.preventDefault();
    document.getElementById("submit").click();
  }
});