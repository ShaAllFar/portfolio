(function(module){

  var articleController = {};
  Interest.fetchAll(interestsView.initIndexPage);

  articleController.index = function(){

    $('.tab-content').hide();
    $('#home').show();
    $('#interests').show();
    $('footer a').show();

  };

  module.articleController = articleController;
})(window);
