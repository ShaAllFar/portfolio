
(function(module){

  function Interest(item){
    for(keys in item){
      this[keys] = item[keys];
    }
  }

  Interest.all = [];

  Interest.prototype.toHtml = function(templateID){
    var template = Handlebars.compile($(templateID).html());
    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    return template(this);

  };

  Interest.loadAll = function(dataPassedIn){
    dataPassedIn.sort(function(a,b){
      return(new Date(b.publishedOn) - new Date(a.publishedOn));
    });
    Interest.all = dataPassedIn.map(function(ele){
      return new Interest(ele);
    });


  };
  Interest.getAll = function(next){
    $.getJSON('data/interestsData.json',function(responseData){
      Interest.loadAll(responseData);
      localStorage.interestsData = JSON.stringify(responseData);
      next();
    });
  };

  Interest.fetchAll = function(next){
    if(localStorage.interestsData){
      $.ajax({
        type: 'HEAD',
        url: 'data/interestsData.json',
        success: function(data, message, xhr){
          var newETag = xhr.getResponseHeader('eTag');
          if(!localStorage.etagValue || newETag !== localStorage.etagValue){
            localStorage.etagValue = newETag;
            Interest.getAll(next);
          }else{
            Interest.loadAll(JSON.parse(localStorage.interestsData));
            next();
          }
        }
      });
    }else{
      Interest.getAll(next);
    }
  };
  module.Interest = Interest;
})(window);
