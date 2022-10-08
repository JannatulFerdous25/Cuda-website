 $(document).ready(function() {

   $(".js-service").waypoint(function(direction) {
     if (direction == "down") {
       $("nav").addClass("sticky");
     } else {
       $("nav").removeClass("sticky");
     }
   });
   //Active link
   $("nav ul li a").click(function() {
     $("nav ul li a").removeClass("active");
     $(this).addClass("active");
   });
   $("nav a img.logo").click(function() {
     $("nav ul li a").removeClass("active");
     $("nav ul li:first-child a").addClass('active');
   });


   //mixitup portfolio section

   var mixer = mixitup('.port');

   var mixer = mixitup(containerEl);
   var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});

   //Smooth scroll for IE/EDGE/SAFARI
   $("a").on('click', function(event) {
     if (this.hash !== "") {
       event.preventDefault();

       var hash = this.hash;

       $('html,body').animate({
         scrollTop: $(hash).offset().top
       }, 900, function() {
         window.location.hash = hash;
       });

     }

   });

 });

 //Mobile menu
 function openNav() {
   document.getElementById("myNav").style.width = "100%";
 }

 function closeNav() {
   document.getElementById("myNav").style.width = "0%";
 }


//progress bar external code


 $('svg.radial-progress').each(function( index, value ) {
   $(this).find($('circle.complete')).removeAttr( 'style' );
 });
 $(window).scroll(function(){
   $('svg.radial-progress').each(function( index, value ) {
     // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
     if (
         $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
         $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
     ) {
         // Get percentage of progress
         percent = $(value).data('percentage');
         // Get radius of the svg's circle.complete
         radius = $(this).find($('circle.complete')).attr('r');
         // Get circumference (2πr)
         circumference = 2 * Math.PI * radius;
         // Get stroke-dashoffset value based on the percentage of the circumference
         strokeDashOffset = circumference - ((percent * circumference) / 100);
         // Transition progress for 1.25 seconds
         $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
     }
   });
 }).trigger('scroll');
