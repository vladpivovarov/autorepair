var module = function() {

    var init = function() {
        slider();
        _setUpListeners();
        addActiveClass();
        hamburger();
        gallery();
        mail();
        scroll();
        creator();
        media();
    };

    var media = function() {
      var mq = window.matchMedia('@media (max-width: 768px)');
      if(mq.matches) {
        document.querySelector()
      } else {
        return;
      }
    }

    var scroll = function() {
      $("a.toForm").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        console.log($(top));
        $('body,html').animate({scrollTop: top}, 1500);
      });
    }

    var mail = function() {
      $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
          type: "POST",
          url: "mail.php", //Change
          data: th.serialize()
        }).done(function() {
          alert("Thank you!");
          setTimeout(function() {
            // Done Functions
            th.trigger("reset");
          }, 1000);
        });
        return false;
      });
    }

    var addActiveClass = function() { // Когда страница загрузится
      $('a.menu__link').each(function () { // получаем все нужные нам ссылки
        var location = window.location.href; // получаем адрес страницы
        var link = this.href; // получаем адрес ссылки
        if(location == link) { // при совпадении адреса ссылки и адреса окна
          $(this).addClass('active'); //добавляем класс
        }
      });
    };

    var hamburger = function() {
      $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $(".left-block").toggleClass("menu-active");
        $(".main").toggleClass("main-active");
      });
      $(".nav__three").click(function(){
        $(".nav__menu").toggleClass("nav_active");
      })
    };

    var gallery = function() {
      $('.gallery').flipLightBox();
    };

    var creator = function() {
      if( $("div").is(".creator")) {
        $(".creator").html("Создано с любовью от <a href='./' class='creator__link'> Webr </a>")
      } else {
        $(".footer__container").html("<div class='copyright'> 2018 Все права защищены </div> Создано с любовью от<a href='https://vk.com/vladislavpivovarov' class='creator__link'>Webr </a>")
      }
    };

    var slider = function() {
      var imgBody = $(".slideshow__box");
      var i = 0;
      var left = $(".slideshow__arrow_left");
      var right = $(".slideshow__arrow_right");
      var delay = 5000;
      var maxItem = 3;
      function next() {
        i++;
        if(i >= maxItem) {
          i = 0;
        }
        imgBody.eq(i-1).removeClass("slide-show");
        imgBody.eq(i).addClass("slide-show");
      };
      right.click(next);
      left.click(prev);
      function prev() {
        i--;
        if(i < 0) {
          i = maxItem - 1;
        }
        imgBody.eq(i+1).removeClass("slide-show");
        imgBody.eq(i).addClass("slide-show");
      };

      var timer = setInterval(next, delay);
      timer;
      imgBody.mouseenter(function() {
        clearInterval(timer);
      });
      right.mouseenter(function() {
        clearInterval(timer);
      });
      left.mouseenter(function() {
        clearInterval(timer);
      });
      imgBody.mouseleave(function() {
        timer = setInterval(next, delay);
      });
    };

  var _setUpListeners = function() {
    //    Тут прослушка событий
    console.log("Прослушка событий работает")
    $(window).on("scroll", function (){
      var scr = $(window).scrollTop();
      var about = $('.about').offset().top;
      if(scr > about){
          $('.about__svg').addClass("showed");
      };
      if(scr>100){
        $(".nav").addClass("fixed");
      }else {
        $(".nav").removeClass("fixed");
      }
      });
    };
    return {
        init: init
    }
}();

$(document).ready(function(){
  module.init();
});