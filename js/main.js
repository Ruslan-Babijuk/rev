$(document).ready(function() {
    
    $('.menu_open').click(function(){
        $('.menu').toggleClass('show_menu'); 
        $('.menu_open').toggleClass('show');  
        $('body').toggleClass('lock');  
    });
    
    $('.menu').click(function(){
        $('.menu').removeClass('show_menu'); 
        $('.menu_open').removeClass('show');
        $('body').removeClass('lock');
        e.preventDefault(); 

    });
    
    
    $( '#yet' ).click(function() {
      if ( $( "#over" ).is( ":hidden" ) ) {
        $( "#over" ).show( "slow" );
        $("#yet").toggleClass("none"); 
      } else {
        $( "#over" ).slideUp();
        $("#yet").toggleClass("none"); 
      }
    });


    $(".scrollto").click(function() {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 1000);
          $('.menu').removeClass('show_menu'); 
          $('.menu_open').removeClass('show');
          $('body').removeClass('lock');
          e.preventDefault(); 
      return false;
    });  
    
    
   var tab = $('#tabs .tabs-items > div'); 
	tab.hide().filter(':first').show(); 
	
	// Клики по вкладкам.
	$('#tabs .tabs-nav a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('#tabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
 
	// Клики по якорным ссылкам.
	$('.tabs-target').click(function(){
		$('#tabs .tabs-nav a[href=' + $(this).data('id')+ ']').click();
	});
    
    
    
    $('.slaider-brends').slick({
        slidesToShow: 5,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,
    });

    $('.slaider-review').slick({
        slidesToShow: 5,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,
    });
    
    $('.slider-materials').slick({
        slidesToShow: 17,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
    });

 });












