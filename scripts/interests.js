var interests = [];

function Interest(item){
  this.title = item.title;
  this.publishedOn = item.publishedOn;
  this.category = item.category;
  this.srcImage = item.srcImage;
  this.body = item.body;
}

Interest.prototype.toHtml = function(){
  var $source = $('#article-template').html();
  var template = Handlebars.compile($source);
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  return template(this);

};
myInterestsData.sort(function(a,b){
  return(new Date(b.publishedOn) - new Date(a.publishedOn));
});

myInterestsData.forEach(function(ele){
  interests.push(new Interest(ele));
});

interests.forEach(function(ele){
  $('#interests').append(ele.toHtml());
});
