// JavaScript Document


// ------------------MONTAGEM DA GALERIA RESPONSIVA ----------------
$(function(){
    $(".slides").slick({
        slidesToShow:6,
        dots:true,
        autoplay:true,
        responsive:[{
            breakpoint: 1200, settings:{slidesToShow:4}
        },{
            breakpoint: 600, settings:{slidesToShow:2}
        }]
    })
})



// ------------------MENU RESPONSIVO ----------------
$(function(){
  $(".menu i").click(function(){
	 $(".submenu").animate({
		 height:"toggle"
	   },500)
  })
	})