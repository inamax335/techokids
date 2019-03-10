$(function() {

  // Всплывающее окно для форм с анимацией
  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });

  var HeaderTop = $('.main_menu').offset().top;

  $(window).scroll(function(){
          if( $(window).scrollTop() > HeaderTop ) {
            $('.main_menu').addClass('fixed_menu animated fadeInDown');
          } else {
            $('.main_menu').removeClass('fixed_menu animated fadeInDown');
          }
  });

  $(".toggle-mnu").click(function() {

    $(this).toggleClass("on");

    $(".main-mnu").slideToggle();

    return false;
  });


  $(".open_filter").click(function() {
    $(this).toggleClass("on");
    $(".mob_filter").slideToggle();
    return false;
  });


  $(function() {

    $(window).scroll(function() {

    if($(this).scrollTop() != 0) {

    $('#toTop').addClass('active');

    } else {

    $('#toTop').removeClass('active');

    }

  });

    $('#toTop').click(function() {

    $('body,html').animate({scrollTop:0},800);

    });

  });


  $('.name_sort').click(function(){  //при клике на пункт меню:
    $(this).toggleClass('active');    //делаем данный пункт активным/неактивным
    $(this).next('.sort_cont').slideToggle(200); //раскрываем/скрываем следующий за "кликнутым" p блок div с эффектом slide
  });

  $('.down').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.up').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });


  $('.del_item').click(function(){
   $(this).parent().remove();
  });


  $("#my_menu").mmenu({
    extensions: ["fx-menu-zoom","pagedim-black"],
    navbar:{
          title: "Список страниц"
         },
   });

  $("#mobile_menu").mmenu({
    extensions: ["fx-menu-zoom","pagedim-black"],
    navbar:{
          title: "Список страниц"
         },
   });



  var owl = $('.gallery_slider');
  owl.owlCarousel({

    responsive : {
    0 : {

    },
    // breakpoint from 480 up
    320 : {
      items: 1,
      loop: true,
      autoplay: false,
    },
    // breakpoint from 768 up
    768 : {
      items: 5,
      loop: true,
      autoplay: false,
    }
  }
  });
  // Go to the next item
  $('.customNextBtn').click(function() {
      owl.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('.customPrevBtn').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl.trigger('prev.owl.carousel', [300]);
  });


  var owl_product = $('.product_images');
  owl_product.owlCarousel({
    items: 3,
    loop:true,
    autoplay: false,
    center: true,
    responsive : {
      0 : {

      },
      // breakpoint from 480 up
      320 : {
        items: 1,
        loop:true,
        autoplay: false,
        center: true,

      },
      // breakpoint from 768 up
      768 : {
        items: 3,
        loop:true,
        autoplay: false,
        center: true,
      }
    }
  });
  // Go to the next item
  $('.customNextBtn').click(function() {
      owl_product.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.customPrevBtn').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl_product.trigger('prev.owl.carousel', [300]);
  });



  var outfit_slider = $('.outfit_slider');
    outfit_slider.owlCarousel({
      items: 1,
      loop:true,
      autoplay: false,
      responsive : {
      0 : {

      },
      // breakpoint from 480 up
      320 : {
        items: 1,
        loop:true,
        autoplay: false,
        center: true,

      },
      // breakpoint from 768 up
      768 : {
        items: 1,
        loop:true,
        autoplay: false,
        center: true,
      }
    }
  });
  // Go to the next item
  $('.NextBtn').click(function() {
      outfit_slider.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('.PrevBtn').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      outfit_slider.trigger('prev.owl.carousel', [300]);
  });


  var mixer = mixitup('#Container');

});

  $('#name_city').each(function () {

      // Cache the number of options
      var $this = $(this),
          numberOfOptions = $(this).children('option').length;

      // Hides the select element
      $this.addClass('s-hidden');

      // Wrap the select element in a div
      $this.wrap('<div class="select"></div>');

      // Insert a styled div to sit over the top of the hidden select element
      $this.after('<div class="styledSelect"></div>');

      // Cache the styled div
      var $styledSelect = $this.next('div.styledSelect');

      // Show the first select option in the styled div
      $styledSelect.text($this.children('option').eq(0).text());

      // Insert an unordered list after the styled div and also cache the list
      var $list = $('<ul />', {
          'class': 'options animated slideInRight'
      }).insertAfter($styledSelect);

      // Insert a list item into the unordered list for each select option
      for (var i = 0; i < numberOfOptions; i++) {
          $('<li />', {
              text: $this.children('option').eq(i).text(),
              rel: $this.children('option').eq(i).val()
          }).appendTo($list);
      }

      // Cache the list items
      var $listItems = $list.children('li');

      // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
      $styledSelect.click(function (e) {
          e.stopPropagation();
          $('div.styledSelect.active').each(function () {
              $(this).removeClass('active').next('ul.options').hide();
          });
          $(this).toggleClass('active').next('ul.options').toggle();
      });

      // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
      // Updates the select element to have the value of the equivalent option
      $listItems.click(function (e) {
          e.stopPropagation();
          $styledSelect.text($(this).text()).removeClass('active');
          $this.val($(this).attr('rel'));
          $list.hide();
          /* alert($this.val()); Uncomment this for demonstration! */
      });

      // Hides the unordered list when clicking outside of it
      $(document).click(function () {
          $styledSelect.removeClass('active');
          $list.hide();
      });

  });

  $('#cartcity').each(function () {

      // Cache the number of options
      var $this = $(this),
          numberOfOptions = $(this).children('option').length;

      // Hides the select element
      $this.addClass('s-hidden');

      // Wrap the select element in a div
      $this.wrap('<div class="select"></div>');

      // Insert a styled div to sit over the top of the hidden select element
      $this.after('<div class="styledSelect"></div>');

      // Cache the styled div
      var $styledSelect = $this.next('div.styledSelect');

      // Show the first select option in the styled div
      $styledSelect.text($this.children('option').eq(0).text());

      // Insert an unordered list after the styled div and also cache the list
      var $list = $('<ul />', {
          'class': 'options animated slideInRight'
      }).insertAfter($styledSelect);

      // Insert a list item into the unordered list for each select option
      for (var i = 0; i < numberOfOptions; i++) {
          $('<li />', {
              text: $this.children('option').eq(i).text(),
              rel: $this.children('option').eq(i).val()
          }).appendTo($list);
      }

      // Cache the list items
      var $listItems = $list.children('li');

      // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
      $styledSelect.click(function (e) {
          e.stopPropagation();
          $('div.styledSelect.active').each(function () {
              $(this).removeClass('active').next('ul.options').hide();
          });
          $(this).toggleClass('active').next('ul.options').toggle();
      });

      // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
      // Updates the select element to have the value of the equivalent option
      $listItems.click(function (e) {
          e.stopPropagation();
          $styledSelect.text($(this).text()).removeClass('active');
          $this.val($(this).attr('rel'));
          $list.hide();
          /* alert($this.val()); Uncomment this for demonstration! */
      });

      // Hides the unordered list when clicking outside of it
      $(document).click(function () {
          $styledSelect.removeClass('active');
          $list.hide();
      });

  });

  $('.filtersorting').each(function () {

      // Cache the number of options
      var $this = $(this),
          numberOfOptions = $(this).children('option').length;

      // Hides the select element
      $this.addClass('s-hidden');

      // Wrap the select element in a div
      $this.wrap('<div class="select"></div>');

      // Insert a styled div to sit over the top of the hidden select element
      $this.after('<div class="styledSelect"></div>');

      // Cache the styled div
      var $styledSelect = $this.next('div.styledSelect');

      // Show the first select option in the styled div
      $styledSelect.text($this.children('option').eq(0).text());

      // Insert an unordered list after the styled div and also cache the list
      var $list = $('<ul />', {
          'class': 'options animated slideInRight'
      }).insertAfter($styledSelect);

      // Insert a list item into the unordered list for each select option
      for (var i = 0; i < numberOfOptions; i++) {
          $('<li />', {
              text: $this.children('option').eq(i).text(),
              rel: $this.children('option').eq(i).val()
          }).appendTo($list);
      }

      // Cache the list items
      var $listItems = $list.children('li');

      // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
      $styledSelect.click(function (e) {
          e.stopPropagation();
          $('div.styledSelect.active').each(function () {
              $(this).removeClass('active').next('ul.options').hide();
          });
          $(this).toggleClass('active').next('ul.options').toggle();
      });

      // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
      // Updates the select element to have the value of the equivalent option
      $listItems.click(function (e) {
          e.stopPropagation();
          $styledSelect.text($(this).text()).removeClass('active');
          $this.val($(this).attr('rel'));
          $list.hide();
          /* alert($this.val()); Uncomment this for demonstration! */
      });

      // Hides the unordered list when clicking outside of it
      $(document).click(function () {
          $styledSelect.removeClass('active');
          $list.hide();
      });

  });

