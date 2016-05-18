(function(module){


  var interestsView = {};

  interestsView.handleMainNav = function(){
    $('.main-nav').on('click','li',function(){
      var $clicked = $(this).data('content');
      $('.tab-content').hide();
      $('#' + $clicked).fadeIn();
    });
    $('.main-nav .tab:first').click();
  };

  interestsView.setTeaser = function(){
    $('.article-body p:nth-child(2)').hide();

    $('#interests').on('click','.read-on',function(e){
      e.preventDefault();
      $(this).parent().find('p').slideDown();
      $(this).attr('class','read-less read article-text');

      $(this).html('Read Less &larr;');
    });

    $('#interests').on('click','.read-less', function(e){
      e.preventDefault();
      $(this).parent().find('.article-body p:nth-child(2)').slideUp();
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
  };
  interestsView.initIndexPage = function(){
    Interest.all.map(function(a){
      if($('#category-filter option:contains("' + a.category + '")').length === 0){
        $('#category-filter').append(a.toHtml('#category-filter-template'));
      }
      $('#interests').append(a.toHtml('#article-template'));
    });
    interestsView.handleMainNav();
    interestsView.handleFilter();
    interestsView.setTeaser();
    interestsView.handleMenu();
  };
  module.interestsView = interestsView;
})(window);
