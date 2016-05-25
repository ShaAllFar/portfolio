(function(module){

  var articleController = {};
  Interest.fetchAll(interestsView.initIndexPage);

  articleController.index = function(){

    $('.tab-content').hide();
    $('#interests').show();
  };

  module.articleController = articleController;
})(window);
