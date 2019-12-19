var btn1 = $("#btn1");
var btn2 = $("#btn2");
var mcount = 0;
var price;
var lis = [];
var clicked;
var delette;
var total = 0;
var display = $("#message");

$("#menu ul").on("click", "li", function(event){
	
    clicked = $(this).html();
    price = $(this).children().eq(1).text();

	$(this).toggleClass("selected");
	
	if($(this).hasClass("selected")){
		mcount++;
		if(mcount>0){
		    btn1.removeAttr('disabled');
	        btn1.addClass("btnactive");
	       }
	}else{
		mcount--;
		if(mcount==0){
		   btn1.prop("disabled", true);
	       btn1.toggleClass("btnactive");
	       }
    }
	
});

btn1.click(function(){
	$("#cart #added").append("<li>" + clicked + "</li>");
     
	 total = total + Number(price);
     display.html("<li>Your Total Amount:      <span class='price'>" + total + "</span></li>");
});

$("#cart ul").on("click", "li", function(event){
     
     $(this).toggleClass("selected");
      price = $(this).children().eq(1).text();

      if($(this).hasClass("selected")){
        delette = $(this);
        btn2.removeAttr('disabled');
        btn2.addClass("btnactive");
      }else{
      	 btn2.prop("disabled", true);
	     btn2.toggleClass("btnactive");
      }  

 
});

btn2.click(function(){
     delette.remove();

      total = total - Number(price);
      display.html("<li>Your Total Amount:      <span class='price'>" + total + "</span></li>");


   	   btn2.prop("disabled", true);
	   btn2.toggleClass("btnactive");

	   if($("#added").text() == ""){
	   	   display.html("<li> Your Cart is Empty..</li>");
	   }
 
});



