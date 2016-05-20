(function(module){


  var interestsView = {};

  interestsView.handleMainNav = function(){
    $('.main-nav').on('click','li',function(){
      var $clicked = $(this).data('content');
      console.log($clicked);
      if($clicked !== 'github'){
        if($clicked === 'about'){
          $('#home').hide();
          $('#footer').hide();
        }
        if($clicked === 'interests'){
          $('#home').show();
        }
        $('.tab-content').hide();
        $('#' + $clicked).fadeIn();
        $('#nav-menu').toggleClass('nav-menu-tgl');
      }else{
        $('.tab-content').hide();
        $('#' + $clicked).fadeIn();
        console.log('made it');
        $('.main-nav .tab:first').click();
      }
    });
    $('.main-nav .tab:first').click();
    $('#nav-menu').toggleClass('nav-menu-tgl');
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
