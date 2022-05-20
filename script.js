 $(document).ready(function(){
  $("a").click(function(){
    //$(".link-bar-box").children().addClass("link-bar hvr-fade");
   //$(this).addClass("clicked");
    //$(".link-bar-box").children().addClass("normal hvr-fade:hover hvr-fade:focus");
    //$(this).css({"background-color": "#b3baeb","color":"white"});
    //$(this).addClass("clicked");
    if ($(this).text() == '') {
      $(".content-box").load("HOME.html");
    } else if ($(this).text() == 'PEOPLE\'S PICK'){
      $(".content-box").load("PEOPLESPICK.html");
    } else if ($(this).text() == 'POP CULTURE'){
      $(".content-box").load("POPCULTURE.html");
    } else if ($(this).text() == 'VISUAL ARTS'){
      $(".content-box").load("VISUALARTS.html");
    } else {
      $(".content-box").load($(this).text() + ".html");
    }
  })

  $(".lastslide").click(function(){
    //$(".link-bar-box").children().addClass("link-bar hvr-fade");
   //$(this).addClass("clicked");
    //$(".link-bar-box").children().addClass("normal hvr-fade:hover hvr-fade:focus");
    //$(this).css({"background-color": "#b3baeb","color":"white"});
    //$(this).addClass("clicked");
    $(".content-box").load("ARTICLES.html");
  }             
  );


  // Initialize and add the map
  function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }


   
   // slideshow
  

  // flipbook
   // References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 5;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-240%)";
    nextBtn.style.transform = "translateX(240%)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
  if(currentLocation < maxLocation) {
    switch(currentLocation) {
      case 1:
        openBook();
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
        break;
      case 2:
        paper2.classList.add("flipped");
        paper2.style.zIndex = 2;
        break;
      case 3:
        paper3.classList.add("flipped");
        paper3.style.zIndex = 3;
        break;
      case 4:
        paper4.classList.add("flipped");
        paper4.style.zIndex = 4;
        break;
      case 5:
        paper5.classList.add("flipped");
        paper5.style.zIndex = 5;
        closeBook(false);
        break;
      default:
        throw new Error("unkown state");
    }
    currentLocation++;
  }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 5;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 4;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 3;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 2;
                break;
            case 6:
                openBook();
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}
 }
);

