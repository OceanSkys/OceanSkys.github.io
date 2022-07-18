// const button = document.querySelector('.btn');

// const displayButton = () => {
//   window.addEventListener('scroll', () => {
//     console.log(window.scrollY);
  
//     if (window.scrollY > 1100) {
//       button.style.display = "block";
//     } else {
//       button.style.display = "none";
//     }
//   });
// };

// const scrollToTop = () => {
//   button.addEventListener("click", () => {
//     window.scroll({
//       top: 0,
//       left: 0,
//       behavior: 'smooth'
//     }); 
//     console.log(event);
//   });
// };

// displayButton();
// scrollToTop();


$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('#scroll').fadeIn(); 
      } else { 
          $('#scroll').fadeOut(); 
      } 
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
});