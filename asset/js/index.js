/** canvas animations start*/
    // DOM selectors
    const stars = document.getElementById('stars');
    const starsCtx = stars.getContext('2d');
    // global variables
    let screen, starsElements, starsParams = { speed: 2, number: 300, extinction: 6 };
    
    // run stars
    setupStars();
    updateStars();
    // update stars on resize to keep them centered
    window.onresize = function() {
        setupStars();
    };
    // star constructor
    function Star() {
        this.x = Math.random() * stars.width;
        this.y = Math.random() * stars.height;
        this.z = Math.random() * stars.width;
    
        this.move = function() {
            this.z -= starsParams.speed;
            if (this.z <= 0) {
                this.z = stars.width;
            }
        };
    
        this.show = function() {
            let x, y, rad, opacity;
            x = (this.x - screen.c[0]) * (stars.width / this.z);
            x = x + screen.c[0];
            y = (this.y - screen.c[1]) * (stars.width / this.z);
            y = y + screen.c[1];
            rad = stars.width / this.z;
            opacity = (rad >= starsParams.extinction) ? 1.5 * (2 - rad / starsParams.extinction) : 1;
    
            starsCtx.beginPath();
            starsCtx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
            starsCtx.arc(x, y, rad, 0, Math.PI * 2);
            starsCtx.fill();
        }
    }
    // setup <canvas>, create all the starts
    function setupStars() {
        screen = {
            w: window.innerWidth,
            h: window.innerHeight,
            c: [ window.innerWidth * 0.5, window.innerHeight * 0.5 ]
        };
        window.cancelAnimationFrame(updateStars);
        stars.width = screen.w;
        stars.height = screen.h;
        starsElements = [];
        for (let i = 0; i < starsParams.number; i++) {
            starsElements[i] = new Star();
        }
    }
    
    // redraw the frame
    function updateStars() {
        starsCtx.fillStyle = "black";
        starsCtx.fillRect(0, 0, stars.width, stars.height);
        starsElements.forEach(function (s) {
            s.show();
            s.move();
        });
        window.requestAnimationFrame(updateStars);
    }
/** canvas animations end*/

/** owl carousel start */
$(document).ready(function () {
    $('.owlcarousel1').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
          autoPlaySpeed: 3000,
          autoPlayTimeout: 3000,
          autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 3,
            nav: true
          },
          1000: {
            items: 3,
            nav: true,
            loop: true
          }
        }
      })
  
      $('.owlcarousel2').owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        autoPlaySpeed: 5000,
        autoPlayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 3,
            loop: true
          },
          1000: {
            items: 6,
            nav: true,
            loop: true
          }
        }
      })
});


 AOS.init();
 $('.slide').hiSlide();