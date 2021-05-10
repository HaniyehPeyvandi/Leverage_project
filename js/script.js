$(function (){
    //////////////////////// Navbar /////////////////////////////

    //-------------------- Dropdown-menu ----------------//
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.dropdown-submenu .show').removeClass("show");
        });
        return false;
    });


    //-------------------- Navbar-collapse ----------------//
    var overlay = $(".overlay");
    $(".navbar-toggler").click(function (){
        overlay.css("z-index","99999999").css("display","block");
        overlay.css("background-color","rgba(0,0,0,0.5)");
    });

    $(".navbar-collapse .closeButton").click(function (){
        overlay.css("z-index","-10000000000").css("display","none");
        $(".navbar-collapse").removeClass("show");
        overlay.css("background-color","transparent");
    });

    $("#portfolioSection").click(function (){
        overlay.css("z-index","-10000000000").css("display","none");
        $(".navbar-collapse").removeClass("show");
        overlay.css("background-color","transparent");
    });

    $("#servicesSection").click(function (){
        overlay.css("z-index","-10000000000").css("display","none");
        $(".navbar-collapse").removeClass("show");
        overlay.css("background-color","transparent");
    });


    //-------------------- Navbar during Scroll ----------------//
    var previousScroll = 0;
    mainMenu = $(".mainMenu");
    $(window).scroll(function(event){
        var scroll = $(this).scrollTop();
        if (scroll > previousScroll){
            if (scroll > 580){
                mainMenu.css("top","-100px");
                elevator.fadeOut();
            }else{
                mainMenu.css("top","0");
                mainMenu.css("background-color","#251f37");
                elevator.fadeOut();
            }
        } else {
            mainMenu.css("top","0");
            mainMenu.css("background-color","#251f37");

            if ($(window).scrollTop() > 600){
                elevator.fadeIn();
            }else {
                elevator.fadeOut();
            }
        }
        if (scroll === 0) $(".mainMenu").css("background-color","transparent");
        previousScroll = scroll;
    });
    //////////////////////// End of Navbar /////////////////////////////


    //////////////////////// Elevator ///////////////////////
    elevator = $(".elevator");
    elevator.click(function (){
        $("body , html").animate({scrollTop:0},200);
    });
    ////////////////////// End of Elevator ///////////////


    //////////////////////// Slider ////////////////////////////

    //-------------------- Sliding Automatically ----------------//
    sliderSelector = "[data-role='slider']";
    sliderBoxWidth = $(sliderSelector).width();
    $(sliderSelector + " .slide").css("left",sliderBoxWidth);
    $(sliderSelector + " .slide").eq(0).css("left",0);

    function moveSlide(slideNo){
        if (slideNo === 0){
            beforeLoadElements(1);

            $(".sliderContainer .indicators .indicator-2").removeClass("activeIndicator");
            $(".sliderContainer .indicators .indicator-1").addClass("activeIndicator");

            loadElements(0);
            $(sliderSelector + " .slide").eq(slideNo).delay(10000).animate({left: -1 * sliderBoxWidth}, 200, function () {
                moveSlide(1);
            });
        }else {
            beforeLoadElements(0);

            $(".sliderContainer .indicators .indicator-1").removeClass("activeIndicator");
            $(".sliderContainer .indicators .indicator-2").addClass("activeIndicator");

            $(sliderSelector + " .slide").eq(slideNo).animate({left: 0}, 200, function () {
                loadElements(1);
                $(sliderSelector + " .slide").eq(slideNo).delay(10000).animate({left: sliderBoxWidth}, 200, function () {
                    $(sliderSelector + " .slide").eq(slideNo-1).animate({left: 0}, 200, function () {
                        moveSlide(0);
                    });
                });
            });
        }
    }
    moveSlide(0);


    //-------------------- Indicators ----------------//
    $(".sliderContainer .indicators .indicator-1").click(function (){
        beforeLoadElements(0);

        $(".sliderContainer .indicators .indicator-2").removeClass("activeIndicator");
        $(this).addClass("activeIndicator");

        $(sliderSelector + " .slide").eq(1).stop(true,true);
        $(sliderSelector + " .slide").eq(1).animate({left: sliderBoxWidth}, 200, function () {
            $(sliderSelector + " .slide").eq(0).animate({left: 0}, 200).delay(10000);
            loadElements(0);
            moveSlide(0);
        });
    });

    $(".sliderContainer .indicators .indicator-2").click(function (){
        beforeLoadElements(1);

        $(".sliderContainer .indicators .indicator-1").removeClass("activeIndicator");
        $(this).addClass("activeIndicator");

        $(sliderSelector + " .slide").eq(0).stop(true,true);
        $(sliderSelector + " .slide").eq(0).animate({left: -1 * sliderBoxWidth}, 200, function () {
            $(sliderSelector + " .slide").eq(1).animate({left: 0}, 200).delay(10000);
            loadElements(1);
            moveSlide(1);
        });
    });


    //-------------------- Load Elements of Slider ----------------//
    function loadElements(NoOfSlide) {
        $(".sliderContainer #slides .slide  h1").eq(NoOfSlide).delay(1000).animate({ opacity:1 },100,function () {
            $(this).removeClass("beforeLoad");
            $(this).addClass("load");
            $(".sliderContainer #slides .slide  .getStarted").eq(NoOfSlide).delay(2000).animate({opacity:1},100,function () {
                $(this).removeClass("beforeLoad");
                $(this).addClass("load");
            });
        });
    }

    function beforeLoadElements(NoOfSlide){
        $(".sliderContainer #slides .slide  h1").eq(NoOfSlide).css("opacity","0").removeClass("load").addClass("beforeLoad");
        $(".sliderContainer #slides .slide  .getStarted").eq(NoOfSlide).css("opacity","0").removeClass("load").addClass("beforeLoad");
    }


    $(".sliderContainer #slides .slide .firstImg").delay(2000).animate({opacity:1},100,function () {
        $(this).addClass("load");
        $(".sliderContainer .indicators .indicator-1").delay(2000).animate({opacity:1},100,function () {
            $(this).css("transform","translate3d(-90%,0,0)");
        });
        $(".sliderContainer .indicators .indicator-2").delay(2000).animate({opacity:1},100,function () {
            $(this).css("transform","translate3d(30%,0,0)");
        });
    });
    //////////////////////// End of Slider ////////////////////////////


    //////////////////////// What We Do Section ///////////////////////
    childItem = $(".firstSection .childItem");
    childItem_1 = $(".firstSection .childItem-1");
    childItem_6 = $(".firstSection .childItem-6");
    childItemHover_1 = $(".firstSection .childItemHover-1");
    childItemHover_6 = $(".firstSection .childItemHover-6");
    childItemNext_1 = $(".firstSection .childItemNext-1");
    childItemNext_6 = $(".firstSection .childItemNext-6");

    childItem_1.width(childItem.width() / 2);
    childItem_1.height(childItem.height() / 2);

    childItem_6.width(childItem.width() / 2);
    childItem_6.height(childItem.height() / 2);

    childItemNext_1.width(childItem.width());
    childItemNext_1.height(childItem.height());

    childItemNext_6.width(childItem.width());
    childItemNext_6.height(childItem.height());

    childItemHover_1.mouseover(function (){
        childItem_1.css("display","none");
        childItemNext_1.css("display","block").css({"transform":"translate(5px,-17px)"});
    });
    childItemHover_1.mouseout(function (){
        childItem_1.css("display","block");
        childItemNext_1.css("display","none").css({"transform":"translate(5px,-10px)"});
    });

    childItemHover_6.mouseover(function (){
        childItem_6.css("display","none");
        childItemNext_6.css("display","block").css({"transform":"translate(-5px,-22px)"});
    });
    childItemHover_6.mouseout(function (){
        childItem_6.css("display","block");
        childItemNext_6.css("display","none").css({"transform":"translate(-5px,-15px)"});
    });
    //////////////////////// End of What We Do Section ///////////////////////



    //////////////////////// Let's Build Sth section ///////////////////////

    //-------------------- Load Elements ----------------//
    $(window).scroll(function (){
        if (pageYOffset > 1700){
            $(".secondSection .contentParent .content h2").delay(1000).animate({opacity:1},50,function () {
                $(this).addClass("load");
                $(".secondSection .contentParent .content p").delay(1000).animate({opacity:1},50,function () {
                    $(this).addClass("load");
                    $(".secondSection .contentParent .content img").delay(1000).animate({opacity:1},50,function () {
                        $(this).addClass("load");
                        $(".secondSection .contentParent .content .getStarted").delay(1000).animate({opacity:1},50,function () {
                            $(this).addClass("load");
                        });
                    });
                });
            });
        }
    });


    //////////////////////// End of Let's Build Sth section ///////////////////////


    //////////////////////// Search Box ///////////////////////
    var searchBoxParent = $(".searchBoxParent");
    $("nav .nav-item .nav-link i.fa-search").click(function (){
        searchBoxParent.css("z-index","999999999");
        $(".searchBoxParent .searchBox").css("right","0");
        searchBoxParent.css("background-color","rgba(0,0,0,0.5)");
    });

    $(".containerBox a i.fa-search").click(function (){
        searchBoxParent.css("z-index","999999999");
        $(".searchBoxParent .searchBox").css("right","0");
        searchBoxParent.css("background-color","rgba(0,0,0,0.5)");
    });

    $(".searchBoxParent .searchBox .searchFirstContent").click(function (){
        $(".searchBoxParent .searchBox").css("right","-500px");
        searchBoxParent.css("z-index","-1");
        searchBoxParent.css("background-color","transparent");
    });
    //////////////////////// End of Search Box ///////////////////////


    //////////////////////// Modals ///////////////////////
    $(".firstSection img").attr("data-toggle","modal").attr("data-target","#modalSlider");
    $(".firstSection img").click(function () {
        var imgSrc = $(this).attr("src");
        $(".bigPic").attr("src",imgSrc);
        // $(".modal-body .panel .panel-heading").text($(this).attr("alt"));
    });
    //////////////////////// End of Modals ///////////////////////


});









