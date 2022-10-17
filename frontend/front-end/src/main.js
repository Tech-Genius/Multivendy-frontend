$(document).ready(function(){
    $("h3").on("click", function(){
        $(".box_wrapper").hide();
        $(".close").fadeIn();
        $(".menu_inner").slideToggle("slow");
        // $(".menu_wrapper").slideToggle("width", "30%");
        $(".menu_wrapper").css("width", "43%");
        $(".right_content").css("width", "100%");
        
    } )
  })
  
  
  
  $(document).ready(function(){
    $(".close").on("click", function(){
        $(".close").hide();
        $(".open").fadeIn();
        $(".menu_inner").slideToggle("slow");
        $(".menu_wrapper").css("width", "15%");
        $(".right_content").css("width", "85%");
  
        
    } )
  })