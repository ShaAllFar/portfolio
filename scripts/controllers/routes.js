page('/', Index);
page('/about', About);
page();

function Index(){
  articleController.index();
}
function About(){
  aboutController.index();
}
