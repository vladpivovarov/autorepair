var module = function() {

    var init = function() {
        _setUpListeners();
        addActiveClass();
    };


    var addActiveClass = function() { // Когда страница загрузится
      $('a.menu__link').each(function () { // получаем все нужные нам ссылки
        var location = window.location.href; // получаем адрес страницы
        var link = this.href; // получаем адрес ссылки
        if(location == link) { // при совпадении адреса ссылки и адреса окна
          $(this).addClass('active'); //добавляем класс
        }
      });
      console.log(location);
    };

    var _setUpListeners = function() {
        //    Тут прослушка событий
        console.log("Прослушка событий работает")

      $(window).on("scroll", function (){

        var scr = $(window).scrollTop();
        var about = $('.about').offset().top;

        if(scr>about){
          $('.about__svg').addClass("showed");
        };
      });
    };

    return {
        init: init
    }
}();

module.init();