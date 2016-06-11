(function(module){
  var aboutController = {};

  aboutController.index = function(){
    $('.tab-content').hide();
    $('#home').hide();
    $('footer a').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
