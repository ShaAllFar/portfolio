(function(module){


  var interestsView = {};

  var render = function(article, templateID){
    var template = Handlebars.compile($(templateID).html());
    article.daysAgo = parseInt((new Date() - new Date(article.publishedOn))/60/60/24/1000);
    console.log(article.daysAgo);
    return template(article);
  };

  interestsView.setTeaser = function(){
    $('.article-body p:nth-child(n+3)').hide();

    $('#interests').on('click','.read-on',function(e){
      e.preventDefault();
      $(this).parent().find('p').slideDown();
      $(this).attr('class','read-less read article-text');

      $(this).html('Read Less &larr;');
    });

    $('#interests').on('click','.read-less', function(e){
      e.preventDefault();
      $(this).parent().find('.article-body p:nth-child(n+3)').slideUp();
      $(this).attr('class','read-on read article-text');

      $(this).html('Read More &rarr;');

    });
  };

  interestsView.handleFilter = function(){
    $('#category-filter').on('change', function(){
      if($(this).val()){
        $('article').hide();
        $('article[data-category="' + $(this).val() + '"]').fadeIn();
      }
      else{
        $('article').fadeIn();
        $('article .template').hide();
      }

    });
  };
  interestsView.handleMenu = function(){
    $('.icon-menu').on('click',function(){
      $('#nav-menu').toggleClass('nav-menu-tgl');

    });
    $('#nav-menu ul li').on('click',function(){
      $('#nav-menu').toggleClass('nav-menu-tgl');
    });
  };
  interestsView.initIndexPage = function(){
    // $('#interests').empty().show().siblings().hide();
    Interest.all.forEach(function(a){
      if($('#category-filter option:contains("' + a.category + '")').length === 0){
        $('#category-filter').append(render(a,'#category-filter-template'));
      }
      $('#interests').append(render(a,'#article-template'));
    });
    interestsView.handleFilter();
    interestsView.setTeaser();
    interestsView.handleMenu();
  };
  module.interestsView = interestsView;
})(window);
