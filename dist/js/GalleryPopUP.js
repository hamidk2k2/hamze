$(document).ready(function () {
    $(".boxD").each(function (j) {
        $(this).attr("dataNum",(j));
    });
    $(".boxD").click(function () {
        $(".showLightBoxSlider").html('<i class="prevBtn fas fa-chevron-left"></i><i class="nextBtn fas fa-chevron-right"></i><i class="fas fa-window-close"></i>');
        var slidePic = $(this).attr("dataLarg");
        var titlePic = $(this).attr("alt");
        var dataNum = $(this).attr("dataNum");
        var countSlide = $(".boxD").length;
        var modCenter = 0;
        $(".boxD").each(function (i) {
            var slidePic1 = $(this).attr("dataLarg");
            var titlePic1 = $(this).attr("alt");
            var dataNum1 = $(this).attr("dataNum");

            if((countSlide%2)==0) modCenter = i-1; else modCenter = i;
            if(i < dataNum) {
                $('.showLightBoxSlider').append('<img src="'+slidePic1+'" alt="'+titlePic1+'" class="slideBox activeCenter activeRight">');
            }
            if(i == dataNum) {
                $('.showLightBoxSlider').append('<img src="'+slidePic1+'" alt="'+titlePic1+'" class="slideBox activeCenter">');
                $("i.nextBtn.fas.fa-chevron-right , i.prevBtn.fas.fa-chevron-left").attr("dataNum",dataNum);
            }
            if(i > dataNum) {
                $('.showLightBoxSlider').append('<img src="'+slidePic1+'" alt="'+titlePic1+'" class="slideBox activeCenter activeLeft">');
            }
        });
        $(".showLightBoxSlider").addClass("active");
        $('.showLightBoxSlider.active i.fas.fa-window-close').click(function () {
            $(".showLightBoxSlider").removeClass("active");
        });

        $("i.nextBtn.fas.fa-chevron-right").click(function () {
            var thisEN = $(this).attr("dataNum");
            $('.showLightBoxSlider .slideBox').each(function (k) {
                if(!$(this).hasClass("activeLeft") && !$(this).hasClass("activeRight")){
                    if(thisEN == k) {
                        if(thisEN < (countSlide-1)){
                            $(this).addClass("activeRight");
                            $(this).next().removeClass("activeRight").removeClass("activeLeft");
                            $("i.nextBtn.fas.fa-chevron-right , i.prevBtn.fas.fa-chevron-left").attr("dataNum",(k+1));
                        }else{
                            // alert("End")
                        }
                    }
                }
            });
        });
        $("i.prevBtn.fas.fa-chevron-left").click(function () {
            var thisEN = $(this).attr("dataNum");
            $('.showLightBoxSlider .slideBox').each(function (k) {
                if(!$(this).hasClass("activeLeft") && !$(this).hasClass("activeRight")){
                    if(thisEN == k) {
                        if(thisEN > 0){
                            $(this).addClass("activeLeft");
                            $(this).prev().removeClass("activeLeft").removeClass("activeRight");
                            $("i.nextBtn.fas.fa-chevron-right , i.prevBtn.fas.fa-chevron-left").attr("dataNum",(k-1));
                        }else{
                            // alert("End")
                        }
                    }
                }
            });
        });
    });

});