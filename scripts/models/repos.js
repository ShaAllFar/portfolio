(function(module){
  var repos = {};
  repos.all = [];
  repos.requestRepos = function(callback){
    $.ajax({
      url: 'https://api.github.com/users/shaallfar/repos',
      type: 'GET',
      headers: {'Authorization': 'token ' + $gitToken},
      success: function(data,message,xhr){
        repos.all = data;
        callback();
      }
    });
  };

  repos.with = function(attr){
    return repos.all.filter(function(repo){
      return repo[attr];
    });
  };
  module.repos = repos;
})(window);
