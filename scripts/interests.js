var interests = [];

function Interest(item){
  for(keys in item){
    this[keys] = item[keys];
  }
}

Interest.prototype.toHtml = function(templateID){
  var template = Handlebars.compile($(templateID).html());
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  return template(this);

};
myInterestsData.sort(function(a,b){
  return(new Date(b.publishedOn) - new Date(a.publishedOn));
});

myInterestsData.forEach(function(ele){
  interests.push(new Interest(ele));
});
