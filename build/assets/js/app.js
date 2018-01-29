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
        toOrderJpg();
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

  var toOrderJpg = function() {
    var orderButton = document.querySelector(".order-button-img"),
        orderBlock = document.querySelector(".order-block2"),
        orderClose = document.querySelector(".order-close2")
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
      } else if(document.querySelector(".left-block")) {
        document.querySelector(".left-block").classList.remove("menu-active");
        document.querySelector(".main").classList.remove("main-active");
        console.log("я больше 768");
      } else {
        console.log("nothing");
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
      $("#form").submit(function() { //Change
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtb2R1bGUgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNsaWRlcigpO1xyXG4gICAgICAgIF9zZXRVcExpc3RlbmVycygpO1xyXG4gICAgICAgIGFkZEFjdGl2ZUNsYXNzKCk7XHJcbiAgICAgICAgaGFtYnVyZ2VyKCk7XHJcbiAgICAgICAgZ2FsbGVyeSgpO1xyXG4gICAgICAgIG1haWwoKTtcclxuICAgICAgICBzY3JvbGwoKTtcclxuICAgICAgICBjcmVhdG9yKCk7XHJcbiAgICAgICAgbWVkaWEoKTtcclxuICAgICAgICB0b1ByaWNlKCk7XHJcbiAgICAgICAgdG9PcmRlcigpO1xyXG4gICAgICAgIHRvT3JkZXJKcGcoKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHRvT3JkZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIG9yZGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcmRlci1idXR0b25cIiksXHJcbiAgICAgICAgICBvcmRlckJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcmRlci1ibG9ja1wiKSxcclxuICAgICAgICAgIG9yZGVyQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9yZGVyLWNsb3NlXCIpXHJcbiAgICAgIG9yZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gb3JkZXJCbG9jay5jbGFzc0xpc3QuYWRkKFwib3JkZXItYmxvY2tfYWN0aXZlXCIpO1xyXG4gICAgICB9KTtcclxuICAgICAgb3JkZXJDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIG9yZGVyQmxvY2suY2xhc3NMaXN0LnJlbW92ZShcIm9yZGVyLWJsb2NrX2FjdGl2ZVwiKTtcclxuICAgICAgfSlcclxuXHJcbiAgICB9O1xyXG5cclxuICB2YXIgdG9PcmRlckpwZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIG9yZGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcmRlci1idXR0b24taW1nXCIpLFxyXG4gICAgICAgIG9yZGVyQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9yZGVyLWJsb2NrMlwiKSxcclxuICAgICAgICBvcmRlckNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcmRlci1jbG9zZTJcIilcclxuICAgIG9yZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIG9yZGVyQmxvY2suY2xhc3NMaXN0LmFkZChcIm9yZGVyLWJsb2NrX2FjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gICAgb3JkZXJDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBvcmRlckJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoXCJvcmRlci1ibG9ja19hY3RpdmVcIik7XHJcbiAgICB9KVxyXG5cclxuICB9O1xyXG5cclxuICAgIHZhciB0b1ByaWNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoXCIuYW1lbml0aWVzX19jb250YWluZXIgYVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cihcImRhdGFJZFwiKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWQnLCBpZClcclxuICAgICAgfSk7XHJcbiAgICAgIHZhciBhZnRlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJylcclxuICAgICAgJChcIiNcIiArIGFmdGVySWQpLmF0dHIoXCJjaGVja2VkXCIsIFwiY2hlY2tlZFwiKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG1lZGlhID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBjbGllbnRfdyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcbiAgICAgIGlmKGNsaWVudF93IDwgNzY4ICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdC1ibG9ja1wiKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi0Y8g0LzQtdC90YzRiNC1IDc2OFwiKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtYmxvY2tcIikuY2xhc3NMaXN0LmFkZChcIm1lbnUtYWN0aXZlXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKS5jbGFzc0xpc3QuYWRkKFwibWFpbi1hY3RpdmVcIik7XHJcbiAgICAgIH0gZWxzZSBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtYmxvY2tcIikpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtYmxvY2tcIikuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtYWN0aXZlXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibWFpbi1hY3RpdmVcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLRjyDQsdC+0LvRjNGI0LUgNzY4XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm90aGluZ1wiKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoXCJhLnRvRm9ybVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGlkICA9ICQodGhpcykuYXR0cignaHJlZicpLFxyXG4gICAgICAgICAgICB0b3AgPSAkKGlkKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgY29uc29sZS5sb2coJCh0b3ApKTtcclxuICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvcH0sIDE1MDApO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG1haWwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgJChcIiNmb3JtXCIpLnN1Ym1pdChmdW5jdGlvbigpIHsgLy9DaGFuZ2VcclxuICAgICAgICB2YXIgdGggPSAkKHRoaXMpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgIHVybDogXCJtYWlsLnBocFwiLCAvL0NoYW5nZVxyXG4gICAgICAgICAgZGF0YTogdGguc2VyaWFsaXplKClcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgYWxlcnQoXCJUaGFuayB5b3UhXCIpO1xyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gRG9uZSBGdW5jdGlvbnNcclxuICAgICAgICAgICAgdGgudHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGFkZEFjdGl2ZUNsYXNzID0gZnVuY3Rpb24oKSB7IC8vINCa0L7Qs9C00LAg0YHRgtGA0LDQvdC40YbQsCDQt9Cw0LPRgNGD0LfQuNGC0YHRj1xyXG4gICAgICAkKCdhLm1lbnVfX2xpbmsnKS5lYWNoKGZ1bmN0aW9uICgpIHsgLy8g0L/QvtC70YPRh9Cw0LXQvCDQstGB0LUg0L3Rg9C20L3Ri9C1INC90LDQvCDRgdGB0YvQu9C60LhcclxuICAgICAgICB2YXIgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZjsgLy8g0L/QvtC70YPRh9Cw0LXQvCDQsNC00YDQtdGBINGB0YLRgNCw0L3QuNGG0YtcclxuICAgICAgICB2YXIgbGluayA9IHRoaXMuaHJlZjsgLy8g0L/QvtC70YPRh9Cw0LXQvCDQsNC00YDQtdGBINGB0YHRi9C70LrQuFxyXG4gICAgICAgIGlmKGxvY2F0aW9uID09IGxpbmspIHsgLy8g0L/RgNC4INGB0L7QstC/0LDQtNC10L3QuNC4INCw0LTRgNC10YHQsCDRgdGB0YvQu9C60Lgg0Lgg0LDQtNGA0LXRgdCwINC+0LrQvdCwXHJcbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTsgLy/QtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBoYW1idXJnZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgJChcIi5oYW1idXJnZXJcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgICAgICQoXCIubGVmdC1ibG9ja1wiKS50b2dnbGVDbGFzcyhcIm1lbnUtYWN0aXZlXCIpO1xyXG4gICAgICAgICQoXCIubWFpblwiKS50b2dnbGVDbGFzcyhcIm1haW4tYWN0aXZlXCIpO1xyXG4gICAgICB9KTtcclxuICAgICAgJChcIi5uYXZfX3RocmVlXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChcIi5uYXZfX21lbnVcIikudG9nZ2xlQ2xhc3MoXCJuYXZfYWN0aXZlXCIpO1xyXG4gICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgZ2FsbGVyeSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKCcuZ2FsbGVyeScpLmZsaXBMaWdodEJveCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgY3JlYXRvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiggJChcImRpdlwiKS5pcyhcIi5jcmVhdG9yXCIpKSB7XHJcbiAgICAgICAgJChcIi5jcmVhdG9yXCIpLmh0bWwoXCLQodC+0LfQtNCw0L3QviDRgSDQu9GO0LHQvtCy0YzRjiDQvtGCIDxhIGhyZWY9J2h0dHBzOi8vdmsuY29tL3ZsYWRpc2xhdnBpdm92YXJvdicgY2xhc3M9J2NyZWF0b3JfX2xpbmsnPiBXZWJyIDwvYT5cIilcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiLmZvb3Rlcl9fY29udGFpbmVyXCIpLmh0bWwoXCI8ZGl2IGNsYXNzPSdjb3B5cmlnaHQnPiAyMDE4INCS0YHQtSDQv9GA0LDQstCwINC30LDRidC40YnQtdC90YsgPC9kaXY+INCh0L7Qt9C00LDQvdC+INGBINC70Y7QsdC+0LLRjNGOINC+0YI8YSBocmVmPSdodHRwczovL3ZrLmNvbS92bGFkaXNsYXZwaXZvdmFyb3YnIGNsYXNzPSdjcmVhdG9yX19saW5rJz5XZWJyIDwvYT5cIilcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc2xpZGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBpbWdCb2R5ID0gJChcIi5zbGlkZXNob3dfX2JveFwiKTtcclxuICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICB2YXIgbGVmdCA9ICQoXCIuc2xpZGVzaG93X19hcnJvd19sZWZ0XCIpO1xyXG4gICAgICB2YXIgcmlnaHQgPSAkKFwiLnNsaWRlc2hvd19fYXJyb3dfcmlnaHRcIik7XHJcbiAgICAgIHZhciBkZWxheSA9IDUwMDA7XHJcbiAgICAgIHZhciBtYXhJdGVtID0gMjtcclxuICAgICAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgICAgICBpKys7XHJcbiAgICAgICAgaWYoaSA+PSBtYXhJdGVtKSB7XHJcbiAgICAgICAgICBpID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nQm9keS5lcShpLTEpLnJlbW92ZUNsYXNzKFwic2xpZGUtc2hvd1wiKTtcclxuICAgICAgICBpbWdCb2R5LmVxKGkpLmFkZENsYXNzKFwic2xpZGUtc2hvd1wiKTtcclxuICAgICAgfTtcclxuICAgICAgcmlnaHQuY2xpY2sobmV4dCk7XHJcbiAgICAgIGxlZnQuY2xpY2socHJldik7XHJcbiAgICAgIGZ1bmN0aW9uIHByZXYoKSB7XHJcbiAgICAgICAgaS0tO1xyXG4gICAgICAgIGlmKGkgPCAwKSB7XHJcbiAgICAgICAgICBpID0gbWF4SXRlbSAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ0JvZHkuZXEoaSsxKS5yZW1vdmVDbGFzcyhcInNsaWRlLXNob3dcIik7XHJcbiAgICAgICAgaW1nQm9keS5lcShpKS5hZGRDbGFzcyhcInNsaWRlLXNob3dcIik7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB2YXIgdGltZXIgPSBzZXRJbnRlcnZhbChuZXh0LCBkZWxheSk7XHJcbiAgICAgIHRpbWVyO1xyXG4gICAgICBpbWdCb2R5Lm1vdXNlZW50ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICAgIH0pO1xyXG4gICAgICByaWdodC5tb3VzZWVudGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gICAgICB9KTtcclxuICAgICAgbGVmdC5tb3VzZWVudGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gICAgICB9KTtcclxuICAgICAgaW1nQm9keS5tb3VzZWxlYXZlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwobmV4dCwgZGVsYXkpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gIHZhciBfc2V0VXBMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgINCi0YPRgiDQv9GA0L7RgdC70YPRiNC60LAg0YHQvtCx0YvRgtC40LlcclxuICAgIGNvbnNvbGUubG9nKFwi0J/RgNC+0YHQu9GD0YjQutCwINGB0L7QsdGL0YLQuNC5INGA0LDQsdC+0YLQsNC10YJcIilcclxuICAgICQod2luZG93KS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKXtcclxuICAgICAgdmFyIHNjciA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgdmFyIGFib3V0ID0gJCgnLmFib3V0Jykub2Zmc2V0KCkudG9wO1xyXG4gICAgICBpZihzY3IgPiBhYm91dCl7XHJcbiAgICAgICAgICAkKCcuYWJvdXRfX3N2ZycpLmFkZENsYXNzKFwic2hvd2VkXCIpO1xyXG4gICAgICB9O1xyXG4gICAgICBpZihzY3I+MTAwKXtcclxuICAgICAgICAkKFwiLm5hdlwiKS5hZGRDbGFzcyhcImZpeGVkXCIpO1xyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgJChcIi5uYXZcIikucmVtb3ZlQ2xhc3MoXCJmaXhlZFwiKTtcclxuICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IGluaXRcclxuICAgIH1cclxufSgpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICBtb2R1bGUuaW5pdCgpO1xyXG59KTsiXX0=
