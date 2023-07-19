var wordStates = document.querySelectorAll(".list-of-states li");
var svgStates = document.querySelectorAll("#hovers-group > *");

function removeAllOn() {
//   wordStates.forEach(function(el) {
//     el.classList.remove("active");
//   });
  svgStates.forEach(function(el) {
    el.classList.remove("active");
  });
}

function addOnFromList(el) {
  var stateCode = el.getAttribute("data-state");
  var svgState = document.querySelector(".floor-" + stateCode);
  el.classList.add("active");
  svgState.classList.add("active");
}

// function addOnFromState(el) {
//   var stateId = el.getAttribute("");
//   var wordState = document.querySelector("[data-state='" + stateId + "']");
//   el.classList.add("on");
//   wordState.classList.add("on");
// }

wordStates.forEach(function(el) {
  el.addEventListener("mouseenter", function() {
    addOnFromList(el);
  });
  el.addEventListener("mouseleave", function() {
     removeAllOn();
  });
  
  el.addEventListener("touchstart", function() {
    removeAllOn();
    addOnFromList(el);
  });
});

// svgStates.forEach(function(el) {
//   el.addEventListener("mouseenter", function() {
//     addOnFromState(el);
//   });
//   el.addEventListener("mouseleave", function() {
//      removeAllOn();
//   });
  
//   el.addEventListener("touchstart", function() {
//     removeAllOn();
//     addOnFromState(el);
//   });
// });

