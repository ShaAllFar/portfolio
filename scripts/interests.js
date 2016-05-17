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
  dataPassedIn.forEach(function(ele){
    Interest.all.push(new Interest(ele));
  });
};

Interest.fetchAll = function(){
  var newETag;
  if(localStorage.etagValue){
    $.ajax({
      type: 'HEAD',
      url: 'data/interestsData.json',
      success: function(data, message, xhr){
        newETag = xhr.getResponseHeader('eTag');
        if(newETag === JSON.parse(localStorage.etagValue)){
          Interest.loadAll(JSON.parse(localStorage.interestsData));
          interestsView.initIndexPage();
        }else{
          $.getJSON('data/interestsData.json', function(data){
            Interest.loadAll(data);
            localStorage.etagValue = JSON.stringify(newETag);
            localStorage.interestsData = JSON.stringify(data);
            interestsView.initIndexPage();
          });
        }
      }
    });
  }else{
    $.ajax({
      url: 'data/interestsData.json',
      success: function(data, message, xhr){
        var eTag = xhr.getResponseHeader('eTag');
        localStorage.etagValue = JSON.stringify(eTag);
        localStorage.interestsData = JSON.stringify(data);
        interestsView.initIndexPage();
      }
    });
  }
};
