$(function (){
    $(".sendBtn").click(function(event){
        $(this).addClass("effectBg");
        event.preventDefault();
        count = 0;
        $("#budget").css("border-color","#007a4d");
        checkEmpty("name");
        checkEmpty("email");
        checkValidEmail("email");
        checkEmpty("phone");
        checkEmpty("message");

        if (count == 0){
            $(".form-control").css("border-color","rgba(255,255,255,0.25)").val("");
            $(".msg").animate({display:"block"},10,function (){
                $(".msg").text("Your message was sent successful. Thanks.").css("color","#007a4d");
                $(".sendBtn").removeClass("effectBg")
            });
        }

    });


    function valid(item){
        $(item).css("border-color","#007a4d");
    }
    function inValid(item){
        count++;
        $(item).css("border-color","#e34f4f");
        $(".msg").delay(2000).animate({display:"block"},10,function (){
            $(".msg").text("Validation errors occurred. Please confirm the fields and submit it again.").css("color","#e34f4f");
            $(".sendBtn").removeClass("effectBg");
        });
    }


    function checkEmpty(inputId){
        if($("[id = '"+inputId+"']").val() == ""){
            inValid($("[id = '"+inputId+"']"));
        }else {
            valid($("[id = '"+inputId+"']"));
        }
    }


    function checkValidEmail(inputId) {
        var EmailAddr = $("[id = '" + inputId + "']").val();
        var AtPos = EmailAddr.indexOf("@");
        var lastAtPos = EmailAddr.lastIndexOf("@");
        if (AtPos>1 && AtPos == lastAtPos){
            var DotPos = EmailAddr.indexOf(".");
            var lastDotPos = EmailAddr.lastIndexOf(".");
            if (DotPos>0 && (lastDotPos - AtPos)>3){
                if (EmailAddr.length - lastDotPos >2){
                    valid($("[id = '"+inputId+"']"));
                }else {
                    inValid($("[id = '"+inputId+"']"));
                }
            }else {
                inValid($("[id = '"+inputId+"']"));
            }
        }else {
            inValid($("[id = '"+inputId+"']"));
        }
    }

});