$(function(){
    $( "#cart_button" ).on("click", function() { //.click is deprecated
        $( "#bg_top" ).remove();
        $( "#boxes" ).remove();
        $( "#new_product" ).remove();
        
      });
})