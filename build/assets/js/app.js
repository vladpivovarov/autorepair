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
        toPrice();
        toOrder();
    };

    var toOrder = function() {
      var orderButton = document.querySelector(".order-button"),
          orderBlock = document.querySelector(".order-block"),
          orderClose = document.querySelector(".order-close")
      orderButton.addEventListener("click", function() {
        return orderBlock.classList.add("order-block_active");
      });
      orderClose.addEventListener("click", function() {
        return orderBlock.classList.remove("order-block_active");
      })

    };

    var toPrice = function() {
      $(".amenities__container a").on("click", function() {
        var id = $(this).attr("dataId");
        localStorage.setItem('id', id)
      });
      var afterId = localStorage.getItem('id')
      $("#" + afterId).attr("checked", "checked");
    };

    var media = function() {
      var client_w = document.body.clientWidth;
      if(client_w < 768 && document.querySelector(".left-block")) {
        console.log("я меньше 768");
        document.querySelector(".left-block").classList.add("menu-active");
        document.querySelector(".main").classList.add("main-active");
        document.querySelector(".logo__text").innerHTML = "Техник <br> <span class='logo__text_new'> Автосервис</span>";
      } else if(document.querySelector(".left-block")) {
        document.querySelector(".left-block").classList.remove("menu-active");
        document.querySelector(".main").classList.remove("main-active");
        console.log("я больше 768");
      } else {
        document.querySelector(".logo__text").innerHTML = "Техник <br> <span class='logo__text_new'> Автосервис</span>";
      }
    };

    var scroll = function() {
      $("a.toForm").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        console.log($(top));
        $('body,html').animate({scrollTop: top}, 1500);
      });
    };

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
    };

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
        $(".creator").html("Создано с любовью от <a href='https://vk.com/vladislavpivovarov' class='creator__link'> Webr </a>")
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
      var maxItem = 2;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbW9kdWxlID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBzbGlkZXIoKTtcclxuICAgICAgICBfc2V0VXBMaXN0ZW5lcnMoKTtcclxuICAgICAgICBhZGRBY3RpdmVDbGFzcygpO1xyXG4gICAgICAgIGhhbWJ1cmdlcigpO1xyXG4gICAgICAgIGdhbGxlcnkoKTtcclxuICAgICAgICBtYWlsKCk7XHJcbiAgICAgICAgc2Nyb2xsKCk7XHJcbiAgICAgICAgY3JlYXRvcigpO1xyXG4gICAgICAgIG1lZGlhKCk7XHJcbiAgICAgICAgdG9QcmljZSgpO1xyXG4gICAgICAgIHRvT3JkZXIoKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHRvT3JkZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIG9yZGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcmRlci1idXR0b25cIiksXHJcbiAgICAgICAgICBvcmRlckJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcmRlci1ibG9ja1wiKSxcclxuICAgICAgICAgIG9yZGVyQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9yZGVyLWNsb3NlXCIpXHJcbiAgICAgIG9yZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gb3JkZXJCbG9jay5jbGFzc0xpc3QuYWRkKFwib3JkZXItYmxvY2tfYWN0aXZlXCIpO1xyXG4gICAgICB9KTtcclxuICAgICAgb3JkZXJDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIG9yZGVyQmxvY2suY2xhc3NMaXN0LnJlbW92ZShcIm9yZGVyLWJsb2NrX2FjdGl2ZVwiKTtcclxuICAgICAgfSlcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciB0b1ByaWNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoXCIuYW1lbml0aWVzX19jb250YWluZXIgYVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cihcImRhdGFJZFwiKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWQnLCBpZClcclxuICAgICAgfSk7XHJcbiAgICAgIHZhciBhZnRlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJylcclxuICAgICAgJChcIiNcIiArIGFmdGVySWQpLmF0dHIoXCJjaGVja2VkXCIsIFwiY2hlY2tlZFwiKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG1lZGlhID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBjbGllbnRfdyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcbiAgICAgIGlmKGNsaWVudF93IDwgNzY4ICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdC1ibG9ja1wiKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi0Y8g0LzQtdC90YzRiNC1IDc2OFwiKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtYmxvY2tcIikuY2xhc3NMaXN0LmFkZChcIm1lbnUtYWN0aXZlXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKS5jbGFzc0xpc3QuYWRkKFwibWFpbi1hY3RpdmVcIik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvX190ZXh0XCIpLmlubmVySFRNTCA9IFwi0KLQtdGF0L3QuNC6IDxicj4gPHNwYW4gY2xhc3M9J2xvZ29fX3RleHRfbmV3Jz4g0JDQstGC0L7RgdC10YDQstC40YE8L3NwYW4+XCI7XHJcbiAgICAgIH0gZWxzZSBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtYmxvY2tcIikpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtYmxvY2tcIikuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtYWN0aXZlXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibWFpbi1hY3RpdmVcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLRjyDQsdC+0LvRjNGI0LUgNzY4XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nb19fdGV4dFwiKS5pbm5lckhUTUwgPSBcItCi0LXRhdC90LjQuiA8YnI+IDxzcGFuIGNsYXNzPSdsb2dvX190ZXh0X25ldyc+INCQ0LLRgtC+0YHQtdGA0LLQuNGBPC9zcGFuPlwiO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgJChcImEudG9Gb3JtXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgaWQgID0gJCh0aGlzKS5hdHRyKCdocmVmJyksXHJcbiAgICAgICAgICAgIHRvcCA9ICQoaWQpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICBjb25zb2xlLmxvZygkKHRvcCkpO1xyXG4gICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogdG9wfSwgMTUwMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgbWFpbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKFwiZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24oKSB7IC8vQ2hhbmdlXHJcbiAgICAgICAgdmFyIHRoID0gJCh0aGlzKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICB1cmw6IFwibWFpbC5waHBcIiwgLy9DaGFuZ2VcclxuICAgICAgICAgIGRhdGE6IHRoLnNlcmlhbGl6ZSgpXHJcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGFsZXJ0KFwiVGhhbmsgeW91IVwiKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIERvbmUgRnVuY3Rpb25zXHJcbiAgICAgICAgICAgIHRoLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBhZGRBY3RpdmVDbGFzcyA9IGZ1bmN0aW9uKCkgeyAvLyDQmtC+0LPQtNCwINGB0YLRgNCw0L3QuNGG0LAg0LfQsNCz0YDRg9C30LjRgtGB0Y9cclxuICAgICAgJCgnYS5tZW51X19saW5rJykuZWFjaChmdW5jdGlvbiAoKSB7IC8vINC/0L7Qu9GD0YfQsNC10Lwg0LLRgdC1INC90YPQttC90YvQtSDQvdCw0Lwg0YHRgdGL0LvQutC4XHJcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLmhyZWY7IC8vINC/0L7Qu9GD0YfQsNC10Lwg0LDQtNGA0LXRgSDRgdGC0YDQsNC90LjRhtGLXHJcbiAgICAgICAgdmFyIGxpbmsgPSB0aGlzLmhyZWY7IC8vINC/0L7Qu9GD0YfQsNC10Lwg0LDQtNGA0LXRgSDRgdGB0YvQu9C60LhcclxuICAgICAgICBpZihsb2NhdGlvbiA9PSBsaW5rKSB7IC8vINC/0YDQuCDRgdC+0LLQv9Cw0LTQtdC90LjQuCDQsNC00YDQtdGB0LAg0YHRgdGL0LvQutC4INC4INCw0LTRgNC10YHQsCDQvtC60L3QsFxyXG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7IC8v0LTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YFcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaGFtYnVyZ2VyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoXCIuaGFtYnVyZ2VyXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImlzLWFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwiLmxlZnQtYmxvY2tcIikudG9nZ2xlQ2xhc3MoXCJtZW51LWFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwiLm1haW5cIikudG9nZ2xlQ2xhc3MoXCJtYWluLWFjdGl2ZVwiKTtcclxuICAgICAgfSk7XHJcbiAgICAgICQoXCIubmF2X190aHJlZVwiKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoXCIubmF2X19tZW51XCIpLnRvZ2dsZUNsYXNzKFwibmF2X2FjdGl2ZVwiKTtcclxuICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGdhbGxlcnkgPSBmdW5jdGlvbigpIHtcclxuICAgICAgJCgnLmdhbGxlcnknKS5mbGlwTGlnaHRCb3goKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGNyZWF0b3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYoICQoXCJkaXZcIikuaXMoXCIuY3JlYXRvclwiKSkge1xyXG4gICAgICAgICQoXCIuY3JlYXRvclwiKS5odG1sKFwi0KHQvtC30LTQsNC90L4g0YEg0LvRjtCx0L7QstGM0Y4g0L7RgiA8YSBocmVmPSdodHRwczovL3ZrLmNvbS92bGFkaXNsYXZwaXZvdmFyb3YnIGNsYXNzPSdjcmVhdG9yX19saW5rJz4gV2ViciA8L2E+XCIpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIi5mb290ZXJfX2NvbnRhaW5lclwiKS5odG1sKFwiPGRpdiBjbGFzcz0nY29weXJpZ2h0Jz4gMjAxOCDQktGB0LUg0L/RgNCw0LLQsCDQt9Cw0YnQuNGJ0LXQvdGLIDwvZGl2PiDQodC+0LfQtNCw0L3QviDRgSDQu9GO0LHQvtCy0YzRjiDQvtGCPGEgaHJlZj0naHR0cHM6Ly92ay5jb20vdmxhZGlzbGF2cGl2b3Zhcm92JyBjbGFzcz0nY3JlYXRvcl9fbGluayc+V2ViciA8L2E+XCIpXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHNsaWRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgaW1nQm9keSA9ICQoXCIuc2xpZGVzaG93X19ib3hcIik7XHJcbiAgICAgIHZhciBpID0gMDtcclxuICAgICAgdmFyIGxlZnQgPSAkKFwiLnNsaWRlc2hvd19fYXJyb3dfbGVmdFwiKTtcclxuICAgICAgdmFyIHJpZ2h0ID0gJChcIi5zbGlkZXNob3dfX2Fycm93X3JpZ2h0XCIpO1xyXG4gICAgICB2YXIgZGVsYXkgPSA1MDAwO1xyXG4gICAgICB2YXIgbWF4SXRlbSA9IDI7XHJcbiAgICAgIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICAgIGlmKGkgPj0gbWF4SXRlbSkge1xyXG4gICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ0JvZHkuZXEoaS0xKS5yZW1vdmVDbGFzcyhcInNsaWRlLXNob3dcIik7XHJcbiAgICAgICAgaW1nQm9keS5lcShpKS5hZGRDbGFzcyhcInNsaWRlLXNob3dcIik7XHJcbiAgICAgIH07XHJcbiAgICAgIHJpZ2h0LmNsaWNrKG5leHQpO1xyXG4gICAgICBsZWZ0LmNsaWNrKHByZXYpO1xyXG4gICAgICBmdW5jdGlvbiBwcmV2KCkge1xyXG4gICAgICAgIGktLTtcclxuICAgICAgICBpZihpIDwgMCkge1xyXG4gICAgICAgICAgaSA9IG1heEl0ZW0gLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWdCb2R5LmVxKGkrMSkucmVtb3ZlQ2xhc3MoXCJzbGlkZS1zaG93XCIpO1xyXG4gICAgICAgIGltZ0JvZHkuZXEoaSkuYWRkQ2xhc3MoXCJzbGlkZS1zaG93XCIpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwobmV4dCwgZGVsYXkpO1xyXG4gICAgICB0aW1lcjtcclxuICAgICAgaW1nQm9keS5tb3VzZWVudGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmlnaHQubW91c2VlbnRlcihmdW5jdGlvbigpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGxlZnQubW91c2VlbnRlcihmdW5jdGlvbigpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGltZ0JvZHkubW91c2VsZWF2ZShmdW5jdGlvbigpIHtcclxuICAgICAgICB0aW1lciA9IHNldEludGVydmFsKG5leHQsIGRlbGF5KTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICB2YXIgX3NldFVwTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICDQotGD0YIg0L/RgNC+0YHQu9GD0YjQutCwINGB0L7QsdGL0YLQuNC5XHJcbiAgICBjb25zb2xlLmxvZyhcItCf0YDQvtGB0LvRg9GI0LrQsCDRgdC+0LHRi9GC0LjQuSDRgNCw0LHQvtGC0LDQtdGCXCIpXHJcbiAgICAkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCl7XHJcbiAgICAgIHZhciBzY3IgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgIHZhciBhYm91dCA9ICQoJy5hYm91dCcpLm9mZnNldCgpLnRvcDtcclxuICAgICAgaWYoc2NyID4gYWJvdXQpe1xyXG4gICAgICAgICAgJCgnLmFib3V0X19zdmcnKS5hZGRDbGFzcyhcInNob3dlZFwiKTtcclxuICAgICAgfTtcclxuICAgICAgaWYoc2NyPjEwMCl7XHJcbiAgICAgICAgJChcIi5uYXZcIikuYWRkQ2xhc3MoXCJmaXhlZFwiKTtcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgICQoXCIubmF2XCIpLnJlbW92ZUNsYXNzKFwiZml4ZWRcIik7XHJcbiAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBpbml0XHJcbiAgICB9XHJcbn0oKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgbW9kdWxlLmluaXQoKTtcclxufSk7Il19
