(function(module){
  var gitController = {};
  gitController.index = function(){
    $('.tab-content').hide();
    $('#home').hide();
    $('footer a').hide();
    $('#github').show();
    repos.requestRepos(reposView.index);
  };
  module.gitController = gitController;
})(window);
