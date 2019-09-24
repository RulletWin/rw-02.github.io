var numPool = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function shuffle(numPool){
    for(var j, x, i = numPool.length; i; j = parseInt(Math.random() * i), x = numPool[--i], numPool[i] = numPool[j], numPool[j] = x);
    return numPool;
};
var randomResult = shuffle(numPool);
var i=0; // Num of times
var a; // a - first num
var b; // b - second num
var c; // c - number three
var e; // e - result
var result1 = randomResult.pop(); // result 
var result2 = randomResult.pop(); // result
var result3 = randomResult.pop(); // result
var result4 = randomResult.pop(); // result 
var result5 = randomResult.pop(); // result
var result6 = randomResult.pop(); // resultv
var tocken=50;
cash = document.getElementById('Score');
cash.innerHTML = ('Score: ') + tocken;




function out(){
	
	if(tocken < 50){
		var alarm = document.getElementById('res2');
		alarm.innerHTML = ('need more');
		
		


	}
    else if(tocken >= 50){
        tocken=tocken - 50;
        var alarm = document.getElementById('Score');
		alarm.innerHTML = ('Score: ') + (tocken);
        
    

	var s = document.getElementById('td1');
    var y = document.getElementById('td2');
    var k = document.getElementById('td3');
    var x = document.getElementById('td4');
    var v = document.getElementById('td5');
    var n = document.getElementById('td6');
    var m = document.getElementById('td7');
    var q = document.getElementById('td8');
    var w = document.getElementById('td9');
    
    s.innerHTML = number;
    y.innerHTML = number2;
    k.innerHTML = number3;
    x.innerHTML = number4;
    v.innerHTML = number5;
    n.innerHTML = number6;
    m.innerHTML = number7;
    q.innerHTML = number8;
    w.innerHTML = number9;
    
        var zif = [result1, result2, result3, result4, result5, result6];
        var line1 = [number, number2, number3];
        var line2 = [number4, number5, number6];
        var line3 = [number7, number8, number9];
    
        if (( number == result1 || number == result2 || number == result3 || number == result4 || number == result5 || number == result6) &&  (number2 == result1 || number2 == result2 || number2 == result3 || number2 == result4 || number2 == result5 || number2 == result6) &&  (number3 == result1 || number3 == result2 || number3 == result3 || number3 == result4 || number3 == result5 || number3 == result6)){
     var n = document.getElementById('res2');
     n.innerHTML = ('you win');
     document.getElementById('td1').style.backgroundColor = '#00FF00';
     document.getElementById('td2').style.backgroundColor = '#00FF00';
     document.getElementById('td3').style.backgroundColor = '#00FF00';
     var cash = document.getElementById('Score');
     tocken = tocken + 100;
     cash.innerHTML = ('Score: ') + (tocken);
         
         
     
     
     
     
            
            
     
  

    }
        else if (( number4 == result1 || number4 == result2 || number4 == result3 || number4 == result4 || number4 == result5 || number4 == result6) &&  (number5 == result1 || number5== result2 || number5 == result3 || number5 == result4 || number5 == result5 || number5 == result6) &&  (number6 == result1 || number6 == result2 || number6 == result3 || number6 == result4 || number6 == result5 || number6 == result6)){
     var n = document.getElementById('res2');
     n.innerHTML = ('you win');
     document.getElementById('td4').style.backgroundColor = '#00FF00';
     document.getElementById('td5').style.backgroundColor = '#00FF00';
     document.getElementById('td6').style.backgroundColor = '#00FF00';
     tocken = tocken + 100;
     var cash = document.getElementById('Score');
     
     cash.innerHTML = ('Score: ') + (tocken);        
         
     
         
     
     
     
     
     
            
  
         }
    }
        else if (( number7 == result1 || number7 == result2 || number7 == result3 || number7 == result4 || number7 == result5 || number7 == result6) &&  (number8 == result1 || number8== result2 || number8 == result3 || number8 == result4 || number8 == result5 || number8 == result6) &&  (number9 == result1 || number9 == result2 || number9 == result3 || number9 == result4 || number9 == result5 || number9 == result6)){
     var n = document.getElementById('res2');
     n.innerHTML = ('you win');
     document.getElementById('td7').style.backgroundColor = '#00FF00';
     document.getElementById('td8').style.backgroundColor = '#00FF00';
     document.getElementById('td9').style.backgroundColor = '#00FF00';
     var cash = document.getElementById('Score');
     tocken = tocken + 100;
     cash.innerHTML = ('Score: ') + (tocken);
             
    }


        else {
     var n = document.getElementById('res2');
     n.innerHTML = ('you lose');
     var cash = document.getElementById('Score');
     
     cash.innerHTML = ('Score: ') + tocken;
            


     


    }
    }


        


    



    
 
             

