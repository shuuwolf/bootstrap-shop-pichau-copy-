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

      $("li.list_offnav").on("click", function(){
        $(this).find("#icon").toggleClass("fa-chevron-up");
        $(this).toggleClass("hover-item-menu");
        $(this).next().slideToggle(); //Proximo item na arvore apos a tag li que tu clicou.
      });

      $(".dark-mode-active").on("click", function(){//Preciso dar uma pesquisada para reduzir esse codigo está dando agonia '-'//
        $("#text-mode-change").toggleClass("white_dark")
        $(this).find("#dark").toggleClass("fa-moon");
        $('body').toggleClass("white");
        $(".input-ctrl").toggleClass("input-white");
        $(".form-control").toggleClass("input-white");
        $(".form-check-input").toggleClass("input-white");
        $(".logo").toggle();
        $(".logo-white").toggle();
        $(".btn-product-mobile").toggleClass("btn-white");
        $(".sun-mobile").toggleClass("icon-black");
        $(".cart-mobile").toggleClass("icon-black");
        $(".account-icon").toggleClass("icon-white");
        $(".account-icon-register").toggleClass("icon-white");
        $(".log-header a i").toggleClass("icon-white");
        $(".type-people-label").toggleClass("type-people-label-white");
        $(".text-white").toggleClass("text-black");
      });
})