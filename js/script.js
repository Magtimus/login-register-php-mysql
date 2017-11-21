$('input').focusin(function(){
    
    $(this).parent('div').addClass("border-input");
    
})

$('input').focusout(function(){
    
    $(this).parent('div').removeClass("border-input");
    
})
