/******************
* Guanyem Web Team
* bcomu-crowdfunding-init-js
*******************/
(function($){
  // ON READY
  $(window).ready(function(){
    moment.locale(icl_lang);

    // Crowdfunding: hide other language text divs
    $('.language-text').each(function(i){
      if ($(this).attr('lang') != icl_lang) $(this).remove();
    })

    // icons
    $('.product-post-output h2[class]').prepend('<i class="icon" />');

    // translate the due date
    var $due_date = $('.ignitiondeck .id-widget-date');
    if ($due_date.length){
      var real_due_date = moment($due_date.text());
      var locale_due_date = real_due_date.format('LL');
      $due_date.text(locale_due_date);
    }

  });
})(jQuery);