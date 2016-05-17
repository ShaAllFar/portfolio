var interestsView = {};
// interestsView.generateArticles = function(){
//   interests.forEach(function(a){
//     $('#interests').append(a.toHtml('#article-template'));
//     if($('#category-filter option:contains("' + a.category + '")').length === 0){
//       $('#category-filter').append(a.toHtml('#category-filter-template'));
//     }
//   });
// };

interestsView.handleMainNav = function(){
  $('.main-nav').on('click','li',function(){
    var $clicked = $(this).data('content');
    $('.tab-content').hide();
    $('#' + $clicked).show();
  });
  $('.main-nav .tab:first').click();
};

interestsView.setTeaser = function(){
  $('.article-body p:nth-child(2)').hide();

  $('#interests').on('click','.read-on',function(e){
    e.preventDefault();
    $(this).parent().find('p').fadeIn();
    $(this).attr('class','read-less');
    $(this).html('Read Less &larr;');
  });

  $('#interests').on('click','.read-less', function(e){
    e.preventDefault();
    $(this).parent().find('.article-body p:nth-child(2)').hide();
    $(this).attr('class','read-on');
    $(this).html('Read More &rarr;');

  });
};

interestsView.handleFilter = function(){
  $('#category-filter').on('change', function(){
    if($(this).val()){
      $('article').hide();
      $('article[data-category="' + $(this).val() + '"]').show();
    }
    else{
      $('article').show();
      $('article .template').hide();
    }

  });
};

interestsView.initIndexPage = function(){
  Interest.all.forEach(function(a){
    if($('#category-filter option:contains("' + a.category + '")').length === 0){
      $('#category-filter').append(a.toHtml('#category-filter-template'));
    }
    $('#interests').append(a.toHtml('#article-template'));

  });
  interestsView.handleMainNav();
  interestsView.setTeaser();
  interestsView.handleFilter();
};
