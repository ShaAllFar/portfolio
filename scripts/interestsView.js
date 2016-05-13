var interestsView = {};

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
    $(this).parent().find('p:nth-child(2)').hide();
    $(this).attr('class','read-on');
    $(this).html('Read More &rarr;');

  });
};
// interestsView.populateFilter = function(){
//   .each(function(){
//     if (!$(this).hasClass('template')) {
//       var value =
//       console.log(value);
//       var optionTag = '<option value="' + value + '">' + value + '</option>';
//       if('#category-filter option[value="'+ value+'"]'){
//         $('#category-filter').append(optionTag);
//       }
//     }
//   });
// };




$(document).ready(function(){
  interestsView.handleMainNav();
  interestsView.setTeaser();
  interestsView.populateFilter();
});
