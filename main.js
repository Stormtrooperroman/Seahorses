var a = false;
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
    $("#Buy").click(function () { 
        $('#exampleModal').modal('show');
        $("#sell").removeClass("active");
        $("#buy").addClass("active");
    });
    $("#ourBuy").click(function () { 
        $('#exampleModal').modal('show');
        $("#sell").removeClass("active");
        $("#buy").addClass("active");
    });
    
    $("#Sell").click(function () { 
        $('#exampleModal').modal('show');
        $("#buy").removeClass("active");
        $("#sell").addClass("active");
        
    });
    
    $(function () {
        $('[data-toggle="popover"]').popover()
    })
    $('[data-toggle="popover"]').popover({
        trigger: 'focus'
    })
    
    $("#menu3").click(function () { 
      
      $("#main").children().css("display", "none");
      $("#Start").css("display", "block");
      $("#second").css("display", "block");

      
    });  
    $("#our").click(function () { 
      
      $("#main").children().css("display", "none");
      $("#Start").css("display", "block");
      $("#second").css("display", "block");

      
    });  
    $("#Brand").click(function () { 
      
      $("#main").children().css("display", "none");
      $("#Start").css("display", "block");
      $("#First").css("display", "block");
    });  
    $("#Main").click(function () { 
      
      $("#main").children().css("display", "none");
      $("#Start").css("display", "block");
      $("#First").css("display", "block");
    });  
    $("#SignButton").click(function () { 
      $("#main").children().css("display", "none");
      $("#Start").css("display", "block");
      $("#SignSite").css("display", "block");
    });
    $("#SignButton2").click(function () { 
      $("#main").children().css("display", "none");
      $("#Start").css("display", "block");
      $("#SignSite").css("display", "block");
    });
    $("#EnterButton").click(function () { 
      $("#main").children().css("display", "none");
      $("#Start").css("display", "block");
      $("#Enter").css("display", "block");
    });
    $("#menu1").click(function () { 
      $("#main").children().css("display", "none");
      $("#Start").css("display", "block");
      $("#News").css("display", "block");
    });
    $("#discounts").click(function () { 
      $("#main").children().css("display", "none");
      $("#Start").css("display", "block");
      $("#News").css("display", "block");
    });
    $("#menu2").click(function () { 
      $("#main").children().css("display", "none");
      $("#Start").css("display", "block");
      $("#SignSite").css("display", "block");
    });
    $("#Write").click(function () { 
      $("#main").children().css("display", "none");
      $("#Start").css("display", "block");
      $("#SignSite").css("display", "block");
    });
    $("#sun ").click(function () { 

      if(a==true)
      {
        $("body").css({
         
        "color": "black"
      });
      $("#main").css("background-color", "#007bff");
      $(".jumbotron").css("background-color", "paleturquoise");
      $("#border").css("background-color", "paleturquoise");
      $("#sun").css("color", "black");
      $("body").css({
        "background-color":"cyan ",
       "background-image": 
        " linear-gradient(30deg, darkblue 12%, transparent 12.5%, transparent 87%, darkcyan 87.5%, darkblue), linear-gradient(150deg, darkcyan 12%, transparent 12.5%, transparent 87%, darkblue 87.5%, darkcyan), linear-gradient(30deg, darkblue 12%, transparent 12.5%, transparent 87%, darkcyan 87.5%, darkblue), linear-gradient(150deg, darkcyan 12%, transparent 12.5%, transparent 87%, darkblue 87.5%, darkcyan), linear-gradient(60deg, rgb(10, 170, 245) 25%, transparent 25.5%, transparent 75%, rgb(31, 34, 212) 75%, rgb(10, 170, 245)), linear-gradient(60deg, rgb(10, 170, 245) 25%, transparent 25.5%, transparent 75%, rgb(31, 34, 212) 75%, rgb(10, 170, 245))",
        "background-position":" 0 0, 0 0, 25px 50px, 25px 50px, 0 0, 25px 50px",
        "background-size": "50px 100px",
      
      });
      $("#sun").removeAttr("data-original-title");
      $("#sun").attr("data-original-title", "Night mode");
      $("#modalContent").css({
        "background-color":"white",
        "color": "black",
        
      });
      $("#ourFriends").css("color", "white");
      $("#discounts").css("color", "white");
      $("#ourBuy").css("color", "white");
        a=false;
      }

    else
    {
      $("body").css({
        
        "color": "white"
      });
      $("#main").css("background-color", "black");
      $(".jumbotron").css("background-color", "lightseagreen");
      $("#border").css("background-color", "lightseagreen");
      $("#sun").css("color", "white");
      $("body").css({
        "background-color":"darkblue ",
        "background-image": "linear-gradient(-45deg, transparent 2px, #D1C7BF 2px, transparent 3px), linear-gradient(45deg, transparent 2px, #D1C7BF 2px, transparent 3px)",
        "background-size": "6px 6px",
      });
      $("#sun").removeAttr("data-original-title");
      $("#sun").attr("data-original-title", "Day mode");
      $("#modalContent").css({
        "background-color":"black",
        "color": "white",
      });
      $("#ourFriends").css("color", "black");
      $("#discounts").css("color", "black");
      $("#ourBuy").css("color", "black");
      a=true;
    }
    });
    
    $('.carousel').carousel({
      interval: 2000
    });

    $(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
(function($) {  
$(function() {  
   
  $('#up').click(function() {  
    $('body,html').animate({scrollTop:0},500);  
    return false;  
  })  
   
})  
})(jQuery)  
  $("#close").hover(function () {
        $("#close").css("color", "red");
        }, function () {
      }
      );