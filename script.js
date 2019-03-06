$("button").click(function() {

var age = $(".one").val();
var color = $(".two").val();
var yellow = "yellow";
var brown = "brown";
console.log("test",age,color);
    if (color === "yellow" && age <=20){
        $(".result").text("Ji Eun Tak");
        $(".jieuntak").fadeIn();
    }else if (color === "yellow" && age >20){
        $(".result").text("Kim Sun/Sunny");
        $(".sunny").fadeIn();
    }else if (color === "brown" && age <=20){
        $(".result").text("Wang Yeo/Grim Reaper");
        $(".grimreaper").fadeIn();
    }else if (color === "brown" && age >20){
        $(".result").text("Kim Shin/Goblin");
        $(".goblin").fadeIn();
    }else {
        $("result").text("Error! Try again.");
        $(".error").fadeIn();
    }});