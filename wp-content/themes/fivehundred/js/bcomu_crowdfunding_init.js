/******************
* Guanyem Web Team
* bcomu-crowdfunding-init-js
*******************/
var config = {
  LANGUAGE: 'ca'
};

(function($){
  // ON READY
  $(window).ready(function(){
    config.LANGUAGE = $('html').attr('lang');

    // Crowdfunding: hide other language text divs
    $('.language-text').each(function(i){
      if ($(this).attr('lang') != icl_lang) $(this).remove();
    })

    // icons
    $('.product-post-output h2[class]').prepend('<i class="icon" />');

  });
})(jQuery);