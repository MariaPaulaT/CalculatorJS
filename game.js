var answer=0;
var numbers =[];

$(".btn1").click(function() {
  anadirNumero("1");
  $("h2").text("1");
  });

  $(".btn2").click(function() {
    anadirNumero("2");
    $("h2").text("2");
  });

  $(".btn3").click(function() {
    anadirNumero("3");
    $("h2").text("3");
  });

  $(".btn4").click(function() {
    anadirNumero("4");
    $("h2").text("4");
  });

  $(".btn5").click(function() {
    anadirNumero("5");
    $("h2").text("5");
  });

  $(".btn6").click(function() {
    anadirNumero("6");
    $("h2").text("6");
  });

  $(".btn7").click(function() {
    anadirNumero("7");
  });

  $(".btn8").click(function() {
    anadirNumero("8");
  });
  
  $(".btn9").click(function() {
    anadirNumero("9");
  });

  $(".btn0").click(function() {
    anadirNumero("0");
  });

  function anadirNumero(num){
    if (numbers.length === 0) {
      numbers.push(num); // add the first element to the array
    } else {
      numbers.push(num); // add another 1 to the array if the length is even
    }
  }

  

    //12 = sumar
$(".plus").click(function(){
  numeroAnt = numbers[numbers.length-1];
   if(numbers.length===0){

   } else if(numeroAnt === "1" || numeroAnt === "2" || numeroAnt === "3" ||numeroAnt === "4" || numeroAnt === "5"  || numeroAnt === "6" || numeroAnt === "7" || numeroAnt === "8" || numeroAnt === "9" || numeroAnt === "0"     ){
        numbers.push("+");
        $("h2").text("+");
    }

});

$(".equals").click(function (){
    if(numbers.length===0){

    }else {
     answer=numbers[0];
   
     console.log( numbers[1]);
     
     console.log( numbers[2]);
    for(var i=1; i<numbers.length;i++){
        if( numbers[i]===12 && numbers[i+1]<10){
             answer=answer+ numbers[i+1];       
        }
        $("h2").text(answer);
    }}
});