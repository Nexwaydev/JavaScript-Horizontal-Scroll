let windowWidth = window.innerWidth;
let horizontalLength = document.querySelector('.element-wrapper').scrollWidth;
let distFromTop = document.querySelector('.horizontal-section').offsetTop;
let scrollDistance = distFromTop + horizontalLength - windowWidth;
    document.querySelector('.horizontal-section').style.height = horizontalLength + 'px';
    window.onscroll = function () {
      let scrollTop = window.pageYOffset;
      if( scrollTop >= distFromTop && scrollTop <= scrollDistance){
        document.querySelector('.element-wrapper').style.transform = 
        'translateX(-' + (scrollTop - distFromTop) + 'px)';

      }
    };