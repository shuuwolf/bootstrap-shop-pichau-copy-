$(function(){
    $( "#cart_button" ).on("click", function() { //.click is deprecated
        $( "#bg_top" ).remove();
        $( "#boxes" ).remove();
        $( "#new_product" ).remove();
        
        const xhr = new XMLHttpRequest();
        const myCar = document.getElementById('myCar');

        xhr.onload = function(){
          if(this.status === 200){ //1xx: informational requests, 2xx: successuful requests, 3xx: redirects, 4xx: client errors, 5xx: server errors
            myCar.innerHTML = xhr.responseText;//adiciona o request dentro da id myCar
          }else{
            console.warn('Did not receive 200 OK from server');
          }
        };

        xhr.open('get', 'cart.html');//usa o metodo GET para pegar o cart.html
        xhr.send();
      });
})