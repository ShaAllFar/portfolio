(function(module){
  var aboutController = {};

  aboutController.index = function(){
    $('#interests').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
