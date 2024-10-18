$(document).ready(function () {
  // Sticky navbar on scroll
  $(window).scroll(function () {
      if (this.scrollY > 20) {
          $(".navbar").addClass("sticky");
      } else {
          $(".navbar").removeClass("sticky");
      }

      // Scroll-up button show/hide
      if (this.scrollY > 500) {
          $(".scroll-up-btn").addClass("show");
      } else {
          $(".scroll-up-btn").removeClass("show");
      }
  });

  // Slide-up script
  $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      $("html").css("scrollBehavior", "auto");
  });

  // Toggle menu/navbar
  $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
  });

  // Typing animation
  var typed = new Typed(".typing", {
      strings: [
          "Front-End Developer",
          "Full Stack Developer"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  var typed2 = new Typed(".typing-2", {
      strings: [
          "Front-End Developer",,
          "Full Stack Developer"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });


  // Smooth scroll for navigation
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    
    var target = $(this.getAttribute('href'));
    
    if (target.length) {
        var scrollTo = target.offset().top - 60; // Adjust for navbar height
        
        $('html, body').animate({
            scrollTop: scrollTo
        }, 100); // Reduced duration for smoother effect
    }
});


  // Project filter functionality
  $('.filter-btn').on('click', function() {
      var category = $(this).attr('data-filter');
      
      $('.filter-btn').removeClass('active');
      $(this).addClass('active');
      
      if(category == 'all'){
          $('.project-item').show('1000');
      } else {
          $('.project-item').not('.' + category).hide('1000');
          $('.project-item').filter('.' + category).show('1000');
      }

  });

  // Navbar links active state on scroll
  $(window).scroll(function() {
      var scrollDistance = $(window).scrollTop();
      
      $('section').each(function(i) {
          if ($(this).position().top <= scrollDistance + 200) {
              $('.navbar .menu a.active').removeClass('active');
              $('.navbar .menu a').eq(i).addClass('active');
          }
      });
  }).scroll();
  

});

$(document).on('click', function(event) {
    // Check if clicked element is not a menu link or menu button
    if (!$(event.target).closest('.menu li a, .menu-btn').length) {
        $(".navbar .menu").removeClass("active");
        $(".menu-btn i").removeClass("active");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const emailContact = document.querySelector('.contact-item[data-email]'); 
    emailContact.addEventListener('click', () => {
        window.open(`mailto:${emailContact.dataset.email}`);
    });
    
    // Handle floating social menu links
    const socialLinks = document.querySelectorAll('.floating-social-menu a');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(link.href, '_blank');
        });
    });

    // Handle project links
    const projectLinks = document.querySelectorAll('.project-info a');
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(link.href, '_blank');
        });
    });

 });