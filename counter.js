var countDownDate = new Date("Oct 22, 2021 15:37:25").getTime();

var x = setInterval(function() {

var now = new Date().getTime();

var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

if (distance >0) {  

$("#daysTimer").html(days);
$("#hoursTimer").html(hours);
$("#minutesTimer").html(minutes);
$("#secondsTimer").html(seconds);
$(".timer").show();


$(".mintBtn").mouseover(function() {
    $(this).css("background-color","white");
    $(this).css("color","#ed9419");
}).mouseout(function() {
    $(this).css("background-color","#ed9419");
    $(this).css("color","white");
});

}
else{
    $("#mintBtn").prop('disabled',true) 
    $("#selectBtn").attr('disabled',true) 

    $("#mintBtn").css({
        'background-color':'gray'
    })
    $(".mintBtn").hover(function(){
        $(this).css('color','white')
    })

    $("#selectBtn").css({
        'background-color':'gray'
    })
    
}
},1000);
