(function(module){

  var articleController = {};
  Interest.fetchAll(interestsView.initIndexPage);

  articleController.index = function(){

    $('#interests').show();
    $('#about').hide();
  };

  module.articleController = articleController;
})(window);
