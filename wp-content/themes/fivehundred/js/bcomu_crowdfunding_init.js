/******************
* Guanyem Web Team
* bcomu-crowdfunding-init-js
*******************/
var locale = {
  PLEDGE: {
    ca: "Aporta",
    es: "Aportar",
    en: "Pledge"
  },
  SUBMIT_PAYMENT: {
    ca: "Fes el pagament",
    es: "Realizar el pago",
    en: "Submit Payment"
  }
};

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

    // pledge text minor change (get rid of ": N€")
    $('.ignitiondeck .id-product-levels a .id-level-title span').text(locale.PLEDGE[icl_lang]);

    // submit payment btn translation
    $('.ignitiondeck form input[type=submit]').attr('value', locale.SUBMIT_PAYMENT[icl_lang]);
  });
})(jQuery);