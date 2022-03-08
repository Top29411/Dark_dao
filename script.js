$( document ).ready(function() {
    $('#up').on('click',function(){
        let value=$('#myNumber').val();
        value++;
        $('#myNumber').val(value);
        let cost=value*0.02;
        $('#cost').text(cost);
    })
    $('#down').on('click',function(){
        let value=$('#myNumber').val();
        if(value>0)
            {
                value--;
                $('#myNumber').val(value);
                let cost=value*0.02;
                $('#cost').text(cost);
            }
        else{
                $('#myNumber').val(0);
            }
    })

    $(".collapse.show").each(function() {
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function() {
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        $(this).prev(".card-header").css("background-color","#ed9419");
    }).on('hide.bs.collapse', function() {
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        $(this).prev(".card-header").css("background-color","#262022");

    });

    
});

