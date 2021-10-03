

$("#car1").hide().removeAttr("hidden");
$("#car2").hide().removeAttr("hidden");
$("#car3").hide().removeAttr("hidden");
$("#car4").hide().removeAttr("hidden");
$("#car5").hide().removeAttr("hidden");
$("#car6").hide().removeAttr("hidden");
$("#car7").hide().removeAttr("hidden");
$("#bscreen").hide().removeAttr("hidden");



(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * burgerMenu
   */

  const burgerMenu = select('.burger')
  on('click', '.burger', function(e) {
    burgerMenu.classList.toggle('active');
  })

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('#portfolio-grid');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.item',
      });

      let portfolioFilters = select('#filters a', true);

      on('click', '#filters a', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('active');
        });
        this.classList.add('active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

$("#aboutme").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#aboutmepanel").offset().top-20
    }, 70);
});


$("#bcar1").click(function() {
    $("#car1 div:nth-child(1)").attr("id","carouselExampleControls");
    $("#car1").carousel(0).fadeIn(300);
    $("#bscreen").fadeIn(300);
});
$("#bcar2").click(function() {
    $("#car2 div:nth-child(1)").attr("id","carouselExampleControls");
    $("#car2").carousel(0).fadeIn(300);
    $("#bscreen").fadeIn(300);
});
$("#bcar3").click(function() {
    $("#car3 div:nth-child(1)").attr("id","carouselExampleControls");
    $("#car3").carousel(0).fadeIn(300);
    $("#bscreen").fadeIn(300);
});
$("#bcar4").click(function() {
    $("#car4 div:nth-child(1)").attr("id","carouselExampleControls");
    $("#car4").carousel(0).fadeIn(300);
    $("#bscreen").fadeIn(300);
});
$("#bcar5").click(function() {
    $("#car5 div:nth-child(1)").attr("id","carouselExampleControls");
    $("#car5").carousel(0).fadeIn(300);
    $("#bscreen").fadeIn(300);
});
$("#bcar6").click(function() {
    $("#car6 div:nth-child(1)").attr("id","carouselExampleControls");
    $("#car6").carousel(0).fadeIn(300);
    $("#bscreen").fadeIn(300);
});
$("#bcar7").click(function() {
    $("#car7 div:nth-child(1)").attr("id","carouselExampleControls");
    $("#car7").carousel(0).fadeIn(300);
    $("#bscreen").fadeIn(300);
});




$("#bscreen").click(function() {
    $("#car1").hide();
      $("#car1 div:nth-child(1)").removeAttr("id");
    $("#car2").hide();
      $("#car2 div:nth-child(1)").removeAttr("id");
    $("#car3").hide();
      $("#car3 div:nth-child(1)").removeAttr("id");
    $("#car4").hide();
      $("#car4 div:nth-child(1)").removeAttr("id");
    $("#car5").hide();
      $("#car5 div:nth-child(1)").removeAttr("id");
    $("#car6").hide();
      $("#car6 div:nth-child(1)").removeAttr("id");
    $("#car7").hide();
      $("#car7 div:nth-child(1)").removeAttr("id");
    $("#bscreen").hide();
});
