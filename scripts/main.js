//text on the beginning
$(".text_block").hide();
$(".text_block").fadeIn(4500);
//header links scale
$(".nav_links li").hover(function () {
        $(this).css({'transform': 'scale(1.2)', 'transition': 'transform .3s ease'});
    }, function () {
        $(this).css({'transform': 'scale(1)'});
    }
);
//header links color
$(".nav_links li a").hover(function () {
        $(this).css({'color': 'yellow'});
    }, function () {
        $(this).css({'color': 'white'});
    }
);
//contact pop-up window on click
var modal = document.getElementById("myContainer");
var btn = document.getElementById("myContact");
btn.onclick = function() {
  modal.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("myForm").reset();
  }
}

// $('#submit').click(function(){
//   $('form')[0].reset();
// });
//button down scroll to about course block
$(document).ready(function() {
  $(".btn_down").click(function() {
    $("body, html").animate({ scrollTop: $(".about_course").offset().top }, 1000);
  });
});
//material link scroll to books
$(document).ready(function () {
  $("#materials").click(function () { 
    $("body, html").animate({ scrollTop: $(".books").offset().top }, 1000);
  });
});
//hover on books picture
$(document).ready(function () {
  $(".container_for_books .book_box img").hover(function () {
    $(this).css({'transform': 'scale(1.2)', 'transition': 'transform .3s ease'});
  }, function () {
      $(this).css({'transform': 'scale(1)'});
  });
});
//responsive nav bar
const toggleBtn = document.getElementsByClassName('toggle_button')[0];
const navLinks = document.getElementsByClassName('nav_links')[0];

toggleBtn.addEventListener('click', ()=> {
  navLinks.classList.toggle('active');
});