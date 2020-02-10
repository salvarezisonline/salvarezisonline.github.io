/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

//console.log("JavaScript is amazing!");

const title = document.querySelector('.shadowmove')

$(".shadowmove").hover(function(){
  $(".navdec").toggleClass("hover");
  console.log("stars were hovered");
});

// shadow
title.onmousemove = function(e) {
  let x = e.pageX - window.innerWidth/2;
  let y = e.pageY - window.innerHeight/2;

  let rad = Math.atan2(y, x).toFixed(2); 
  let length = Math.round(Math.sqrt((Math.pow(x,2))+(Math.pow(y,2)))/10); 

  let x_shadow = (Math.round(length * Math.cos(rad)))/12;
  let y_shadow = (Math.round(length * Math.sin(rad)))/12;

  title.style.setProperty('--x-shadow', - x_shadow + 'px')
  title.style.setProperty('--y-shadow', - y_shadow + 'px')

}


