var interests = [];

function Interest(item){
  this.title = item.title;
  this.publishedOn = item.publishedOn;
  this.category = item.category;
  this.srcImage = item.srcImage;
  this.body = item.body;
}

Interest.prototype.toHtml = function(){
  var $newInterest = $('article.template').clone();

  $newInterest.find('.article-image').html(this.srcImage);
  $newInterest.find('h2').text(this.title);
  $newInterest.find('time[pubdate]').attr('datetime',this.publishedOn);
  $newInterest.find('time[pubdate]').attr('title',this.publishedOn);
  $newInterest.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago.');
  $newInterest.find('.article-body').html(this.body);



  $newInterest.removeClass('template');
  return $newInterest;
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
