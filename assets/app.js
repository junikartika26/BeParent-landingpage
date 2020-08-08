var header = document.getElementById("myList");
  var items = header.getElementsByClassName("item");
    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
              if (current.length > 0) { 
                  current[0].className = current[0].className.replace(" active", "");
              }
          this.className += " active";
        });
    }