(function($) {
	
  	$(window).load(function() {

    $("#preloader").delay(500).fadeOut("slow").remove();
	
  	}) 
	 
  	var toggle_button = $("<a>", {                         
                        id: "toggle-btn", 
                        html : "Menu",
                        title: "Menu",
                        href : "#" } 
                        );
						
  	var nav_wrap = $('nav#nav-wrap')
  	var nav = $("ul#nav");
	
  	nav_wrap.find('a.mobile-btn').remove(); 
  	nav_wrap.prepend(toggle_button); 

  	toggle_button.on("click", function(e) {
   	e.preventDefault();
    	nav.slideToggle("fast");     
  	});

  	if (toggle_button.is(':visible')) nav.addClass('mobile');
  	$(window).resize(function(){
   	if (toggle_button.is(':visible')) nav.addClass('mobile');
    	else nav.removeClass('mobile');
  	});

  	$('ul#nav li a').on("click", function(){      
   	if (nav.hasClass('mobile')) nav.fadeOut('fast');      
  	});
})(jQuery);

$(document).ready(function() {

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
});

$(document).ready(function(){
	
	$('.project-wrapper').mixItUp({
	load: {
		filter: '.issue03'
	}
});
	
	$(".fancybox").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 650,

		closeEffect : 'elastic',
		closeSpeed  : 550,

		closeClick : true,
	});
	
});


$(window).load(function() {

	$('.nav_slide_button').click(function() {
		$('.pull').slideToggle();
	});

});

$(document).ready(function()
{    
    $(".showcase1").hover(
      function () {
        $(".showcase1-hover").fadeIn('slow');
		$(".screen1").fadeIn('slow');
		 }, 
      function () {
        $(".showcase1-hover").fadeOut('slow');
		$(".screen1").fadeOut('slow');
      }
    );
	
	  $(".showcase2").hover(
      function () {
        $(".showcase2-hover").fadeIn('slow');
		$(".screen2").fadeIn('slow');
      }, 
      function () {
        $(".showcase2-hover").fadeOut('slow');
		$(".screen2").fadeOut('slow');
      }
    );
	
	  $(".showcase3").hover(
      function () {
        $(".showcase3-hover").fadeIn('slow');
		$(".screen3").fadeIn('slow');
      }, 
      function () {
        $(".showcase3-hover").fadeOut('slow');
		$(".screen3").fadeOut('slow');
      }
    );
	
	  $(".wechat").hover(
      function () {
        $(".wechat-hover").fadeIn('slow');
      }, 
      function () {
        $(".wechat-hover").fadeOut('slow');
      }
    );
	
});

var pobNum = 0;
var timeoutPlayPobNum = 0;

$(function(){
	setTimeout(playPobNum,4400);
	changePobNum();
});

function playPobNum(){
	clearTimeout(timeoutPlayPobNum);
	var pobLis = $('.pre-order-block-text ul li');
	if(pobNum < pobLis.length-1){
		pobNum++;
		$('.pre-order-block-text ul li').removeClass('pob-active');
		$('.pre-order-block-text ul li').eq(pobNum).addClass('pob-active');
		$('.pob-phone').removeClass('pob-phone-active');
		$('.pob-phone').eq(pobNum).addClass('pob-phone-active');
	}else{
		pobNum = 0;
		$('.pre-order-block-text ul li').removeClass('pob-active');
		$('.pre-order-block-text ul li').eq(pobNum).addClass('pob-active');
		$('.pob-phone').removeClass('pob-phone-active');
		$('.pob-phone').eq(pobNum).addClass('pob-phone-active');
	}
	timeoutPlayPobNum = setTimeout(playPobNum,4400);
}

function changePobNum(){
	$('.pre-order-block-text ul li').hover(function(){
		clearTimeout(timeoutPlayPobNum);
		pobNum = $(this).index();
		$('.pre-order-block-text ul li').removeClass('pob-active');
		$('.pre-order-block-text ul li').eq(pobNum).addClass('pob-active');
		$('.pob-phone').removeClass('pob-phone-active');
		$('.pob-phone').eq(pobNum).addClass('pob-phone-active');
	},function(){
		pobNum = $(this).index()-1;
		playPobNum();
	});
}