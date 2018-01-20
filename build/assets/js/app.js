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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1vZHVsZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHZhciBpbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc2xpZGVyKCk7XHJcbiAgICAgICAgX3NldFVwTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgYWRkQWN0aXZlQ2xhc3MoKTtcclxuICAgICAgICBoYW1idXJnZXIoKTtcclxuICAgICAgICBnYWxsZXJ5KCk7XHJcbiAgICAgICAgbWFpbCgpO1xyXG4gICAgICAgIHNjcm9sbCgpO1xyXG4gICAgICAgIGNyZWF0b3IoKTtcclxuICAgICAgICBtZWRpYSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgbWVkaWEgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIG1xID0gd2luZG93Lm1hdGNoTWVkaWEoJ0BtZWRpYSAobWF4LXdpZHRoOiA3NjhweCknKTtcclxuICAgICAgaWYobXEubWF0Y2hlcykge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBzY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgJChcImEudG9Gb3JtXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgaWQgID0gJCh0aGlzKS5hdHRyKCdocmVmJyksXHJcbiAgICAgICAgICAgIHRvcCA9ICQoaWQpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICBjb25zb2xlLmxvZygkKHRvcCkpO1xyXG4gICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogdG9wfSwgMTUwMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtYWlsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoXCJmb3JtXCIpLnN1Ym1pdChmdW5jdGlvbigpIHsgLy9DaGFuZ2VcclxuICAgICAgICB2YXIgdGggPSAkKHRoaXMpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgIHVybDogXCJtYWlsLnBocFwiLCAvL0NoYW5nZVxyXG4gICAgICAgICAgZGF0YTogdGguc2VyaWFsaXplKClcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgYWxlcnQoXCJUaGFuayB5b3UhXCIpO1xyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gRG9uZSBGdW5jdGlvbnNcclxuICAgICAgICAgICAgdGgudHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYWRkQWN0aXZlQ2xhc3MgPSBmdW5jdGlvbigpIHsgLy8g0JrQvtCz0LTQsCDRgdGC0YDQsNC90LjRhtCwINC30LDQs9GA0YPQt9C40YLRgdGPXHJcbiAgICAgICQoJ2EubWVudV9fbGluaycpLmVhY2goZnVuY3Rpb24gKCkgeyAvLyDQv9C+0LvRg9GH0LDQtdC8INCy0YHQtSDQvdGD0LbQvdGL0LUg0L3QsNC8INGB0YHRi9C70LrQuFxyXG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmOyAvLyDQv9C+0LvRg9GH0LDQtdC8INCw0LTRgNC10YEg0YHRgtGA0LDQvdC40YbRi1xyXG4gICAgICAgIHZhciBsaW5rID0gdGhpcy5ocmVmOyAvLyDQv9C+0LvRg9GH0LDQtdC8INCw0LTRgNC10YEg0YHRgdGL0LvQutC4XHJcbiAgICAgICAgaWYobG9jYXRpb24gPT0gbGluaykgeyAvLyDQv9GA0Lgg0YHQvtCy0L/QsNC00LXQvdC40Lgg0LDQtNGA0LXRgdCwINGB0YHRi9C70LrQuCDQuCDQsNC00YDQtdGB0LAg0L7QutC90LBcclxuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpOyAvL9C00L7QsdCw0LLQu9GP0LXQvCDQutC70LDRgdGBXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGhhbWJ1cmdlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKFwiLmhhbWJ1cmdlclwiKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJpcy1hY3RpdmVcIik7XHJcbiAgICAgICAgJChcIi5sZWZ0LWJsb2NrXCIpLnRvZ2dsZUNsYXNzKFwibWVudS1hY3RpdmVcIik7XHJcbiAgICAgICAgJChcIi5tYWluXCIpLnRvZ2dsZUNsYXNzKFwibWFpbi1hY3RpdmVcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgICAkKFwiLm5hdl9fdGhyZWVcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiLm5hdl9fbWVudVwiKS50b2dnbGVDbGFzcyhcIm5hdl9hY3RpdmVcIik7XHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBnYWxsZXJ5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoJy5nYWxsZXJ5JykuZmxpcExpZ2h0Qm94KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjcmVhdG9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmKCAkKFwiZGl2XCIpLmlzKFwiLmNyZWF0b3JcIikpIHtcclxuICAgICAgICAkKFwiLmNyZWF0b3JcIikuaHRtbChcItCh0L7Qt9C00LDQvdC+INGBINC70Y7QsdC+0LLRjNGOINC+0YIgPGEgaHJlZj0nLi8nIGNsYXNzPSdjcmVhdG9yX19saW5rJz4gV2ViciA8L2E+XCIpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIi5mb290ZXJfX2NvbnRhaW5lclwiKS5odG1sKFwiPGRpdiBjbGFzcz0nY29weXJpZ2h0Jz4gMjAxOCDQktGB0LUg0L/RgNCw0LLQsCDQt9Cw0YnQuNGJ0LXQvdGLIDwvZGl2PiDQodC+0LfQtNCw0L3QviDRgSDQu9GO0LHQvtCy0YzRjiDQvtGCPGEgaHJlZj0naHR0cHM6Ly92ay5jb20vdmxhZGlzbGF2cGl2b3Zhcm92JyBjbGFzcz0nY3JlYXRvcl9fbGluayc+V2ViciA8L2E+XCIpXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHNsaWRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgaW1nQm9keSA9ICQoXCIuc2xpZGVzaG93X19ib3hcIik7XHJcbiAgICAgIHZhciBpID0gMDtcclxuICAgICAgdmFyIGxlZnQgPSAkKFwiLnNsaWRlc2hvd19fYXJyb3dfbGVmdFwiKTtcclxuICAgICAgdmFyIHJpZ2h0ID0gJChcIi5zbGlkZXNob3dfX2Fycm93X3JpZ2h0XCIpO1xyXG4gICAgICB2YXIgZGVsYXkgPSA1MDAwO1xyXG4gICAgICB2YXIgbWF4SXRlbSA9IDM7XHJcbiAgICAgIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICAgIGlmKGkgPj0gbWF4SXRlbSkge1xyXG4gICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ0JvZHkuZXEoaS0xKS5yZW1vdmVDbGFzcyhcInNsaWRlLXNob3dcIik7XHJcbiAgICAgICAgaW1nQm9keS5lcShpKS5hZGRDbGFzcyhcInNsaWRlLXNob3dcIik7XHJcbiAgICAgIH07XHJcbiAgICAgIHJpZ2h0LmNsaWNrKG5leHQpO1xyXG4gICAgICBsZWZ0LmNsaWNrKHByZXYpO1xyXG4gICAgICBmdW5jdGlvbiBwcmV2KCkge1xyXG4gICAgICAgIGktLTtcclxuICAgICAgICBpZihpIDwgMCkge1xyXG4gICAgICAgICAgaSA9IG1heEl0ZW0gLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWdCb2R5LmVxKGkrMSkucmVtb3ZlQ2xhc3MoXCJzbGlkZS1zaG93XCIpO1xyXG4gICAgICAgIGltZ0JvZHkuZXEoaSkuYWRkQ2xhc3MoXCJzbGlkZS1zaG93XCIpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwobmV4dCwgZGVsYXkpO1xyXG4gICAgICB0aW1lcjtcclxuICAgICAgaW1nQm9keS5tb3VzZWVudGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmlnaHQubW91c2VlbnRlcihmdW5jdGlvbigpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGxlZnQubW91c2VlbnRlcihmdW5jdGlvbigpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGltZ0JvZHkubW91c2VsZWF2ZShmdW5jdGlvbigpIHtcclxuICAgICAgICB0aW1lciA9IHNldEludGVydmFsKG5leHQsIGRlbGF5KTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICB2YXIgX3NldFVwTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICDQotGD0YIg0L/RgNC+0YHQu9GD0YjQutCwINGB0L7QsdGL0YLQuNC5XHJcbiAgICBjb25zb2xlLmxvZyhcItCf0YDQvtGB0LvRg9GI0LrQsCDRgdC+0LHRi9GC0LjQuSDRgNCw0LHQvtGC0LDQtdGCXCIpXHJcbiAgICAkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCl7XHJcbiAgICAgIHZhciBzY3IgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgIHZhciBhYm91dCA9ICQoJy5hYm91dCcpLm9mZnNldCgpLnRvcDtcclxuICAgICAgaWYoc2NyID4gYWJvdXQpe1xyXG4gICAgICAgICAgJCgnLmFib3V0X19zdmcnKS5hZGRDbGFzcyhcInNob3dlZFwiKTtcclxuICAgICAgfTtcclxuICAgICAgaWYoc2NyPjEwMCl7XHJcbiAgICAgICAgJChcIi5uYXZcIikuYWRkQ2xhc3MoXCJmaXhlZFwiKTtcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgICQoXCIubmF2XCIpLnJlbW92ZUNsYXNzKFwiZml4ZWRcIik7XHJcbiAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBpbml0XHJcbiAgICB9XHJcbn0oKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgbW9kdWxlLmluaXQoKTtcclxufSk7Il19
