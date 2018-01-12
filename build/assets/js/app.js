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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbW9kdWxlID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBfc2V0VXBMaXN0ZW5lcnMoKTtcclxuICAgICAgICBhZGRBY3RpdmVDbGFzcygpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdmFyIGFkZEFjdGl2ZUNsYXNzID0gZnVuY3Rpb24oKSB7IC8vINCa0L7Qs9C00LAg0YHRgtGA0LDQvdC40YbQsCDQt9Cw0LPRgNGD0LfQuNGC0YHRj1xyXG4gICAgICAkKCdhLm1lbnVfX2xpbmsnKS5lYWNoKGZ1bmN0aW9uICgpIHsgLy8g0L/QvtC70YPRh9Cw0LXQvCDQstGB0LUg0L3Rg9C20L3Ri9C1INC90LDQvCDRgdGB0YvQu9C60LhcclxuICAgICAgICB2YXIgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZjsgLy8g0L/QvtC70YPRh9Cw0LXQvCDQsNC00YDQtdGBINGB0YLRgNCw0L3QuNGG0YtcclxuICAgICAgICB2YXIgbGluayA9IHRoaXMuaHJlZjsgLy8g0L/QvtC70YPRh9Cw0LXQvCDQsNC00YDQtdGBINGB0YHRi9C70LrQuFxyXG4gICAgICAgIGlmKGxvY2F0aW9uID09IGxpbmspIHsgLy8g0L/RgNC4INGB0L7QstC/0LDQtNC10L3QuNC4INCw0LTRgNC10YHQsCDRgdGB0YvQu9C60Lgg0Lgg0LDQtNGA0LXRgdCwINC+0LrQvdCwXHJcbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTsgLy/QtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIF9zZXRVcExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vICAgINCi0YPRgiDQv9GA0L7RgdC70YPRiNC60LAg0YHQvtCx0YvRgtC40LlcclxuICAgICAgICBjb25zb2xlLmxvZyhcItCf0YDQvtGB0LvRg9GI0LrQsCDRgdC+0LHRi9GC0LjQuSDRgNCw0LHQvtGC0LDQtdGCXCIpXHJcblxyXG4gICAgICAkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCl7XHJcblxyXG4gICAgICAgIHZhciBzY3IgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgdmFyIGFib3V0ID0gJCgnLmFib3V0Jykub2Zmc2V0KCkudG9wO1xyXG5cclxuICAgICAgICBpZihzY3I+YWJvdXQpe1xyXG4gICAgICAgICAgJCgnLmFib3V0X19zdmcnKS5hZGRDbGFzcyhcInNob3dlZFwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBpbml0XHJcbiAgICB9XHJcbn0oKTtcclxuXHJcbm1vZHVsZS5pbml0KCk7Il19
