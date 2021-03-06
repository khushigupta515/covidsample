//reduces number of times checkslide function runs 
      function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };
//gets all the images of class .slide-in
    
    

    function checkSlide() {
    const sliderImages = document.querySelectorAll(".slide-in");
     
    /*run a for loop to trace all images in slider Images*/
      sliderImages.forEach(sliderImage => {
        
        // half way through the image scrollY gives the top position till which we have scrolled so we add .innerHeight to reach
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // bottom of the image .offsetTop tells us how far from the top of the window is the top of the image then add image height to reach bottom of image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        //to check if image is half shown or full shown
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        //to check if image is scrolled completely
        const isNotScrolledPast = window.scrollY < imageBottom;
        //if image is half shown and not fully scrolled then add class active
        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');
        } 
        else {
          sliderImage.classList.remove('active');
          
        }

        
          });
  
  }
  window.addEventListener("scroll",debounce(checkSlide));


  //fading on scroll
   $(function() {
                
                var documentEl = $(document),
                //gets all elements with the class .fadeonscroll
                    fadeElem = $('.fadeonscroll');
                
                
                 documentEl.on('scroll', function() {
                    var currScrollPos = documentEl.scrollTop();
                    //iterate through the fadeElem which conatins all elements with the class .fadeonscroll
                    fadeElem.each(function() {

                        var $this = $(this),
                            elemOffsetTop = $this.offset().top;
                        if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/300);
                    }); 
                });
                
            });

    
