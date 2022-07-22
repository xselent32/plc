$(document).ready(function(){

  const waitUntilElementExists = (selector) => {
  const el = document.querySelector(selector);

  if (el){
      document.querySelector('a.brandingLabel').innerText = 'Разработчик Чат-Бота';
      document.querySelector('a.brandingLabel').href = 'https://web-nosyrev.ru';
  }

  setTimeout(() => waitUntilElementExists(selector), 500);
  }

  waitUntilElementExists('#botbutton');

  // Navigation
  $("a[href^='#']").click(function() {
      var target = $(this).attr('href');
      $("html, body").animate({
        scrollTop: $(target).offset().top - 80
      }, 500);
    });


    $("#navigation").scrollspy({offset: - 500});

    $("#burger").click(function(event){
    $("#burger, .navigation, .icon-bar").toggleClass('toogle-active');
    $("body").toggleClass('lock');
  });

  $('.nav-link').click(function(event) {
    $("#burger, .navigation, .icon-bar").removeClass('toogle-active');
    $("body").removeClass('lock');
  });

  // Fancy
  Fancybox.bind("[data-fancybox-plyr]", {
    on: {
      reveal: (fancybox, slide) => {
        if (typeof Plyr === undefined) {
          return;
        }

        let $el;

        if (slide.type === "html5video") {
          $el = slide.$content.querySelector("video");
        } else if (slide.type === "video") {
          $el = document.createElement("div");
          $el.classList.add("plyr__video-embed");

          $el.appendChild(slide.$iframe);

          slide.$content.appendChild($el);
        }

        if ($el) {
          slide.player = new Plyr($el);
        }
      },
      "Carousel.unselectSlide": (fancybox, carousel, slide) => {
        if (slide.player) {
          slide.player.pause();
        }
      },
      "Carousel.selectSlide": (fancybox, carousel, slide) => {
        if (slide.player) {
          slide.player.play();
        }
      },
    },
  });

  // Hide call me
  $('#message-btn').click(function(event) {
    event.preventDefault();
    $('.icon-bar').slideToggle('fast', 'linear');
    $('#message-btn').toggleClass('active');
    $('.message').toggleClass('active');
  });


  $("a[href^='#']").click(function() {
    var target = $(this).attr('href');
    $("html, body").animate({
      scrollTop: $(target).offset().top - 80
    }, 500);
  });
});

  AOS.init({// Global settings:
  disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});