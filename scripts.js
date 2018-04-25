$(function() {
  // elemek összegyűjtése
  let $menuItems = $('ul');
  let $menuItemsAndMenuButton = $('button, ul');
  let menuOpened = false;

  // kattintásra reagálás
  $menuItemsAndMenuButton.click(function() {
    
    // ha nyitva van, akkor csukjuk össze
    if(menuOpened){

      // összecsukás
      $menuItems.slideUp();

      // állapot átbillentés
      menuOpened = false;
    } 

    // ha össze van csukva, akkor nyissuk le
    else {

      // lenyitás
      $menuItems.slideDown();
      
      // állapot átbillentés
      menuOpened = true;
    }
  });
});
