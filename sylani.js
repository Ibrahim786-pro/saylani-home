$(document).ready(function(){
  // Activate carousel
  $("#myCarousel").carousel();
  
  // Enable carousel control
  $(".carousel-control-prev").click(function(){
      $("#myCarousel").carousel('prev');
  });
  $(".carousel-control-next").click(function(){
      $("#myCarousel").carousel('next');
  });
  
  // Enable carousel indicators
  $(".slide-one").click(function(){
      $("#myCarousel").carousel(0);
  });
  $(".slide-two").click(function(){
      $("#myCarousel").carousel(1);
  });
  $(".slide-three").click(function(){
      $("#myCarousel").carousel(2);
  });
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("navbar").style.marginTop = "0px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.marginTop = "45px";
    document.getElementById("logo").style.fontSize = "35px";
  }
} 
    // // When the user scrolls down 20px from the top of the document, slide down the navbar
    // window.onscroll = function() {scrollFunction()};
    
    // function scrollFunction() {
    //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //     document.getElementById("a").style.top = "0";
    //   } else {
    //     document.getElementById("a").style.top = "-50px";
    //   }
    // }