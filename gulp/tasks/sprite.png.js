"use strict";

module.exports = function() {
  $.gulp.task('sprite:png', function () {
    var spriteData = $.gulp.src('./source/sprite/*.png')
      .pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.scss',
                cssFormat: "css",
                imgPath: "../img/sprite.png",
                padding: 80
      }));
      var a = spriteData.img.pipe($.gulp.dest($.config.root + '/assets/img'));
      var b = spriteData.css.pipe($.gulp.dest('source/style/sprite'));
      return(a,b);
    });
}


