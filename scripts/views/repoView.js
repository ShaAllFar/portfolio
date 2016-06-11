(function(module){
  var reposView = {};

  var ui = function(){
    var $git = $('#github');
    $git.find('ul').empty();
    $git.show();
  };
  var render = Handlebars.compile($('#repo-template').html());

  reposView.index = function(){
    ui();
    $('#github ul').append(
      repos.with('name')
      .map(render));
  };

  module.reposView = reposView;
})(window);
