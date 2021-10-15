// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------ Connects to the API & fetches, then outputs images ------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Callback connected to #search
var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + $("#search").val() + '&jsoncallback=1';      // Flickr public 'uploads from everyone'

// Fetch //
function JavaScriptFetch() {                                                                                                                
    var script = document.createElement('script');
    script.src = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + document.getElementById("search").value;
    document.querySelector('head').appendChild(script);
}

// Output
function jsonFlickrFeed(data) {                                                                                                            
    var image = "";
    data.items.forEach(function (element) {
        image += "<img src=\"" + element.media.m + "\"/>";
    });
    document.getElementById("outPutDiv").innerHTML = image;           // outPutDiv = image
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------  Keyboard inputs ----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Connects the search button to 'ENTER' on your keyboard
var input = document.getElementById("search");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {                      // Number 13 = 'ENTER' key on the keyboard
    event.preventDefault();
    document.getElementById("submit").click();
  }
});

