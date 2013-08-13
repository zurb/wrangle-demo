;(function($) {

  var mt = navigator.userAgent.match(/(iPhone|iPod|iPad)/i) ? true : false;
  var options = {
    touchMode: 'auto',
    selectToggle: false,
    multiTouch: mt,
  };
  var actions = {
    'delete': function(items) {
      if (items.length > 0) {
        str = 'Are you sure you want to delete ';
        str += items.length === 1 ? 'this photo?' : ('these ' + items.length + ' photos?');
        if (confirm(str)) {
          items.remove();
          return false;
        }
      }
    },
    'star': function(items) {
      items.toggleClass('starred');
    },
    'invert': function(items) {
      items.toggleClass('inverted');
    }
  };

  $(document).foundation();
  $(window).on('load', function() {
    $(document).wrangle(options, actions);
  });

  var $container = $('[data-wrangle]').eq(0);
  var $modal     = $('.photo-viewer').eq(0);
  var $modalImg  = $modal.children('img').eq(0);

  $('[data-list] > li').click(function() {
    if (!$container.hasClass('editable')) {
      $modalImg.attr('src', $(this).children('img').attr('src'));

      if ($(this).hasClass('inverted'))
        $modal.addClass('inverted');
      else
        $modal.removeClass('inverted');

      $modal.fadeIn(250);
    }
  });
  $modal.on('click touchstart', function() {
    $modal.fadeOut(250);
    return false;
  });

}(window.jQuery));