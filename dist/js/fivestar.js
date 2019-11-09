// JavaScript Document

var maxli = 0;
var hamid = "";
var createimg = "";
$(document).ready(function(){
	//count talk bubbles
	$(".ratestar ul li").click(function(){
        $(".shownatije").html("");	
	var selectrate = $(this).attr('data');
	var data_rateprod = {
		'ratestar' : selectrate,
		'prodid': $(this).parent().parent().attr('rel'),
		'submitrateprod':'set'
	};
	// $.post("theme/fm-music/include.php",data_rateprod,function(data){
	// 	$(".shownatije").html(data);
	// 	setTimeout(function(){
	// 	   $(".shownatije").fadeOut(1000);
	// 	},1000);
	// });
	var stut = $(this).parent().parent().parent().attr('data');
		var remCls = $(".showactiverate");
		var adCls = $(".shownatije");
		if(stut!=='disabled'){
			if(selectrate==1){
				adCls.fadeOut(100);
				adCls.delay(200).fadeIn(500);
				remCls.addClass("rateactive1");
				remCls.removeClass("rateactive5").removeClass("rateactive2").removeClass("rateactive3").removeClass("rateactive4");
			}else if(selectrate==2){
				adCls.fadeOut(100);
				adCls.delay(200).fadeIn(500);
				remCls.addClass("rateactive2");
				remCls.removeClass("rateactive5").removeClass("rateactive4").removeClass("rateactive3").removeClass("rateactive1");
			}else if(selectrate==3){
				adCls.fadeOut(100);
				adCls.delay(200).fadeIn(500);
				remCls.addClass("rateactive3");
				remCls.removeClass("rateactive5").removeClass("rateactive4").removeClass("rateactive1").removeClass("rateactive2");
			}else if(selectrate==4){
				adCls.fadeOut(100);
				adCls.delay(200).fadeIn(500);
				remCls.addClass("rateactive4");
				remCls.removeClass("rateactive2").removeClass("rateactive3").removeClass("rateactive1").removeClass("rateactive5");
			}else if(selectrate==5){
				adCls.fadeOut(100);
				adCls.delay(200).fadeIn(500);
				remCls.addClass("rateactive5");
				remCls.removeClass("rateactive2").removeClass("rateactive3").removeClass("rateactive4").removeClass("rateactive1");
			}else{}
		}else{alert("امتیاز شما قبلا ثبت شده");}
	});
	$(".ratestar ul li").hover(function(){
		var selectrate = $(this).attr('data');
		var showResultRate = $(".showresultrate");
		if(selectrate==1){
			showResultRate.addClass("ratehover1");
		}else if(selectrate==2){
			showResultRate.addClass("ratehover2");
		}else if(selectrate==3){
			showResultRate.addClass("ratehover3");
		}else if(selectrate==4){
			showResultRate.addClass("ratehover4");
		}else if(selectrate==5){
			showResultRate.addClass("ratehover5");
		}else{}
	},function(){
		$(".showresultrate").removeClass("ratehover1").removeClass("ratehover2").removeClass("ratehover3").removeClass("ratehover4").removeClass("ratehover5");
	});


});